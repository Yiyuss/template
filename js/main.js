import { AudioManager } from './audioManager.js';
import { Transitions } from './transitions.js';
import { Story } from './story.js';

window.addEventListener('DOMContentLoaded', () => {
  // 初始化轉場
  Transitions.init();

  const startButton = document.getElementById('start-game-button');
  if (startButton) {
    startButton.addEventListener('click', () => {
      // 切換畫面
      document.getElementById('start-screen').style.display = 'none';
      document.getElementById('game-container').style.display = 'block';

      // 使用者互動 → 才能初始化 AudioContext
      if (!AudioManager.context) {
        AudioManager.init(Story.audio);
        if (AudioManager.context.state === "suspended") {
          AudioManager.context.resume().then(() => {
            console.log("AudioContext 已解鎖 ✅");
          });
        }
      }

      // 開始故事
      Story.start();
    });
  }
});
