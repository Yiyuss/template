// story.js
// 完整安全修正版
const Story = {
    // 默認背景音樂
    defaultBgm: 'assets/audio/default_bgm.mp3',

    // 場景定義
    scenes: {
        start: {
            background: 'assets/images/backgrounds/bg1.gif',
            bgm: 'assets/audio/start_bgm.mp3',
            dialogues: [
                { character: '伊鬱', text: '初次讀取請耐心等候圖片生成，請點擊對話框繼續。' },
                { character: '伊鬱', text: '歡迎來到花語·無聲！', voice: 'assets/voice/start_1.mp3' },
                { character: '伊鬱', text: '一個叫做 埃露芙塔（Eluftha） 的世界，一切情感皆可產生魔力，稱為「情咒」。', voice: 'assets/voice/start_2.mp3' },
                { character: '伊鬱', text: '情咒不需要吟唱，情感到達某種閾值時，自然會轉化為「輕魔法」', voice: 'assets/voice/start_3.mp3' },
                { character: '伊鬱', text: '能微調物理現實（例如改變花的顏色、讓空氣中出現聲音幻象、投影記憶等），但無法直接用於戰鬥。', voice: 'assets/voice/start_4.mp3' },
                { character: '伊鬱', text: '政府將情咒分級管理，過度的情感會被視為「危咒」。', voice: 'assets/voice/start_5.mp3' },
                { character: '伊鬱', text: '於是，越是壓抑感情的人，越容易擁有強大的情咒潛力。', voice: 'assets/voice/start_6.mp3' },
                { character: '伊鬱', text: '請選擇妳想成為的角色：',
                  choices: [
                    { text: '瑪格麗特·諾爾絲', nextScene: 'city' },
                    { text: '森森鈴蘭(未解鎖)', nextScene: 'forest' }
                  ]
                }
            ]
        },
        city: {
            background: 'assets/images/backgrounds/bg2.jpg',
            bgm: 'assets/audio/city_bgm.mp3',
            dialogues: [
                { character: '主角', text: '這裡是城市，人來人往。' },
                { character: '路人', text: '嘿，你好！歡迎來到城市。' },
                { character: '主角', text: '謝謝，這裡看起來很熱鬧。' },
                { character: '路人', text: '是的，這裡總是很熱鬧。你想看看商店嗎？',
                  choices: [
                    { text: '好的', nextScene: 'shop' },
                    { text: '不了，我想回去', nextScene: 'start' }
                  ]
                }
            ]
        },
        forest: {
            background: 'assets/images/backgrounds/bg3.jpg',
            bgm: 'assets/audio/forest_bgm.mp3',
            dialogues: [
                { character: '主角', text: '這裡是森林，空氣清新。' },
                { character: '嚮導', text: '小心點，這片森林有時會有野生動物出沒。' },
                { character: '主角', text: '我會小心的，謝謝提醒。' },
                { character: '嚮導', text: '你想去看看森林深處的湖泊嗎？',
                  choices: [
                    { text: '好的', nextScene: 'lake' },
                    { text: '不了，我想回去', nextScene: 'start' }
                  ]
                }
            ]
        },
        shop: {
            background: 'assets/images/backgrounds/bg4.jpg',
            dialogues: [
                { character: '店主', text: '歡迎光臨！有什麼需要的嗎？' },
                { character: '主角', text: '我只是隨便看看。' },
                { character: '店主', text: '好的，慢慢看。' },
                { character: '旁白', text: '接下來是一段視頻...', video: 'assets/videos/video1.mp4', nextScene: 'city' }
            ]
        },
        lake: {
            background: 'assets/images/backgrounds/bg5.jpg',
            dialogues: [
                { character: '主角', text: '哇，這個湖泊真美！' },
                { character: '嚮導', text: '是的，這是我們這裡最美的景點之一。' },
                { character: '主角', text: '我可以在這裡待一整天。' },
                { character: '旁白', text: '接下來是一段視頻...', video: 'assets/videos/video2.mp4', nextScene: 'forest' }
            ]
        }
    },

    characters: {
        '艾希雅': { image: 'assets/images/characters/char1.png', position: '30%' },
        '路人': { image: 'assets/images/characters/char2.png', position: '70%' },
        '店主': { image: 'assets/images/characters/char3.png', position: '70%' },
        '嚮導': { image: 'assets/images/characters/char4.png', position: '70%' },
        '旁白': { image: '', position: '50%' }
    },

    audio: {
        bgm: [
            { id: 'default_bgm', path: 'assets/audio/default_bgm.mp3', description: '默認背景音樂' },
            { id: 'start_bgm', path: 'assets/audio/start_bgm.mp3', description: '開始場景背景音樂' },
            { id: 'city_bgm', path: 'assets/audio/city_bgm.mp3', description: '城市場景背景音樂' },
            { id: 'forest_bgm', path: 'assets/audio/forest_bgm.mp3', description: '森林場景背景音樂' }
        ]
    },

    // ===== 新增對話流程控制 =====
    currentScene: null,
    dialogueIndex: 0,

    start: function() {
        this.currentScene = this.scenes.start;
        this.dialogueIndex = 0;
        this.loadScene(this.currentScene);
    },

    loadScene: function(scene) {
        this.currentScene = scene;
        this.dialogueIndex = 0;

        // 背景切換
        const bgLayer = document.getElementById('background-layer');
        if (bgLayer) bgLayer.style.backgroundImage = `url('${scene.background}')`;

        // 播放 BGM
        if (scene.bgm) AudioManager.playBgm(scene.bgm);

        this.showDialogue();
    },

    showDialogue: function() {
        if (!this.currentScene) return;
        const dialogueBox = document.getElementById('dialogue-box');
        const characterName = document.getElementById('character-name');
        const dialogueText = document.getElementById('dialogue-text');
        const choiceContainer = document.getElementById('choice-container');

        if (this.dialogueIndex >= this.currentScene.dialogues.length) {
            choiceContainer.style.display = 'none';
            return;
        }

        const dialogue = this.currentScene.dialogues[this.dialogueIndex];

        // 顯示文字
        if (dialogueBox) dialogueBox.style.display = 'block';
        if (characterName) characterName.textContent = dialogue.character || '';
        if (dialogueText) dialogueText.textContent = dialogue.text || '';

        // 播放配音
        if (dialogue.voice) AudioManager.playVoice(dialogue.voice);

        // 處理選項
        if (dialogue.choices) {
            choiceContainer.innerHTML = '';
            dialogue.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.textContent = choice.text;
                btn.addEventListener('click', () => {
                    const nextScene = this.scenes[choice.nextScene];
                    if (nextScene) this.loadScene(nextScene);
                });
                choiceContainer.appendChild(btn);
            });
            choiceContainer.style.display = 'block';
        } else {
            choiceContainer.style.display = 'none';
        }

        // 點擊對話框切換到下一句
        dialogueBox.onclick = () => {
            if (!dialogue.choices) {
                this.dialogueIndex++;
                this.showDialogue();
            }
        };
    }
};
