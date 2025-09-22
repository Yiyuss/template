import { AudioManager } from './audioManager.js';
import { Transitions } from './transitions.js';
import { Story } from './story.js';

window.addEventListener('DOMContentLoaded', () => {

    // 初始化音效系統
    AudioManager.init();

    // 初始化轉場
    Transitions.init();

    // 綁定開始按鈕
    const startButton = document.getElementById('start-game-button');
    if (startButton) {
        startButton.addEventListener('click', () => {

            // 隱藏開始畫面，顯示遊戲畫面
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('game-container').style.display = 'block';

            // 解鎖 AudioContext
            AudioManager.resumeContext();

            // 播放預設 BGM
            if (Story.defaultBgm) {
                AudioManager.playBgm(Story.defaultBgm);
            }

            // 啟動故事
            if (typeof Story.start === 'function') {
                Story.start();
            }
        });
    }

    // 第一次點擊任意位置也可解鎖 AudioContext（安全措施）
    document.addEventListener('click', () => AudioManager.resumeContext(), { once: true });

});
