// 主遊戲邏輯
const Game = {
    currentScene: 'start',
    currentDialogue: 0,
    
    // 初始化遊戲
    init: function() {
        // 初始化轉場效果
        Transitions.init();
        
        // 初始化存檔系統
        SaveSystem.init();
        
        // 初始化音頻管理器
        AudioManager.init();
        
        // 先載入首場景背景和音樂
        this.loadStartSceneImmediate();
        
        // 添加點擊事件監聽器
        document.getElementById('dialogue-box').addEventListener('click', this.nextDialogue.bind(this));
    },

    // 立即載入首場景背景和音樂
    loadStartSceneImmediate: function() {
        const startScene = Story.scenes.start;

        // 背景
        const bgImg = new Image();
        bgImg.src = startScene.background;
        bgImg.onload = () => {
            document.getElementById('background-layer').style.backgroundImage = `url(${bgImg.src})`;

            // 播放BGM
            if (startScene.bgm) {
                AudioManager.stopBgm();
                AudioManager.playBgm(startScene.bgm);
            } else if (Story.defaultBgm) {
                AudioManager.stopBgm();
                AudioManager.playBgm(Story.defaultBgm);
            }

            // 顯示首個對話
            Game.currentScene = 'start';
            Game.currentDialogue = 0;
            Game.displayCurrentDialogue();
        };

        // 背景預載其他資源，不阻塞畫面
        setTimeout(() => {
            ImageAssets.preloadImages();
        }, 0);
    },

    // 開始遊戲（保留舊邏輯）
    startGame: function() {
        this.currentScene = 'start';
        this.currentDialogue = 0;
        this.loadScene(this.currentScene);
    },

    // 載入場景
    loadScene: function(sceneName) {
        const scene = Story.scenes[sceneName];
        if (!scene) {
            console.error(`場景 "${sceneName}" 不存在`);
            return;
        }

        Transitions.fadeToBlack(() => {
            document.getElementById('background-layer').style.backgroundImage = `url('${scene.background}')`;
            document.getElementById('character-layer').innerHTML = '';
            this.currentScene = sceneName;
            this.currentDialogue = 0;

            if (scene.bgm) {
                AudioManager.stopBgm();
                AudioManager.playBgm(scene.bgm);
            } else if (Story.defaultBgm) {
                AudioManager.stopBgm();
                AudioManager.playBgm(Story.defaultBgm);
            }

            this.displayCurrentDialogue();
        });
    },

    // 顯示當前對話
    displayCurrentDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        const dialogue = scene.dialogues[this.currentDialogue];
        if (!dialogue) return;

        document.getElementById('character-name').textContent = dialogue.character;
        document.getElementById('dialogue-text').textContent = dialogue.text;

        if (dialogue.character && dialogue.character !== '') {
            this.showCharacter(dialogue.character);
        }

        if (dialogue.choices) {
            this.showChoices(dialogue.choices);
        } else {
            document.getElementById('choice-container').style.display = 'none';
        }

        if (dialogue.video) {
            AudioManager.pauseBgm();
            this.playVideo(dialogue.video, dialogue.nextScene);
        }
    },

    // 顯示角色
    showCharacter: function(characterName) {
        const characterData = Story.characters[characterName];
        if (!characterData) return;

        document.getElementById('character-layer').innerHTML = '';
        const characterElement = document.createElement('img');
        characterElement.src = characterData.image;
        characterElement.className = 'character';
        characterElement.style.left = characterData.position;
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
        AudioManager.stopBgm();

        videoPlayer.onended = () => {
            videoPlayer.style.display = 'none';
            if (nextScene) {
                this.loadScene(nextScene);
            } else {
                const currentScene = Story.scenes[this.currentScene];
                if (currentScene.bgm) AudioManager.playBgm(currentScene.bgm);
                else if (Story.defaultBgm) AudioManager.playBgm(Story.defaultBgm);
            }
        };
        videoPlayer.play();
    },

    // 下一個對話
    nextDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        const currentDialogue = scene.dialogues[this.currentDialogue];
        if (currentDialogue.choices || currentDialogue.video) return;

        this.currentDialogue++;
        if (this.currentDialogue >= scene.dialogues.length) {
            this.loadScene('start');
            return;
        }

        this.displayCurrentDialogue();
    }
};

// 當頁面載入完成後初始化遊戲
window.addEventListener('DOMContentLoaded', () => {
    AudioManager.init();
    Transitions.init();

    document.getElementById('start-game-button').addEventListener('click', () => {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        Game.init();
    });
});
