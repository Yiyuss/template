export const AudioManager = {
    context: null,       // Web Audio 上下文
    bgmSource: null,     // BGM AudioBufferSourceNode
    bgmGain: null,       // BGM 音量控制
    currentBgm: '',      // 當前 BGM 路徑
    isBgmPlaying: false, // BGM 播放狀態
    audioBuffers: {},    // 緩存音訊

    voiceSource: null,   // 配音 AudioBufferSourceNode
    voiceGain: null,     // 配音音量
    isVoicePlaying: false,

    // 初始化，接收 audioMap
    init(audioMap) {
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

            // 預載 audioMap 的音訊
            if (audioMap) {
                for (let i = 0; i < audioMap.bgm.length; i++) {
                    this.loadAudio(audioMap.bgm[i].path);
                }
            }

        } catch (e) {
            console.error('Web Audio API 不支持:', e);
        }
    },

    // 載入音訊
    loadAudio(url) {
        if (!this.context || this.audioBuffers[url]) return;

        fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.audioBuffers[url] = audioBuffer;
                console.log(`音頻 ${url} 已加載`);
            })
            .catch(err => console.error(`加載音頻 ${url} 失敗:`, err));
    },

    // 播放 BGM
    playBgm(url, volume = 0.5) {
        if (!this.context) return;
        if (this.context.state === 'suspended') {
            this.context.resume();
            return;
        }

        if (this.currentBgm === url && this.isBgmPlaying) return;

        this.stopBgm();
        this.currentBgm = url;

        if (this.audioBuffers[url]) {
            this._playBufferedAudio(this.audioBuffers[url], volume);
        } else {
            this.loadAudio(url);
            fetch(url)
                .then(r => r.arrayBuffer())
                .then(buf => this.context.decodeAudioData(buf))
                .then(audioBuffer => {
                    this.audioBuffers[url] = audioBuffer;
                    this._playBufferedAudio(audioBuffer, volume);
                })
                .catch(err => console.error('BGM播放失敗:', err));
        }
    },

    _playBufferedAudio(audioBuffer, volume = 0.5) {
        this.bgmSource = this.context.createBufferSource();
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

    stopBgm() {
        if (this.bgmSource) {
            try { this.bgmSource.stop(); } catch (e) {}
            this.bgmSource = null;
            this.isBgmPlaying = false;
        }
    },

    // 播放配音
    playVoice(url) {
        if (!this.context || !url) return;
        this.stopVoice();

        if (this.audioBuffers[url]) {
            this._playVoiceBuffer(this.audioBuffers[url]);
        } else {
            fetch(url)
                .then(r => r.arrayBuffer())
                .then(buf => this.context.decodeAudioData(buf))
                .then(audioBuffer => {
                    this.audioBuffers[url] = audioBuffer;
                    this._playVoiceBuffer(audioBuffer);
                })
                .catch(err => console.error('配音播放失敗:', err));
        }
    },

    _playVoiceBuffer(audioBuffer) {
        this.voiceSource = this.context.createBufferSource();
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

    stopVoice() {
        if (this.voiceSource) {
            try { this.voiceSource.stop(); } catch (e) {}
            this.voiceSource = null;
            this.isVoicePlaying = false;
        }
    },

    setBgmVolume(volume) {
        if (this.bgmGain) this.bgmGain.gain.value = Math.max(0, Math.min(1, volume));
    },

    setVoiceVolume(volume) {
        if (this.voiceGain) this.voiceGain.gain.value = Math.max(0, Math.min(1, volume));
    }
};
