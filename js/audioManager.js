import { Story } from './story.js';


// 音頻管理器
export const AudioManager = {    // 修改：添加 export 關鍵字
    audioContext: null,
    bgmSource: null,
    bgmBuffer: null,
    bgmGain: null,
    voiceSource: null,
    voiceGain: null,
    currentBgm: '',
    isBgmPlaying: false,
    audioBuffers: {}, // 用於存儲預加載的音頻
    
    // 初始化音頻管理器
    init: function() {
        // 創建音頻上下文
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            this.bgmGain = this.audioContext.createGain();
            this.bgmGain.connect(this.audioContext.destination);
            this.bgmGain.gain.value = 0.5; // 默認音量
            
            // 預加載所有音頻
            this.preloadAudio();
            
            // 添加用戶交互事件監聽器，解決自動播放問題
            document.addEventListener('click', this.resumeAudioContext.bind(this), { once: true });
            document.addEventListener('keydown', this.resumeAudioContext.bind(this), { once: true });
        } catch (e) {
            console.error('Web Audio API 不支持:', e);
        }
    },
    
    // 恢復音頻上下文（解決自動播放問題）
    resumeAudioContext: function() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume().then(() => {
                console.log('音頻上下文已恢復');
                // 僅恢復上下文，不自動播放默認BGM，避免意外疊音
            });
        }
    },
    
    // 預加載音頻
    preloadAudio: function() {
        if (!this.audioContext) return;
        
        // 預加載所有BGM
        if (Story.audio && Story.audio.bgm) {
            Story.audio.bgm.forEach(bgm => {
                this.loadAudio(bgm.path);
            });
        }
        
        // 不再預加載默認BGM，改由場景明確指定
    },
    
    // 加載音頻文件
    loadAudio: function(url) {
        if (!this.audioContext || this.audioBuffers[url]) return;
        
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.audioBuffers[url] = audioBuffer;
                console.log(`音頻 ${url} 已加載`);
            })
            .catch(error => console.error(`加載音頻 ${url} 失敗:`, error));
    },
    
    // 播放背景音樂
    playBgm: function(audioSrc, volume = 0.5) {
        if (!this.audioContext) {
            console.error('音頻上下文不存在，無法播放BGM');
            return;
        }
        
        console.log('嘗試播放BGM:', audioSrc);
        
        // 檢查文件路徑是否有效
        if (!audioSrc || typeof audioSrc !== 'string') {
            console.error('無效的音頻路徑:', audioSrc);
            return;
        }
        
        // 徹底停止當前播放的BGM（無論如何都要先停止）
        this.stopBgm();
        
        // 如果音頻上下文被暫停，嘗試恢復
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume().then(() => {
                console.log('音頻上下文已恢復');
                // 恢復後重新嘗試播放
                this._loadAndPlayBgm(audioSrc, volume);
            }).catch(e => {
                console.warn('恢復音頻上下文失敗:', e);
            });
        } else {
            // 直接加載並播放
            this._loadAndPlayBgm(audioSrc, volume);
        }
    },
    
    // 內部方法：加載並播放BGM
    _loadAndPlayBgm: function(audioSrc, volume) {
        // 設置新的BGM
        this.currentBgm = audioSrc;
        
        // 先檢查緩存中是否有該音頻
        if (this.audioBuffers[audioSrc]) {
            console.log('使用緩存的音頻:', audioSrc);
            this.playBufferedAudio(this.audioBuffers[audioSrc], volume);
            return;
        }
        
        console.log('加載新音頻:', audioSrc);
        // 加載新的音頻
        fetch(audioSrc)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`無法加載音頻 ${audioSrc}: ${response.status} ${response.statusText}`);
                }
                return response.arrayBuffer();
            })
            .then(arrayBuffer => {
                console.log('音頻數據已獲取，開始解碼:', audioSrc);
                return this.audioContext.decodeAudioData(arrayBuffer);
            })
            .then(audioBuffer => {
                // 保存到緩存
                this.audioBuffers[audioSrc] = audioBuffer;
                console.log('音頻解碼成功，準備播放:', audioSrc);
                // 確保在解碼完成前沒有其他 BGM 開始播放
                if (this.currentBgm === audioSrc) {
                    console.log('開始播放新加載的音頻:', audioSrc);
                    this.playBufferedAudio(audioBuffer, volume);
                } else {
                    console.warn('BGM已更改，取消播放:', audioSrc);
                }
            })
            .catch(error => {
                console.error('BGM播放失敗:', error, audioSrc);
                // 嘗試重新加載一次
                console.log('嘗試重新加載音頻:', audioSrc);
                setTimeout(() => {
                    if (this.currentBgm === audioSrc) {
                        this._retryLoadBgm(audioSrc, volume);
                    }
                }, 1000);
            });
    },
    
    // 重試加載BGM
    _retryLoadBgm: function(audioSrc, volume) {
        fetch(audioSrc)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`重試加載失敗 ${audioSrc}: ${response.status} ${response.statusText}`);
                }
                return response.arrayBuffer();
            })
            .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.audioBuffers[audioSrc] = audioBuffer;
                if (this.currentBgm === audioSrc) {
                    console.log('重試成功，開始播放:', audioSrc);
                    this.playBufferedAudio(audioBuffer, volume);
                }
            })
            .catch(error => console.error('重試加載失敗:', error, audioSrc));
    },
    
    // 播放已緩存的音頻
    playBufferedAudio: function(audioBuffer, volume = 0.5) {
        if (!this.audioContext) return;
        
        // 再次確保之前的 BGM 已停止
        if (this.bgmSource) {
            try {
                this.bgmSource.disconnect();
                this.bgmSource.stop();
            } catch (e) {}
            this.bgmSource = null;
        }
        
        // 創建音頻源
        this.bgmSource = this.audioContext.createBufferSource();
        this.bgmSource.buffer = audioBuffer;
        // 保存當前使用的緩衝區引用
        this.bgmBuffer = audioBuffer;
        this.bgmSource.loop = true;
        
        // 設置音量
        this.bgmGain.gain.value = volume;
        
        // 連接並播放
        this.bgmSource.connect(this.bgmGain);
        this.bgmSource.start(0);
        this.isBgmPlaying = true;
        // 不設置 onended 重啟邏輯；loop 已足夠，避免在 stop() 或上下文切換時意外重播
    },
    
    // 暫停背景音樂
    pauseBgm: function() {
        if (this.isBgmPlaying && this.bgmSource) {
            // 先標記為未播放，避免 onended 回調意外重啟
            this.isBgmPlaying = false;
            try { this.bgmSource.onended = null; } catch (_) {}
            try {
                this.bgmSource.stop();
            } catch (e) {
                // 忽略已停止的音頻源錯誤
            }
        }
    },
    
    // 恢復背景音樂
    resumeBgm: function() {
        if (!this.isBgmPlaying && this.currentBgm) {
            this.playBgm(this.currentBgm, this.bgmGain.gain.value);
        }
    },
    
    // 停止背景音樂
    stopBgm: function() {
        // 強制靜音，避免殘留聲音
        if (this.bgmGain) {
            this.bgmGain.gain.value = 0;
        }

        // 保存當前BGM路徑，用於後續清除緩存
        const currentBgmPath = this.currentBgm;

        if (this.bgmSource) {
            // 先標記為未播放，避免 onended 回調意外重啟
            this.isBgmPlaying = false;
            try { this.bgmSource.onended = null; } catch (_) {}
            try {
                // 先斷開連接，再停止
                this.bgmSource.disconnect();
            } catch (_) {}
            try {
                this.bgmSource.stop();
            } catch (e) {
                // 忽略已停止的音頻源錯誤
            }
            this.bgmSource = null;
        }
        // 清空緩衝參考，避免在某些環境中與舊節點殘留產生關聯
        this.bgmBuffer = null;
        // 清空當前曲目，避免同曲目誤判導致重播
        this.currentBgm = '';
        
        // 不再清除整個緩存，只清除當前BGM的緩存項（如果存在）
        if (currentBgmPath && this.audioBuffers[currentBgmPath]) {
            console.log('清除緩存:', currentBgmPath);
            delete this.audioBuffers[currentBgmPath];
        }
    },

    // 漸降並停止背景音樂（柔和淡出）
    fadeOutAndStopBgm: function(durationMs = 400) {
        if (!this.audioContext || !this.bgmGain) {
            this.stopBgm();
            return;
        }
        const now = this.audioContext.currentTime;
        const durationSec = Math.max(0.05, durationMs / 1000);
        try {
            // 標記為未播放，避免 onended 迴圈
            this.isBgmPlaying = false;
            // 取消既有排程，設定當前值，線性降到 0
            this.bgmGain.gain.cancelScheduledValues(now);
            this.bgmGain.gain.setValueAtTime(this.bgmGain.gain.value, now);
            this.bgmGain.gain.linearRampToValueAtTime(0, now + durationSec);
        } catch (_) {}
        // 在淡出結束後徹底停止並斷開
        setTimeout(() => {
            this.stopBgm();
        }, durationMs + 20);
    },
    
     // 設置音量
    setVolume: function(volume) {
        if (this.bgmGain) {
            this.bgmGain.gain.value = Math.max(0, Math.min(1, volume));
        }
    },

    // 修改 playVoice 函數
    playVoice: function(voiceSrc, volume = 1.0) {
        if (!this.audioContext) return;
        
        // 先停止之前的語音
        this.stopVoice();
        
        fetch(voiceSrc)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.voiceSource = this.audioContext.createBufferSource();
                this.voiceGain = this.audioContext.createGain();
                
                this.voiceSource.buffer = audioBuffer;
                this.voiceGain.gain.value = volume;
                
                this.voiceSource.connect(this.voiceGain);
                this.voiceGain.connect(this.audioContext.destination);
                this.voiceSource.start(0);
            })
            .catch(error => console.error('語音播放失敗:', error));
    },
    
    // 新增停止語音功能
    stopVoice: function() {
        if (this.voiceSource) {
            try {
                this.voiceSource.stop();
            } catch (e) {
                // 忽略已停止的音頻源錯誤
            }
            this.voiceSource = null;
            this.voiceGain = null;
        }
    },
};
