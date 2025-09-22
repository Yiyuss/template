// main.js
import { AudioManager } from './audioManager.js';

// 初始化遊戲
window.addEventListener('DOMContentLoaded', () => {
    // 初始化音效系統
    AudioManager.init();

    // 如果有設定預設 BGM，就開場播放
    if (typeof Story !== "undefined" && Story.defaultBgm) {
        AudioManager.playBgm(Story.defaultBgm);
    }

    // 這裡放你的其他遊戲初始化程式
    console.log("遊戲初始化完成");
});
