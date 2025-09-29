// main.js
import { Story } from './story.js';           // 必須放在最前面
import { AudioManager } from './audioManager.js';
import { Transitions } from './transitions.js';


// DOM 載入完成後執行
window.addEventListener('DOMContentLoaded', () => {
    // 初始化音頻系統
    AudioManager.init();
    
    // 使用者手動解鎖 AudioContext
    const unlockAudio = () => {
        if (AudioManager.audioContext && AudioManager.audioContext.state === 'suspended') {
            AudioManager.audioContext.resume().then(() => {
                console.log('音頻上下文已解鎖');
            });
        }
    };
    
    // 添加用戶交互事件來解鎖音頻
    document.addEventListener('click', unlockAudio, { once: true });
    document.addEventListener('touchstart', unlockAudio, { once: true });
    
    // 初始化轉場效果
    Transitions.init();
    
    // 綁定開始遊戲按鈕
    document.getElementById('start-game-button').addEventListener('click', () => {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        Game.init();
    });
});

// 遊戲核心邏輯
const Game = {
    currentScene: 'start',
    currentDialogue: 0,
    
    // 初始化遊戲
    init: function() {
        this.currentScene = 'start';
        this.currentDialogue = 0;
        
        // 載入初始場景
        this.loadScene(this.currentScene);
        
        // 添加對話框點擊事件
        document.getElementById('dialogue-box').addEventListener('click', () => {
            this.nextDialogue();
        });
        
        // 播放默認背景音樂
        if (Story.defaultBgm) {
            AudioManager.playBgm(Story.defaultBgm);
        }
    },
    
    // 載入場景
    loadScene: function(sceneName) {
        const scene = Story.scenes[sceneName];
        if (!scene) return;
        
        // 使用轉場效果
        Transitions.fadeToBlack(() => {
            // 設置背景
            document.getElementById('background-layer').style.backgroundImage = `url('${scene.background}')`;
            
            // 清空角色層
            document.getElementById('character-layer').innerHTML = '';
            
            // 更新當前場景
            this.currentScene = sceneName;
            this.currentDialogue = 0;
            
            // 處理背景音樂
            if (scene.bgm) {
                AudioManager.stopBgm();
                AudioManager.playBgm(scene.bgm);
            }
            
            // 顯示當前對話
            this.displayCurrentDialogue();
        });
    },

    
    // 顯示當前對話
    displayCurrentDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        const dialogue = scene.dialogues[this.currentDialogue];
        
        if (!dialogue) return;
        
        // 設置角色名稱和對話文字
        document.getElementById('character-name').textContent = dialogue.character;
        document.getElementById('dialogue-text').textContent = dialogue.text;
        
        // 處理角色顯示
        if (dialogue.character && dialogue.character !== '') {
            this.showCharacter(dialogue.character);
        }
        
        // 播放配音
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
            this.playVideo(dialogue.video, dialogue.nextScene);
        }
    },
    
    // 顯示角色
    showCharacter: function(characterName) {
        const characterImage = Story.getCharacterImage(characterName);
        const position = Story.getCharacterPosition(characterName);
        
        const characterLayer = document.getElementById('character-layer');
        characterLayer.innerHTML = '';
        
        if (characterImage) {
            const characterElement = document.createElement('img');
            characterElement.src = characterImage;
            characterElement.className = 'character';
            characterElement.style.left = position;
            characterLayer.appendChild(characterElement);
        }
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
                AudioManager.stopVoice();
                // 若選項附帶影片，先播放影片，結束後再進入下一場景
                if (choice.video) {
                    this.playVideo(choice.video, choice.nextScene);
                } else {
                    this.loadScene(choice.nextScene);
                }
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
        videoPlayer.preload = 'auto';
        videoPlayer.setAttribute('playsinline', '');
        videoPlayer.style.display = 'block';
        
        // 影片開始前先將 BGM 靜音並停止，避免疊音
        AudioManager.setVolume(0);
        AudioManager.stopBgm();
        AudioManager.stopVoice();
        
        // 影片載入錯誤時，避免卡住，直接切到下一場景或恢復BGM
        videoPlayer.onerror = () => {
            console.error('影片載入失敗:', videoSrc);
            videoPlayer.style.display = 'none';
            if (nextScene) {
                this.loadScene(nextScene);
            } else {
                const currentScene = Story.scenes[this.currentScene];
                if (currentScene.bgm) {
                    AudioManager.playBgm(currentScene.bgm);
                }
            }
        };

        videoPlayer.onended = () => {
            videoPlayer.style.display = 'none';
            
            if (nextScene) {
                this.loadScene(nextScene);
            } else {
                const currentScene = Story.scenes[this.currentScene];
                if (currentScene.bgm) {
                    AudioManager.playBgm(currentScene.bgm);
                }
            }
        };
        
        // 嘗試播放，若被拒絕（政策或暫時性錯誤），也走後備邏輯
        const tryPlay = videoPlayer.play();
        if (tryPlay && typeof tryPlay.catch === 'function') {
            tryPlay.catch((err) => {
                console.warn('影片播放失敗，採用後備流程:', err);
                videoPlayer.style.display = 'none';
                if (nextScene) {
                    this.loadScene(nextScene);
                } else {
                    const currentScene = Story.scenes[this.currentScene];
                    if (currentScene.bgm) {
                        AudioManager.playBgm(currentScene.bgm);
                    }
                }
            });
        }
    },
    
    // 下一個對話
    nextDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        const currentDialogue = scene.dialogues[this.currentDialogue];
        
        // 如果當前對話有選擇項或視頻，不進行下一步
        if (currentDialogue.choices || currentDialogue.video) {
            return;
        }
        
        // 停止當前配音
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

export { Game };
