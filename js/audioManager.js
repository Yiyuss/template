// 音頻管理器
const AudioManager = {
    audioContext: null,
    bgmSource: null,
    bgmBuffer: null,
    bgmGain: null,
    voiceGain: null,
    currentBgm: '',
    currentVoice: '',
    isBgmPlaying: false,
    isVoicePlaying: false,
    audioBuffers: {},
    voiceSource: null,

    // 初始化
    init: function () {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();

            // BGM 音量控制
            this.bgmGain = this.audioContext.createGain();
            this.bgmGain.connect(this.audioContext.destination);
            this.bgmGain.gain.value = 0.5;

            // ✅ 配音音量控制
            this.voiceGain = this.audioContext.createGain();
            this.voiceGain.connect(this.audioContext.destination);
            this.voiceGain.gain.value = 1.0;

            // 預加載
            this.preloadAudio();

            // 解鎖播放
            document.addEventListener('click', this.resumeAudioContext.bind(this), { once: true });
            document.addEventListener('keydown', this.resumeAudioContext.bind(this), { once: true });

        } catch (e) {
            console.error('Web Audio API 不支持:', e);
        }
    },

    // 恢復音頻上下文
    resumeAudioContext: function () {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume().then(() => {
                console.log('音頻上下文已恢復');
                if (Story.defaultBgm && !this.isBgmPlaying) {
                    this.playBgm(Story.defaultBgm);
                }
            });
        }
    },

    // 預加載音頻
    preloadAudio: function () {
        if (!this.audioContext) return;

        if (Story.audio && Story.audio.bgm) {
            Story.audio.bgm.forEach(bgm => {
                this.loadAudio(bgm.path);
            });
        }

        if (Story.defaultBgm) {
            this.loadAudio(Story.defaultBgm);
        }
    },

    // 加載音頻
    loadAudio: function (url) {
        if (!this.audioContext || this.audioBuffers[url]) return;

        fetch(url)
            .then(res => res.arrayBuffer())
            .then(buf => this.audioContext.decodeAudioData(buf))
            .then(decoded => {
                this.audioBuffers[url] = decoded;
                console.log(`音頻已加載: ${url}`);
            })
            .catch(err => console.error(`音頻加載失敗 ${url}:`, err));
    },

    // 播放 BGM
    playBgm: function (audioSrc, volume = 0.5) {
        if (!this.audioContext) return;

        if (this.audioContext.state === 'suspended') {
            this.resumeAudioContext();
            return;
        }

        if (this.currentBgm === audioSrc && this.isBgmPlaying) return;

        this.stopBgm();
        this.currentBgm = audioSrc;

        if (this.audioBuffers[audioSrc]) {
            this.playBufferedAudio(this.audioBuffers[audioSrc], volume);
        } else {
            this.loadAudio(audioSrc);
            fetch(audioSrc)
                .then(res => res.arrayBuffer())
                .then(buf => this.audioContext.decodeAudioData(buf))
                .then(decoded => {
                    this.audioBuffers[audioSrc] = decoded;
                    this.playBufferedAudio(decoded, volume);
                })
                .catch(err => console.error('BGM播放失敗:', err));
        }
    },

    playBufferedAudio: function (audioBuffer, volume = 0.5) {
        if (!this.audioContext) return;

        this.bgmSource = this.audioContext.createBufferSource();
        this.bgmSource.buffer = audioBuffer;
        this.bgmSource.loop = true;

        this.bgmGain.gain.value = volume;
        this.bgmSource.connect(this.bgmGain);
        this.bgmSource.start(0);
        this.isBgmPlaying = true;

        this.bgmSource.onended = () => {
            if (this.isBgmPlaying) {
                this.playBufferedAudio(audioBuffer, volume);
            }
        };
    },

    stopBgm: function () {
        if (this.bgmSource) {
            try {
                this.bgmSource.stop();
            } catch (e) {}
            this.bgmSource = null;
            this.isBgmPlaying = false;
        }
    },

    pauseBgm: function () {
        if (this.isBgmPlaying && this.bgmSource) {
            this.bgmSource.stop();
            this.isBgmPlaying = false;
        }
    },

    resumeBgm: function () {
        if (!this.isBgmPlaying && this.currentBgm) {
            this.playBgm(this.currentBgm, this.bgmGain.gain.value);
        }
    },

    setVolume: function (volume) {
        if (this.bgmGain) {
            this.bgmGain.gain.value = Math.max(0, Math.min(1, volume));
        }
    },

    // ✅ 播放配音
    playVoice: function (voiceSrc) {
        if (!this.audioContext || !voiceSrc) return;

        if (this.audioContext.state === 'suspended') {
            this.resumeAudioContext();
            return;
        }

        this.stopVoice();

        if (this.audioBuffers[voiceSrc]) {
            this.playVoiceBuffer(this.audioBuffers[voiceSrc]);
        } else {
            fetch(voiceSrc)
                .then(res => res.arrayBuffer())
                .then(buf => this.audioContext.decodeAudioData(buf))
                .then(decoded => {
                    this.audioBuffers[voiceSrc] = decoded;
                    this.playVoiceBuffer(decoded);
                })
                .catch(err => console.error('配音播放失敗:', err));
        }
    },

    playVoiceBuffer: function (audioBuffer) {
        if (!this.audioContext) return;

        this.voiceSource = this.audioContext.createBufferSource();
        this.voiceSource.buffer = audioBuffer;
        this.voiceSource.loop = false;

        this.voiceSource.connect(this.voiceGain);
        this.voiceSource.start(0);
        this.isVoicePlaying = true;

        this.voiceSource.onended = () => {
            this.isVoicePlaying = false;
            this.voiceSource = null;
        };
    },

    stopVoice: function () {
        if (this.voiceSource) {
            try {
                this.voiceSource.stop();
            } catch (e) {}
            this.voiceSource = null;
            this.isVoicePlaying = false;
        }
    },

    setVoiceVolume: function (volume) {
        if (this.voiceGain) {
            this.voiceGain.gain.value = Math.max(0, Math.min(1, volume));
        }
    }
};
