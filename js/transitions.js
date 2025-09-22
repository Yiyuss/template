// 引入音樂管理
import { AudioManager } from './audioManager.js';

// 轉場效果管理
const Transitions = {
    // 初始化轉場效果
    init: function() {
        // 創建黑色淡化覆蓋層
        const fadeOverlay = document.createElement('div');
        fadeOverlay.className = 'fade-overlay';
        document.getElementById('game-container').appendChild(fadeOverlay);
        
        // 創建白色淡化覆蓋層
        const whiteFadeOverlay = document.createElement('div');
        whiteFadeOverlay.className = 'white-fade-overlay';
        document.getElementById('game-container').appendChild(whiteFadeOverlay);
    },
    
    // 黑色淡入淡出
    fadeToBlack: function(callback, duration = 1000) {
        const overlay = document.querySelector('.fade-overlay');
        overlay.classList.add('active');
        
        // 轉場開始時暫停音樂
        AudioManager.pauseBgm();
        
        setTimeout(() => {
            if (callback) callback();
            
            setTimeout(() => {
                overlay.classList.remove('active');
                // 轉場結束後，音樂會在 loadScene 中處理
            }, duration);
        }, duration);
    },

    // 白色淡入淡出
    fadeToWhite: function(callback, duration = 1000) {
        const overlay = document.querySelector('.white-fade-overlay');
        overlay.classList.add('active');
        
        // 轉場開始時暫停音樂
        AudioManager.pauseBgm();
        
        setTimeout(() => {
            if (callback) callback();
            
            setTimeout(() => {
                overlay.classList.remove('active');
                // 轉場結束後，音樂會在 loadScene 中處理
            }, duration);
        }, duration);
    },
    
    // 簡單淡入淡出
    simpleFade: function(element, fadeIn, duration = 500) {
        if (fadeIn) {
            element.style.opacity = '0';
            element.style.display = 'block';
            
            setTimeout(() => {
                element.style.opacity = '1';
            }, 10);
        } else {
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.style.display = 'none';
            }, duration);
        }
    }
};

// 匯出模組
export { Transitions };
