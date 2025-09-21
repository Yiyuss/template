// 故事內容和對話
const Story = {
    // 默認背景音樂
    defaultBgm: 'assets/audio/default_bgm.mp3',
    
    // 場景定義
    scenes: {
        // 開始場景
        start: {
            background: 'assets/images/backgrounds/bg1.gif',
            bgm: 'assets/audio/start_bgm.mp3', // 可選，場景特定的BGM
            dialogues: [
                {
                    character: '伊鬱',
                    text: '初次讀取請耐心等候圖片生成，請點擊對話框繼續。'
                    
                },
                {
                    character: '伊鬱',
                    text: '歡迎來到花語·無聲！'
                    voice: 'assets/voice/start_1.mp3' // 新增配音文件路徑
                },
                {
                    character: '伊鬱',
                    text: '一個叫做 埃露芙塔（Eluftha） 的世界，一切情感皆可產生魔力，稱為「情咒」。'
                    voice: 'assets/voice/start_1.mp3' // 新增配音文件路徑
                },
                {
                    character: '伊鬱',
                    text: '情咒不需要吟唱，情感到達某種閾值時，自然會轉化為「輕魔法」——能微調物理現實（例如改變花的顏色、讓空氣中出現聲音幻象、投影記憶等），但無法直接用於戰鬥。'
                    voice: 'assets/voice/start_1.mp3' // 新增配音文件路徑
                },
                {
                    character: '伊鬱',
                    text: '政府將情咒分級管理，過度的情感會被視為「危咒」。於是，越是壓抑感情的人，越容易擁有強大的情咒潛力。'
                    voice: 'assets/voice/start_1.mp3' // 新增配音文件路徑
                },
                {
                    character: '伊鬱',
                    text: '請選擇妳想成為的角色：',
                    choices: [
                        {
                            text: '瑪格麗特·諾爾絲',
                            nextScene: 'city'
                        },
                        {
                            text: '森森鈴蘭(未解鎖)',
                            nextScene: 'forest'
                        }
                    ]
                }
            ]
        },
        
        // 城市場景
        city: {
            background: 'assets/images/backgrounds/bg2.jpg',
            bgm: 'assets/audio/city_bgm.mp3', // 可選，場景特定的BGM
            dialogues: [
                {
                    character: '主角',
                    text: '這裡是城市，人來人往。'
                },
                {
                    character: '路人',
                    text: '嘿，你好！歡迎來到城市。'
                },
                {
                    character: '主角',
                    text: '謝謝，這裡看起來很熱鬧。'
                },
                {
                    character: '路人',
                    text: '是的，這裡總是很熱鬧。你想看看商店嗎？',
                    choices: [
                        {
                            text: '好的',
                            nextScene: 'shop'
                        },
                        {
                            text: '不了，我想回去',
                            nextScene: 'start'
                        }
                    ]
                }
            ]
        },
        
        // 森林場景
        forest: {
            background: 'assets/images/backgrounds/bg3.jpg',
            bgm: 'assets/audio/forest_bgm.mp3', // 可選，場景特定的BGM
            dialogues: [
                {
                    character: '主角',
                    text: '這裡是森林，空氣清新。'
                },
                {
                    character: '嚮導',
                    text: '小心點，這片森林有時會有野生動物出沒。'
                },
                {
                    character: '主角',
                    text: '我會小心的，謝謝提醒。'
                },
                {
                    character: '嚮導',
                    text: '你想去看看森林深處的湖泊嗎？',
                    choices: [
                        {
                            text: '好的',
                            nextScene: 'lake'
                        },
                        {
                            text: '不了，我想回去',
                            nextScene: 'start'
                        }
                    ]
                }
            ]
        },
        
        // 商店場景
        shop: {
            background: 'assets/images/backgrounds/bg4.jpg',
            dialogues: [
                {
                    character: '店主',
                    text: '歡迎光臨！有什麼需要的嗎？'
                },
                {
                    character: '主角',
                    text: '我只是隨便看看。'
                },
                {
                    character: '店主',
                    text: '好的，慢慢看。'
                },
                {
                    character: '旁白',
                    text: '接下來是一段視頻...',
                    video: 'assets/videos/video1.mp4',
                    nextScene: 'city'
                }
            ]
        },
        
        // 湖泊場景
        lake: {
            background: 'assets/images/backgrounds/bg5.jpg',
            dialogues: [
                {
                    character: '主角',
                    text: '哇，這個湖泊真美！'
                },
                {
                    character: '嚮導',
                    text: '是的，這是我們這裡最美的景點之一。'
                },
                {
                    character: '主角',
                    text: '我可以在這裡待一整天。'
                },
                {
                    character: '旁白',
                    text: '接下來是一段視頻...',
                    video: 'assets/videos/video2.mp4',
                    nextScene: 'forest'
                }
            ]
        }
    },
    
    // 角色定義
    characters: {
        '艾希雅': {
            image: 'assets/images/characters/char1.png',
            position: '30%'
        },
        '路人': {
            image: 'assets/images/characters/char2.png',
            position: '70%'
        },
        '店主': {
            image: 'assets/images/characters/char3.png',
            position: '70%'
        },
        '嚮導': {
            image: 'assets/images/characters/char4.png',
            position: '70%'
        },
        '旁白': {
            image: '',
            position: '50%'
        }
    },
    
    // 音頻資源
    audio: {
        bgm: [
            {
                id: 'default_bgm',
                path: 'assets/audio/default_bgm.mp3',
                description: '默認背景音樂'
            },
            {
                id: 'start_bgm',
                path: 'assets/audio/start_bgm.mp3',
                description: '開始場景背景音樂'
            },
            {
                id: 'city_bgm',
                path: 'assets/audio/city_bgm.mp3',
                description: '城市場景背景音樂'
            },
            {
                id: 'forest_bgm',
                path: 'assets/audio/forest_bgm.mp3',
                description: '森林場景背景音樂'
            }
        ]
    }

};







