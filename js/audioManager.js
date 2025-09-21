// 音頻管理器
const AudioManager = {
    audioContext: null,
    bgmSource: null,
    bgmBuffer: null,
    bgmGain: null,
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
                // 如果有默認BGM，嘗試播放
                if (Story.defaultBgm && !this.isBgmPlaying) {
                    this.playBgm(Story.defaultBgm);
                }
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
        
        // 預加載默認BGM
        if (Story.defaultBgm) {
            this.loadAudio(Story.defaultBgm);
        }
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
        if (!this.audioContext) return;
        
        // 如果音頻上下文被暫停，嘗試恢復
        if (this.audioContext.state === 'suspended') {
            this.resumeAudioContext();
            return;
        }
        
        // 如果是同一首BGM且正在播放，則不做任何操作
        if (this.currentBgm === audioSrc && this.isBgmPlaying) {
            return;
        }
        
        // 停止當前播放的BGM
        this.stopBgm();
        
        // 設置新的BGM
        this.currentBgm = audioSrc;
        
        // 檢查是否已預加載
        if (this.audioBuffers[audioSrc]) {
            this.playBufferedAudio(this.audioBuffers[audioSrc], volume);
        } else {
            // 如果未預加載，則加載並播放
            this.loadAudio(audioSrc);
            fetch(audioSrc)
                .then(response => response.arrayBuffer())
                .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
                .then(audioBuffer => {
                    this.audioBuffers[audioSrc] = audioBuffer;
                    this.playBufferedAudio(audioBuffer, volume);
                })
                .catch(error => console.error('BGM播放失敗:', error));
        }
    },
    
    // 播放已緩存的音頻
    playBufferedAudio: function(audioBuffer, volume = 0.5) {
        if (!this.audioContext) return;
        
        // 創建音頻源
        this.bgmSource = this.audioContext.createBufferSource();
        this.bgmSource.buffer = audioBuffer;
        this.bgmSource.loop = true;
        
        // 設置音量
        this.bgmGain.gain.value = volume;
        
        // 連接並播放
        this.bgmSource.connect(this.bgmGain);
        this.bgmSource.start(0);
        this.isBgmPlaying = true;
        
        // 設置結束事件（雖然設置了循環，但以防萬一）
        this.bgmSource.onended = () => {
            if (this.isBgmPlaying) {
                this.playBufferedAudio(audioBuffer, volume);
            }
        };
    },
    
    // 暫停背景音樂
    pauseBgm: function() {
        if (this.isBgmPlaying && this.bgmSource) {
            this.bgmSource.stop();
            this.isBgmPlaying = false;
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
        if (this.bgmSource) {
            try {
                this.bgmSource.stop();
            } catch (e) {
                // 忽略已停止的音頻源錯誤
            }
            this.bgmSource = null;
            this.isBgmPlaying = false;
        }
    },
    
    // 設置音量
    setVolume: function(volume) {
        if (this.bgmGain) {
            this.bgmGain.gain.value = Math.max(0, Math.min(1, volume));
        }
    }
};