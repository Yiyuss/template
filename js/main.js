// 主遊戲邏輯
const Game = {
    currentScene: 'start',
    currentDialogue: 0,
    
    // 初始化遊戲
    init: function() {
        // 初始化轉場效果
        Transitions.init();
        
        // 初始化音頻管理器
        AudioManager.init();
        
        // 開始遊戲
        this.startGame();
        
        // 添加點擊事件監聽器
        document.getElementById('dialogue-box').addEventListener('click', this.nextDialogue.bind(this));
    },
    
    // 開始遊戲
    startGame: function() {
        this.currentScene = 'start';
        this.currentDialogue = 0;
        this.loadScene(this.currentScene);
        
        // 播放默認背景音樂
        if (Story.defaultBgm) {
            AudioManager.playBgm(Story.defaultBgm);
        }
    },
    
 // 載入場景
loadScene: function(sceneName) {
    const scene = Story.scenes[sceneName];
    
    if (!scene) {
        console.error(`場景 "${sceneName}" 不存在`);
        return;
    }
    
    // 使用黑色淡入淡出轉場
    Transitions.fadeToBlack(() => {
        // 設置背景
        document.getElementById('background-layer').style.backgroundImage = `url('${scene.background}')`;
        
        // 清除角色
        document.getElementById('character-layer').innerHTML = '';
        
        // 重置對話索引
        this.currentScene = sceneName;
        this.currentDialogue = 0;
        
        // 停止當前音樂並切換到新場景的音樂
        if (scene.bgm) {
            // 即使是同一首音樂，也重新播放
            AudioManager.stopBgm();
            AudioManager.playBgm(scene.bgm);
        } else if (Story.defaultBgm) {
            // 如果場景沒有指定音樂，播放默認音樂
            AudioManager.stopBgm();
            AudioManager.playBgm(Story.defaultBgm);
        }
        
        // 顯示當前對話
        this.displayCurrentDialogue();
    });
},
    
    // 顯示當前對話
    displayCurrentDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        const dialogue = scene.dialogues[this.currentDialogue];
        
        if (!dialogue) {
            console.error('對話不存在');
            return;
        }
        
        // 設置角色名稱和對話文字
        document.getElementById('character-name').textContent = dialogue.character;
        document.getElementById('dialogue-text').textContent = dialogue.text;
        
        // 處理角色顯示
        if (dialogue.character && dialogue.character !== '') {
            this.showCharacter(dialogue.character);
        }

        // 播放配音 (新增)
        if (dialogue.voice) {
            AudioManager.playVoice(dialogue.voice);
        }
        
        // 處理選擇項
        if (dialogue.choices) {
            this.showChoices(dialogue.choices);
        } else {
            document.getElementById('choice-container').style.display = 'none';
        }
        
        // 處理視頻
        if (dialogue.video) {
            // 播放視頻前暫停BGM
            AudioManager.pauseBgm();
            this.playVideo(dialogue.video, dialogue.nextScene);
        }
    },
    
    // 顯示角色
    showCharacter: function(characterName) {
        const characterData = Story.characters[characterName];
        
        if (!characterData) {
            console.error(`角色 "${characterName}" 不存在`);
            return;
        }
        
        // 清除現有角色
        document.getElementById('character-layer').innerHTML = '';
        
        // 創建角色元素
        const characterElement = document.createElement('img');
        characterElement.src = characterData.image;
        characterElement.className = 'character';
        characterElement.style.left = characterData.position;
        
        // 添加到角色層
        document.getElementById('character-layer').appendChild(characterElement);
    },
    
    // 顯示選擇項
    showChoices: function(choices) {
        const choiceContainer = document.getElementById('choice-container');
        choiceContainer.innerHTML = '';
        
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            
            button.addEventListener('click', () => {
                this.loadScene(choice.nextScene);
                choiceContainer.style.display = 'none';
            });
            
            choiceContainer.appendChild(button);
        });
        
        choiceContainer.style.display = 'block';
    },
    
  // 播放視頻
playVideo: function(videoSrc, nextScene) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = videoSrc;
    videoPlayer.style.display = 'block';
    
    // 播放視頻前停止BGM
    AudioManager.stopBgm();
    
    videoPlayer.onended = () => {
        videoPlayer.style.display = 'none';
        
        // 視頻結束後，如果有下一個場景，則加載該場景
        // 場景加載會處理新的BGM
        if (nextScene) {
            this.loadScene(nextScene);
        } else {
            // 如果沒有下一個場景，恢復當前場景的BGM
            const currentScene = Story.scenes[this.currentScene];
            if (currentScene.bgm) {
                AudioManager.playBgm(currentScene.bgm);
            } else if (Story.defaultBgm) {
                AudioManager.playBgm(Story.defaultBgm);
            }
        }
    };
    
    videoPlayer.play();
},
    
    // 下一個對話
    nextDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        
        // 如果當前對話有選擇項或視頻，不進行下一步
        const currentDialogue = scene.dialogues[this.currentDialogue];
        if (currentDialogue.choices || currentDialogue.video) {
            return;
        }

        // 停止當前配音 (新增)
        AudioManager.stopVoice();
        
        // 移動到下一個對話
        this.currentDialogue++;
        
        // 如果對話結束，返回到開始場景
        if (this.currentDialogue >= scene.dialogues.length) {
            this.loadScene('start');
            return;
        }
        
        // 顯示下一個對話
        this.displayCurrentDialogue();
    }
};

// 當頁面加載完成後初始化遊戲
window.addEventListener('DOMContentLoaded', () => {
    // 初始化音頻管理器
    AudioManager.init();
    
    // 初始化轉場效果
    Transitions.init();
    
    // 綁定開始遊戲按鈕
    document.getElementById('start-game-button').addEventListener('click', function() {
        document.getElementById('start-screen').style.display = 'none';
        Game.init();
    });
});



