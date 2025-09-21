// 存檔系統
const SaveSystem = {
    // 初始化存檔系統
    init: function() {
        // 綁定存檔按鈕事件
        document.getElementById('save-button').addEventListener('click', this.toggleSavePanel);
        document.getElementById('close-save-panel').addEventListener('click', this.toggleSavePanel);
        
        // 綁定存檔位置事件
        const saveSlots = document.querySelectorAll('.save-slot');
        saveSlots.forEach(slot => {
            slot.addEventListener('click', (e) => {
                const slotNumber = e.target.getAttribute('data-slot');
                this.saveGame(slotNumber);
            });
        });
        
        // 載入存檔資訊
        this.loadSaveInfo();
    },
    
    // 切換存檔面板顯示
    toggleSavePanel: function() {
        const savePanel = document.getElementById('save-panel');
        if (savePanel.style.display === 'none' || !savePanel.style.display) {
            savePanel.style.display = 'block';
        } else {
            savePanel.style.display = 'none';
        }
    },
    
    // 保存遊戲
    saveGame: function(slotNumber) {
        // 獲取當前遊戲狀態
        const gameState = {
            currentScene: Game.currentScene,
            currentDialogue: Game.currentDialogue,
            currentBackground: document.getElementById('background-layer').style.backgroundImage,
            characters: [],
            // 保存BGM狀態
            bgm: {
                src: AudioManager.currentBgm,
                isPlaying: AudioManager.isBgmPlaying,
                volume: AudioManager.bgmPlayer.volume
            },
            timestamp: new Date().toLocaleString()
        };

        // 保存配音狀態 (新增)
            voice: {
                src: AudioManager.currentVoice,
                isPlaying: AudioManager.isVoicePlaying,
                volume: AudioManager.voiceGain.gain.value
            },
            timestamp: new Date().toLocaleString()
        };

        // 獲取角色狀態
        const characters = document.querySelectorAll('.character');
        characters.forEach(char => {
            if (char.style.display !== 'none') {
                gameState.characters.push({
                    id: char.id,
                    src: char.src,
                    position: char.style.left
                });
            }
        });
        
        // 保存到本地存儲
        localStorage.setItem(`visualNovel_save_${slotNumber}`, JSON.stringify(gameState));
        
        // 更新存檔信息
        this.updateSaveSlotInfo(slotNumber, gameState.timestamp);
        
        // 顯示保存成功消息
        alert(`已保存到存檔位置 ${slotNumber}`);
    },
    
    // 載入遊戲
    loadGame: function(slotNumber) {
        const saveData = localStorage.getItem(`visualNovel_save_${slotNumber}`);
        
        if (saveData) {
            const gameState = JSON.parse(saveData);
            
            // 載入場景和對話
            Game.currentScene = gameState.currentScene;
            Game.currentDialogue = gameState.currentDialogue;
            
            // 載入背景
            document.getElementById('background-layer').style.backgroundImage = gameState.currentBackground;
            
            // 清除現有角色
            document.getElementById('character-layer').innerHTML = '';
            
            // 載入角色
            gameState.characters.forEach(charData => {
                const charElement = document.createElement('img');
                charElement.id = charData.id;
                charElement.src = charData.src;
                charElement.className = 'character';
                charElement.style.left = charData.position;
                document.getElementById('character-layer').appendChild(charElement);
            });
            
            // 恢復BGM狀態
            if (gameState.bgm && gameState.bgm.src) {
                if (gameState.bgm.isPlaying) {
                    AudioManager.playBgm(gameState.bgm.src, gameState.bgm.volume);
                } else {
                    AudioManager.currentBgm = gameState.bgm.src;
                    AudioManager.bgmPlayer.src = gameState.bgm.src;
                    AudioManager.bgmPlayer.volume = gameState.bgm.volume;
                    AudioManager.isBgmPlaying = false;
                }
            }

             // 恢復配音狀態 (新增)
            if (gameState.voice && gameState.voice.src) {
                if (gameState.voice.isPlaying) {
                    AudioManager.playVoice(gameState.voice.src);
                    AudioManager.setVoiceVolume(gameState.voice.volume);
                }
            }
            
            // 繼續遊戲
            Game.displayCurrentDialogue();
            
            // 關閉存檔面板
            this.toggleSavePanel();
            
            return true;
        }
        
        alert('沒有找到存檔數據');
        return false;
    },
    
    // 更新存檔位置信息
    updateSaveSlotInfo: function(slotNumber, timestamp) {
        const saveSlot = document.querySelector(`.save-slot[data-slot="${slotNumber}"]`);
        saveSlot.textContent = `存檔位置 ${slotNumber} - ${timestamp}`;
    },
    
    // 載入所有存檔信息
    loadSaveInfo: function() {
        for (let i = 1; i <= 3; i++) {
            const saveData = localStorage.getItem(`visualNovel_save_${i}`);
            if (saveData) {
                const gameState = JSON.parse(saveData);
                this.updateSaveSlotInfo(i, gameState.timestamp);
            }
        }
    }

};
