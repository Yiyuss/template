// main.js
import { AudioManager } from './audioManager.js';
import { Transitions } from './transitions.js';
import { Story } from './story.js';

// DOM 載入完成後執行
window.addEventListener('DOMContentLoaded', () => {
    // 初始化音效系統
    AudioManager.init();

    // 使用者手勢解鎖 AudioContext
    const unlockAudio = () => {
        if (AudioManager.audioContext && AudioManager.audioContext.state === "suspended") {
            AudioManager.audioContext.resume().then(() => {
                console.log("AudioContext 已解鎖 ✅");
            });
        }
    };
    document.addEventListener("click", unlockAudio, { once: true });
    document.addEventListener("keydown", unlockAudio, { once: true });

    // 初始化轉場
    Transitions.init();

    // 隱藏遊戲容器，顯示開始畫面
    document.getElementById('game-container').style.display = 'none';

    // 綁定開始按鈕
    const startButton = document.getElementById('start-game-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('game-container').style.display = 'block';

            // 啟動故事
            Story.start();
        });
    }

    // 如果有默認 BGM，延遲到手勢解鎖後播放
    if (Story.defaultBgm) {
        const playDefaultBgm = () => {
            AudioManager.playBgm(Story.defaultBgm);
        };
        document.addEventListener("click", playDefaultBgm, { once: true });
        document.addEventListener("keydown", playDefaultBgm, { once: true });
    }
});
