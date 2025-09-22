// audioManager.js
export const AudioManager = {
    audioContext: null,
    bgmSource: null,
    bgmGain: null,
    currentBgm: '',
    isBgmPlaying: false,
    audioBuffers: {},

    voiceSource: null,
    isVoicePlaying: false,
    voiceGain: null,

    // 初始化
    init: function () {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();

            // BGM 音量
            this.bgmGain = this.audioContext.createGain();
            this.bgmGain.connect(this.audioContext.destination);
            this.bgmGain.gain.value = 0.5;

            // Voice 音量
            this.voiceGain = this.audioContext.createGain();
            this.voiceGain.connect(this.audioContext.destination);
            this.voiceGain.gain.value = 1.0;

            // 預載 BGM
            this.preloadAudio();

            // 延遲解鎖 AudioContext
            const unlockAudio = () => {
                if (this.audioContext.state === 'suspended') {
                    this.audioContext.resume().then(() => {
                        console.log('AudioContext 已解鎖 ✅');
                    });
                }
            };
            document.addEventListener('click', unlockAudio, { once: true });
            document.addEventListener('keydown', unlockAudio, { once: true });

        } catch (e) {
            console.error('Web Audio API 不支持:', e);
        }
    },

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

    loadAudio: function (url) {
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

    playBgm: function (audioSrc, volume = 0.5) {
        if (!this.audioContext) return;
        if (this.audioContext.state === 'suspended') return;

        if (this.currentBgm === audioSrc && this.isBgmPlaying) return;

        this.stopBgm();
        this.currentBgm = audioSrc;

        if (this.audioBuffers[audioSrc]) {
            this._playBufferedAudio(this.audioBuffers[audioSrc], volume);
        } else {
            this.loadAudio(audioSrc);
            fetch(audioSrc)
                .then(res => res.arrayBuffer())
                .then(buf => this.audioContext.decodeAudioData(buf))
                .then(audioBuffer => {
                    this.audioBuffers[audioSrc] = audioBuffer;
                    this._playBufferedAudio(audioBuffer, volume);
                })
                .catch(err => console.error('BGM播放失敗:', err));
        }
    },

    _playBufferedAudio: function (audioBuffer, volume = 0.5) {
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
                this._playBufferedAudio(audioBuffer, volume);
            }
        };
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

    stopBgm: function () {
        if (this.bgmSource) {
            try { this.bgmSource.stop(); } catch(e){}
            this.bgmSource = null;
            this.isBgmPlaying = false;
        }
    },

    setVolume: function (volume) {
        if (this.bgmGain) this.bgmGain.gain.value = Math.max(0, Math.min(1, volume));
    },

    playVoice: function (voiceSrc) {
        if (!this.audioContext || !voiceSrc) return;
        if (this.audioContext.state === 'suspended') return;

        this.stopVoice();

        if (this.audioBuffers[voiceSrc]) {
            this._playVoiceBuffer(this.audioBuffers[voiceSrc]);
        } else {
            fetch(voiceSrc)
                .then(res => res.arrayBuffer())
                .then(buf => this.audioContext.decodeAudioData(buf))
                .then(audioBuffer => {
                    this.audioBuffers[voiceSrc] = audioBuffer;
                    this._playVoiceBuffer(audioBuffer);
                })
                .catch(err => console.error('配音播放失敗:', err));
        }
    },

    _playVoiceBuffer: function (audioBuffer) {
        if (!this.audioContext) return;

        this.voiceSource = this.audioContext.createBufferSource();
        this.voiceSource.buffer = audioBuffer;
        this.voiceSource.loop = false;

        if (!this.voiceGain) {
            this.voiceGain = this.audioContext.createGain();
            this.voiceGain.connect(this.audioContext.destination);
            this.voiceGain.gain.value = 1.0;
        }

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
            try { this.voiceSource.stop(); } catch(e){}
            this.voiceSource = null;
            this.isVoicePlaying = false;
        }
    },

    setVoiceVolume: function (volume) {
        if (this.voiceGain) this.voiceGain.gain.value = Math.max(0, Math.min(1, volume));
    }
};
