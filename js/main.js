// 引入模組
import { AudioManager } from './audioManager.js';
import { Transitions } from './transitions.js';
import { Story } from './story.js';

// DOM 載入完成後執行
window.addEventListener('DOMContentLoaded', () => {
    // 初始化轉場效果
    Transitions.init();

    // 綁定開始按鈕
    const startButton = document.getElementById('start-game-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('game-container').style.display = 'block';

            // 點擊時解鎖 AudioContext + 初始化
            if (!AudioManager.context) {
                AudioManager.init(Story.audio);
                console.log("AudioContext 已解鎖 ✅");
            }

            // 呼叫故事開始
            Story.start();
        });
    }
});
