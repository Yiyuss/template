// 音頻管理器
export const AudioManager = {
    context: null,
    bgmSource: null,
    bgmGain: null,
    currentBgm: '',
    isBgmPlaying: false,
    audioBuffers: {},

    voiceSource: null,
    voiceGain: null,
    isVoicePlaying: false,

    init: function() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.context = new AudioContext();

            // BGM 音量
            this.bgmGain = this.context.createGain();
            this.bgmGain.gain.value = 0.5;
            this.bgmGain.connect(this.context.destination);

            // Voice 音量
            this.voiceGain = this.context.createGain();
            this.voiceGain.gain.value = 1.0;
            this.voiceGain.connect(this.context.destination);
        } catch (e) {
            console.error('Web Audio API 不支持:', e);
        }
    },

    resumeContext: function() {
        if (this.context && this.context.state === 'suspended') {
            this.context.resume().then(() => {
                console.log('AudioContext 已解鎖 ✅');
            });
        }
    },

    loadAudio: function(url) {
        if (!this.context || this.audioBuffers[url]) return;

        fetch(url)
            .then(r => r.arrayBuffer())
            .then(buf => this.context.decodeAudioData(buf))
            .then(audioBuffer => {
                this.audioBuffers[url] = audioBuffer;
                console.log(`音頻 ${url} 已加載`);
            })
            .catch(err => console.error(`加載音頻 ${url} 失敗:`, err));
    },

    playBgm: function(url, volume = 0.5) {
        if (!this.context) return;

        this.stopBgm();
        this.currentBgm = url;

        if (this.audioBuffers[url]) {
            this._playBuffer(this.audioBuffers[url], volume, 'bgm');
        } else {
            this.loadAudio(url);
            // 延遲播放直到加載完成
            const checkBuffer = setInterval(() => {
                if (this.audioBuffers[url]) {
                    clearInterval(checkBuffer);
                    this._playBuffer(this.audioBuffers[url], volume, 'bgm');
                }
            }, 100);
        }
    },

    _playBuffer: function(buffer, volume, type) {
        const source = this.context.createBufferSource();
        source.buffer = buffer;
        if (type === 'bgm') source.loop = true;

        const gainNode = type === 'bgm' ? this.bgmGain : this.voiceGain;
        gainNode.gain.value = volume;

        source.connect(gainNode);
        source.start(0);

        if (type === 'bgm') {
            this.bgmSource = source;
            this.isBgmPlaying = true;
        } else {
            this.voiceSource = source;
            this.isVoicePlaying = true;
        }

        source.onended = () => {
            if (type === 'bgm') this.isBgmPlaying = false;
            else this.isVoicePlaying = false;
        };
    },

    stopBgm: function() {
        if (this.bgmSource) {
            try { this.bgmSource.stop(); } catch (e) {}
            this.bgmSource = null;
            this.isBgmPlaying = false;
        }
    },

    playVoice: function(url) {
        if (!this.context) return;

        this.stopVoice();

        if (this.audioBuffers[url]) {
            this._playBuffer(this.audioBuffers[url], 1.0, 'voice');
        } else {
            this.loadAudio(url);
            const checkBuffer = setInterval(() => {
                if (this.audioBuffers[url]) {
                    clearInterval(checkBuffer);
                    this._playBuffer(this.audioBuffers[url], 1.0, 'voice');
                }
            }, 100);
        }
    },

    stopVoice: function() {
        if (this.voiceSource) {
            try { this.voiceSource.stop(); } catch (e) {}
            this.voiceSource = null;
            this.isVoicePlaying = false;
        }
    },

    setBgmVolume: function(volume) {
        if (this.bgmGain) this.bgmGain.gain.value = Math.max(0, Math.min(1, volume));
    },

    setVoiceVolume: function(volume) {
        if (this.voiceGain) this.voiceGain.gain.value = Math.max(0, Math.min(1, volume));
    }
};
