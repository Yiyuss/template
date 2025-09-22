// 引入模組
import { AudioManager } from './audioManager.js';
import { Transitions } from './transitions.js';
import { Story } from './story.js';

// DOM 載入完成後執行
window.addEventListener('DOMContentLoaded', () => {
    // 初始化音效系統
    AudioManager.init();

    // 如果故事設定有預設 BGM，自動播放
    if (Story.defaultBgm) {
        AudioManager.playBgm(Story.defaultBgm);
    }

    // 綁定開始按鈕
    const startButton = document.getElementById('start-game-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('game-container').style.display = 'block';
            // 這裡之後可以加入故事啟動邏輯
        });
    }
});
