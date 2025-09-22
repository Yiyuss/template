// 引入模組
import { AudioManager } from './audioManager.js';
import { Transitions } from './transitions.js';
import { Story } from './story.js';

// DOM 載入完成後執行
window.addEventListener('DOMContentLoaded', () => {

    // 初始化音效系統，傳入 Story.audio
    AudioManager.init(Story.audio);

    // 點擊解鎖 AudioContext（Chrome 自動播放限制）
    document.addEventListener("click", () => {
        if (AudioManager.context && AudioManager.context.state === "suspended") {
            AudioManager.context.resume();
            console.log("AudioContext 已解鎖 ✅");
        }
    }, { once: true });

    // 初始化轉場效果
    Transitions.init();

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
            // 這裡可以加入 Story.start() 或故事啟動邏輯
            Story.start();
        });
    }

});
