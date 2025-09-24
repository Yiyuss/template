// 故事內容和對話
const Story = {
    // 默認背景音樂
    defaultBgm: 'assets/audio/default_bgm.mp3',
    
    // 場景定義
    scenes: {
        // 開始場景
        start: {
            background: 'assets/images/backgrounds/bg1.gif',
            bgm: 'assets/audio/start_bgm.mp3',
            dialogues: [
                {
                    character: '伊鬱',
                    text: '初次讀取請耐心等候圖片生成，請點擊對話框繼續。'
                },
                {
                    character: '伊鬱',
                    text: '歡迎來到花語·無聲！',
                    voice: 'assets/voice/start_1.mp3'
                },
                {
                    character: '伊鬱',
                    text: '一個叫做 埃露芙塔（Eluftha） 的世界，一切情感皆可產生魔力，稱為「情咒」。',
                    voice: 'assets/voice/start_2.mp3'
                },
                {
                    character: '伊鬱',
                    text: '情咒不需要吟唱，情感到達某種閾值時，自然會轉化為「輕魔法」。',
                    voice: 'assets/voice/start_3.mp3'
                },
                {
                    character: '伊鬱',
                    text: '——能微調物理現實（例如改變花的顏色、讓空氣中出現聲音幻象、投影記憶等），但無法直接用於戰鬥。',
                    voice: 'assets/voice/start_4.mp3'

                },
                {
                    character: '伊鬱',
                    text: '政府將情咒分級管理，過度的情感會被視為「危咒」。',
                    voice: 'assets/voice/start_5.mp3'
                },
                {
                    character: '伊鬱',
                    text: '於是，越是壓抑感情的人，越容易擁有強大的情咒潛力。',
                    voice: 'assets/voice/start_6.mp3'
                },
                {
                    character: '伊鬱',
                    text: '請選擇妳想成為的角色：',
                    choices: [
                        {
                            text: '瑪格麗特·諾爾絲',
                            nextScene: 'c1_gate'
                        },
                        {
                            text: '森森鈴蘭(未解鎖)',
                            nextScene: 'forest'
                        }
                    ]
                }
            ]
        },
        
        // 第一章：花園日常 — 分場景
c1_gate: {
    background: 'assets/images/backgrounds/campus.jpg',
    bgm: 'assets/audio/bgm_ch1.mp3',
    dialogues: [
        { character: '【校門】', text: '初春的晨風帶著微涼的氣息，靜語花園學院的校門靜靜聳立在遠方。這是一座以白色石材砌成的拱門，頂端盤繞著常青藤，偶爾有幾朵粉紫色的小花點綴其中，像是在迎接每一位到來的學生。' },
        { character: '旁白', text: '瑪格麗特·諾爾絲靜靜地站在校門口。她背著略顯笨重的旅行袋，肩膀被壓得有些下垂。從長途馬車下來的腳步還有些僵硬，卻掩不住她眼中閃爍的光彩。' },
        { character: '瑪格麗特', text: '……就是這裡啊。' },
        { character: '旁白', text: '和外界的喧囂不同，學院似乎自成一個小小的世界。遠遠望去，紅磚砌成的主教學樓矗立於校園深處，旁邊是綠意盎然的林木。微風拂過枝葉，發出細微的沙沙聲，彷彿在為她奏起迎接的樂曲。' },
        { character: '旁白', text: '她的心口有些發緊。這裡將是她往後數年的生活之地，也是她必須面對自我的地方。' },
        { character: '旁白', text: '她曾經在舊日記裡無數次想像過自己來到這裡的模樣——但真實的場景，卻比她的字句要更鮮明、更迫切。' },
        { character: '旁白', text: '……呼。她深吸一口氣，才邁步踏入。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【校園小徑】。', choices: [ { text: '繼續', nextScene: 'c1_path' } ] }
    ]
},

c1_path: {
    background: 'assets/images/backgrounds/school.jpg',
    dialogues: [
        { character: '【校園小徑】', text: '沿著鋪滿碎石的小徑前行，兩側是整齊修剪的樹籬。空氣中瀰漫著青草的清香，偶爾有白色的花瓣隨風飄落，在陽光下閃爍著淡淡的光。' },
        { character: '旁白', text: '瑪格麗特握緊行李袋的帶子，步伐略顯拘謹。她想抬頭欣賞校園，但又忍不住低下視線，避免與周遭的學生視線交會。' },
        { character: '瑪格麗特', text: '這裡的氣息……好安靜。' },
        { character: '旁白', text: '她覺得自己的存在格外突兀，像是一滴墨水滴入清澈的泉水裡，無論如何掩飾，都會被人注意。' },
        { character: '旁白', text: '就在她陷入緊張時，一群穿著校服的學生笑鬧著從小徑另一端走來，她立刻偏過身，裝作在整理肩上的帶子。青春的笑聲在耳邊掠過，帶著活力和自在感——那是她所缺乏的。' },
        { character: '旁白', text: '她心底微微一沉，卻又暗暗打起精神。「沒關係……這裡是新的開始。至少，至少要……試著去改變。」' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍走廊】。', choices: [ { text: '繼續', nextScene: 'c1_dorm_hall' } ] }
    ]
},

c1_dorm_hall: {
    background: 'assets/images/backgrounds/dorm_morning.jpg',
    dialogues: [
        { character: '【宿舍走廊】', text: '在學姐的帶領下，她抵達了分配好的宿舍棟。走廊鋪著淺色木地板，窗戶敞開，陽光灑落，空氣中帶著淡淡的木香。' },
        { character: '旁白', text: '腳步聲在寂靜的走廊迴盪，每一步都提醒她：從今天起，她將在這裡度過無數的晨昏。' },
        { character: '瑪格麗特', text: '這裡……好像比我想像中更寬敞。' },
        { character: '旁白', text: '宿舍的牆上掛著幾幅描繪花園的水彩畫，色調溫和，彷彿要告訴新來的人——這裡不只是學習的地方，也是心靈的歸宿。' },
        { character: '學姐', text: '你的房間在這裡。' },
        { character: '瑪格麗特', text: '謝、謝謝。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍房間】。', choices: [ { text: '繼續', nextScene: 'c1_dorm_room' } ] }
    ]
},

c1_dorm_room: {
    background: 'assets/images/backgrounds/dorm_morning2.jpg',
    dialogues: [
        { character: '【宿舍房間】', text: '房間不大，卻佈置得井然有序：靠窗的位置擺著兩張床，中間隔著小桌，桌上放著新發的日程冊和一盞油燈。' },
        { character: '旁白', text: '窗簾半掀，柔和的光線灑落在淺藍色的床單上。瑪格麗特走近，伸手撫過木質桌面的紋理，指尖觸到一絲溫潤的質感。' },
        { character: '森森鈴蘭', text: '啊，妳已經到了？' },
        { character: '旁白', text: '瑪格麗特抬頭，與一雙明亮的眼睛對上。那是個與她年紀相仿的少女，帶著自然的笑容，髮梢在陽光下閃爍。' },
        { character: '森森鈴蘭', text: '……我叫森森鈴蘭。看來以後我們要一起住了呢。' },
        { character: '瑪格麗特', text: '我……我叫瑪格麗特·諾爾絲。請、請多多指教。' },
        { character: '森森鈴蘭', text: '嗯，請多多關照呀。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【教室】。', choices: [ { text: '繼續', nextScene: 'c1_classroom' } ] }
    ]
},

c1_classroom: {
    background: 'assets/images/backgrounds/classroom.jpg',
    dialogues: [
        { character: '【教室】', text: '翌日清晨，學院的鐘聲悠然響起。瑪格麗特和鈴蘭一同走進教室，裡頭氣氛比她想像的更熱鬧。木質課桌整齊排列，牆上掛著地圖與魔力規範表。' },
        { character: '旁白', text: '學生們三三兩兩圍在一起，有的在討論課程，有的分享家鄉的趣事。' },
        { character: '短髮少女', text: '早啊！這位是？' },
        { character: '森森鈴蘭', text: '她是我的室友，瑪格麗特。' },
        { character: '瑪格麗特', text: '……初次見面，請多多指教。' },
        { character: '旁白', text: '課程開始後，老師是一位身穿黑袍的中年男子，聲音低沉卻不失威嚴。' },
        { character: '老師', text: '靜語花園學院，是情咒研究的核心場所。你們在這裡所學，不僅僅是控制情感的技巧，更是學會與自己相處的方式。' },
        { character: '旁白', text: '瑪格麗特低下頭，用筆記下老師的話。「與自己相處……」這幾個字在她腦中迴盪，卻又像一道無形的牆，讓她感到窒息。' },
        { character: '森森鈴蘭', text: '瑪格麗特，我們去圖書館看看吧？聽說裡面藏了很多關於情咒的記錄。' },
        { character: '瑪格麗特', text: '……嗯。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【圖書館】。', choices: [ { text: '繼續', nextScene: 'c1_library' } ] }
    ]
},

c1_library: {
    background: 'assets/images/backgrounds/library_night.jpg',
    dialogues: [
        { character: '【圖書館】', text: '學院的圖書館是一棟古老的建築。高聳的天花板上懸掛著古典吊燈，四周書架延伸至二樓，空氣裡彌漫著書頁氣息。' },
        { character: '旁白', text: '瑪格麗特走在鈴蘭身旁，腳步輕輕，生怕驚擾到這片靜謐。' },
        { character: '瑪格麗特', text: '好壯觀……' },
        { character: '森森鈴蘭', text: '嗯，不過也有點像迷宮，小心別走丟了。' },
        { character: '旁白', text: '兩人走到一排陳舊書櫃前。鈴蘭抽出一本泛黃書卷，上面記載學院過往案例。' },
        { character: '森森鈴蘭', text: '妳看，這裡寫著，曾經有個學生因為過度悲傷，竟然讓花園裡的所有花朵同時凋謝。' },
        { character: '旁白', text: '瑪格麗特瞳孔微收，想起自己夜晚對星空說話時出現過的奇異之花。如果被人知道……她是否也會被記錄在冊？' },
        { character: '瑪格麗特', text: '……太神奇了。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【花園】。', choices: [ { text: '繼續', nextScene: 'c1_garden' } ] }
    ]
},

c1_garden: {
    background: 'assets/images/backgrounds/garden.jpg',
    dialogues: [
        { character: '【花園】', text: '午後的陽光溫和，圖書館外的花園靜靜迎風搖曳。石板小徑蜿蜒而過，兩側種滿各式花卉，從常見百合、薔薇到少見幻光草，皆綻放不同色彩。' },
        { character: '旁白', text: '瑪格麗特和鈴蘭並肩而行。微風拂過，帶來花香，也帶來一種無法言喻的寧靜。' },
        { character: '瑪格麗特', text: '這裡……好美啊。' },
        { character: '森森鈴蘭', text: '是吧？我就說這裡值得一看。' },
        { character: '旁白', text: '陽光傾灑，兩人第一次真正靜下來分享彼此的沉默——心之間的距離悄悄縮短。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍房間・夜】。', choices: [ { text: '繼續', nextScene: 'c1_dorm_window' } ] }
    ]
},

c1_dorm_window: {
    background: 'assets/images/backgrounds/dorm_morning2.jpg',
    dialogues: [
        { character: '【宿舍房間・夜】', text: '夜幕降臨，月光從窗外照進來，灑落在床邊。瑪格麗特坐在書桌前，攤開日記本，筆尖在紙上顫抖，卻仍堅持落下字句。' },
        { character: '旁白', text: '——今天遇見了室友，她叫森森鈴蘭。笑容很溫暖，好像能看穿一切。我想，或許在這裡……我能找到不一樣的自己。' },
        { character: '瑪格麗特', text: '……我希望這次，不要再錯過了。' },
        { character: '旁白', text: '窗外的花園深處，一朵細小的夜語花悄然綻放。' },
        { character: '旁白', text: '【第一章·完】', video: 'assets/videos/transition_ch1_to_ch2.mp4', nextScene: 'c2_library_night' }
    ]
},
        
        // 森森鈴蘭視角路線（獨立劇情線，劇本待完成）
        forest: {
            background: 'assets/images/backgrounds/forest.jpg',
            bgm: 'assets/audio/forest_bgm.mp3',
            dialogues: [
                {
                    character: '旁白',
                    text: '【森森鈴蘭視角】'
                },
                {
                    character: '旁白',
                    text: '此路線為森森鈴蘭的獨立視角，劇本尚在撰寫中。'
                },
                {
                    character: '旁白',
                    text: '敬請期待後續更新。'
                },
                {
                    character: '旁白',
                    text: '——',
                },
                {
                    character: '旁白',
                    text: '返回開始。',
                    video: 'assets/videos/transition_ch2_outro.mp4',
                            nextScene: 'start'
                }
            ]
        },
        
        // 第二章：禁忌花名冊 — 分場景
        c2_library_night: {
            background: 'assets/images/backgrounds/library_night.jpg',
            bgm: 'assets/audio/bgm_ch2.mp3',
            dialogues: [
                {
                    character: '【場景：學院圖書館·深夜】',
                    text: '微弱的燈光，紙張與墨水的味道瀰漫。瑪格麗特偷偷留到很晚，翻閱古老筆記。'
                },
                {
                    character: '瑪格麗特（心聲）',
                    text: '……這裡寫著，夜語花是最純粹的情感化形。只有在心聲無法承受時才會綻放。'
                },
                {
                    character: '旁白',
                    text: '她緊緊抱著日記本，眼神閃爍不安。'
                },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【圖書館地窖入口】。', choices: [ { text: '繼續', nextScene: 'c2_cellar' } ] }
            ]
        },

        c2_cellar: {
            background: 'assets/images/backgrounds/school2.jpg',
            dialogues: [
                { character: '【場景：圖書館地窖入口】', text: '忽然，她在半掩的門後聽見談話聲。' },
                {
                    character: '教師甲（低聲）',
                    text: '這份名冊，必須嚴格保管。任何人不能接觸。'
                },
                {
                    character: '教師乙',
                    text: '尤其是那個孩子……她的名字赫然在列。'
                },
                {
                    character: '旁白',
                    text: '教師們離開後，瑪格麗特忍不住上前，發現了一本厚重黑皮冊子——《花名冊》。'
                },
                {
                    character: '瑪格麗特（心聲）',
                    text: '花名冊……？'
                },
                {
                    character: '瑪格麗特（震驚·低聲）',
                    text: '……森森鈴蘭？（標註：危咒潛在者）'
                },
                {
                    character: '旁白',
                    text: '她的心一瞬間像被擊中。那一頁的字跡冰冷。'
                },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【第二天·花園長椅】。', choices: [ { text: '繼續', nextScene: 'c2_bench' } ] }
            ]
        },

        c2_bench: {
            background: 'assets/images/backgrounds/garden.jpg',
            dialogues: [
                { character: '【場景：第二天·花園長椅】', text: '陽光燦爛，學生喧鬧。瑪格麗特卻渾身僵硬。' },
                {
                    character: '森森鈴蘭（笑）',
                    text: '瑪格麗特！早啊。妳昨天好像很晚才回宿舍？'
                },
                {
                    character: '瑪格麗特（遲疑）',
                    text: '嗯……我……只是看了一些書。'
                },
                {
                    character: '瑪格麗特（試探）',
                    text: '如果有人，被誤解為危咒者，妳覺得應該怎麼辦？'
                },
                {
                    character: '森森鈴蘭（微笑）',
                    text: '妳啊，腦袋裡總是想這麼多奇怪的問題。'
                },
                {
                    character: '旁白',
                    text: '她笑容明亮，卻沒有真正回答。'
                },
                {
                    character: '瑪格麗特（心聲）',
                    text: '她在隱瞞……她明明什麼都知道。'
                },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【宿舍夜晚】。', choices: [ { text: '繼續', nextScene: 'c2_dorm_night' } ] }
            ]
        },

        c2_dorm_night: {
            background: 'assets/images/backgrounds/school3.jpg',
            dialogues: [
                { character: '【場景：宿舍夜晚】', text: '瑪格麗特輾轉反側，最終忍不住起身。夜空安靜無聲。' },
                {
                    character: '瑪格麗特（低語）',
                    text: '鈴蘭……妳到底經歷過什麼？'
                },
                {
                    character: '旁白',
                    text: '夜語花再次浮現，微光在房間裡蕩漾。門外，森森鈴蘭靜靜注視著那朵花——'
                },
                {
                    character: '森森鈴蘭（心聲）',
                    text: '……妳真的不該看見那個名冊。可是……我又怎麼可能怪妳呢？'
                },
                { character: '旁白', text: '她的眼神第一次沒有笑意，反而深不見底。' },
                { character: '旁白', text: '【第二章·完】', video: 'assets/videos/transition_ch2_to_ch3.mp4', nextScene: 'c3_dorm_morning' }
            ]
        },
        
        // 第三章：情咒的迴響 — 分場景
        c3_dorm_morning: {
            background: 'assets/images/backgrounds/school4.jpg',
            bgm: 'assets/audio/bgm_ch3.mp3',
            dialogues: [
                { character: '【場景：清晨·宿舍】', text: '陽光才剛越過窗棂，薄霧還未散去。瑪格麗特醒來時，聽見窗外鳥鳴。' },
                { character: '旁白', text: '那聲音不算響亮，卻在這片陌生的學院裡，顯得格外清晰。' },
                { character: '旁白', text: '她坐起身，抱著膝，靜靜凝視同寢的森森鈴蘭。' },
                { character: '旁白', text: '鈴蘭睡得安穩，呼吸輕柔，眉間卻若隱若現帶著一絲緊繃，好似夢裡也藏著不願告訴別人的心事。' },
                { character: '瑪格麗特（心聲）', text: '我不懂她。她笑得這麼輕快，可為什麼我卻總覺得，她在笑容之下，藏著比我還沉重的東西？' },
                { character: '旁白', text: '她猶豫了許久，才把床邊的日記本拉近，用細細的筆觸寫下心中的疑惑。' },
                { character: '旁白', text: '字寫到一半，她停下筆，輕輕合上本子，像是怕打擾到沉睡的同伴。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【學院餐廳】。', choices: [ { text: '繼續', nextScene: 'c3_cafeteria' } ] }
            ]
        },

        c3_cafeteria: {
            background: 'assets/images/backgrounds/cafeteria.jpg',
            dialogues: [
                { character: '【場景：學院餐廳】', text: '早餐時間的餐廳熱鬧非凡，學生們交談、笑鬧，刀叉與陶瓷相碰的聲音此起彼伏。' },
                { character: '旁白', text: '瑪格麗特端著餐盤找座位，卻因人群而手忙腳亂。' },
                { character: '森森鈴蘭', text: '這裡！' },
                { character: '旁白', text: '熟悉的聲音傳來，鈴蘭朝她揮手。她走過去，坐下。' },
                { character: '森森鈴蘭', text: '這是玫瑰果茶，聽說能讓人安定心情。' },
                { character: '旁白', text: '鈴蘭遞給她一杯熱騰騰的花草茶。瑪格麗特怔了一瞬，才低聲道謝。' },
                { character: '旁白', text: '她抿了一口，微酸，卻帶著溫和的回甘。' },
                { character: '森森鈴蘭', text: '妳昨天是不是又看書看到很晚？' },
                { character: '瑪格麗特（支吾）', text: '……嗯，有一點。' },
                { character: '森森鈴蘭（故意眯眼）', text: '妳小心點喔，圖書館的老書可不全是隨便能碰的。有些東西，會咬人。' },
                { character: '旁白', text: '瑪格麗特心中一震，手指僵在茶杯邊緣。她想問「妳是不是指花名冊」，卻硬生生把話吞了回去。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【課堂·情咒基礎】。', choices: [ { text: '繼續', nextScene: 'c3_classroom' } ] }
            ]
        },

        c3_classroom: {
            background: 'assets/images/backgrounds/classroom.jpg',
            dialogues: [
                { character: '【場景：課堂·情咒基礎】', text: '老師是一位聲音低沉的中年女性，語調緩慢，像是在講述古老的吟誦。' },
                { character: '老師', text: '情咒不是力量，而是映照。它把心之所想化為現象。真正的危險，不是咒本身，而是人心。' },
                { character: '旁白', text: '學生們有人低頭記筆記，有人心不在焉。瑪格麗特卻專注地聽著，幾乎每一個字都重重敲擊心底。' },
                { character: '旁白', text: '她忍不住看了眼身旁的鈴蘭。鈴蘭似乎在發呆，手指漫不經心地敲著桌面，眼神飄忽不定。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【操場·放學後】。', choices: [ { text: '繼續', nextScene: 'c3_field' } ] }
            ]
        },

        c3_field: {
            background: 'assets/images/backgrounds/school5.jpg',
            dialogues: [
                { character: '【場景：操場·放學後】', text: '陽光逐漸斜下，學生們在操場上進行咒力練習。' },
                { character: '旁白', text: '有人手中凝聚花瓣般的光，有人呼喚出水霧，有人只是徒勞地揮手。' },
                { character: '旁白', text: '瑪格麗特在角落，努力想讓咒語浮現。可她的指尖只閃過微弱的光點，隨即消散。' },
                { character: '旁白', text: '她感到挫敗，低下頭。就在這時，鈴蘭從背後輕輕拍了拍她的肩。' },
                { character: '森森鈴蘭（笑）', text: '別急。妳知道嗎？情咒不是用「想」出來的，它只是……妳心底的回聲。' },
                { character: '旁白', text: '瑪格麗特抬起頭，看著鈴蘭。她的眼神帶著鼓勵，卻同時閃過一絲不易察覺的陰影。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【夜晚·宿舍屋頂】。', choices: [ { text: '繼續', nextScene: 'c3_rooftop' } ] }
            ]
        },

        c3_rooftop: {
            background: 'assets/images/backgrounds/dorm_morning2.jpg',
            dialogues: [
                { character: '【場景：夜晚·宿舍屋頂】', text: '那晚，瑪格麗特一個人坐在屋頂，頭頂是繁星與月光。' },
                { character: '旁白', text: '夜風輕拂，遠處的花園散發著淡淡光暈。' },
                { character: '旁白', text: '她再度打開日記本，慢慢寫下：' },
                { character: '瑪格麗特（心聲）', text: '我開始明白，情咒是心的映照。可是——如果心底藏著不該有的東西，會不會連花朵也因此扭曲？' },
                { character: '旁白', text: '她停下筆，望向窗邊。燈光下，鈴蘭正坐在床邊，默默注視著某樣東西。' },
                { character: '旁白', text: '那一刻，瑪格麗特甚至懷疑，她的同伴看不見自己……' },
                { character: '旁白', text: '星空下，夜語花的光再次在瑪格麗特指尖浮現，這次比以往更加清晰。' },
                { character: '旁白', text: '而遠處的鈴蘭，眼神裡卻閃過一絲痛苦。' },
                { character: '旁白', text: '【第三章·完】', video: 'assets/videos/transition_ch3_to_ch4.mp4', nextScene: 'c4_plaza' }
            ]
        },
        
        // 第四章：共鳴咒試煉 — 分場景
        c4_plaza: {
            background: 'assets/images/backgrounds/plaza.jpg',
            bgm: 'assets/audio/bgm_ch4.mp3',
            dialogues: [
                { character: '【場景：清晨·學院廣場】', text: '廣場的石磚在露水的浸潤下泛著光。鐘樓響起長鳴，聲音迴盪在空曠的空氣裡。' },
                { character: '旁白', text: '學生們聚集於廣場中央，氣氛異樣壓抑。每個人手裡都拿著一張被封印的「試煉名單」，上面寫著即將參與「情感共鳴測試」的學生名。' },
                { character: '旁白', text: '瑪格麗特的手心微微冒汗。她盯著名單，看見自己的名字赫然列在其上。' },
                { character: '旁白', text: '再往下，她看見「森森鈴蘭」。指尖瞬間僵硬。她明白，無論如何，她與鈴蘭都無法迴避這場試煉。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【課堂·試煉前的說明】。', choices: [ { text: '繼續', nextScene: 'c4_classroom_brief' } ] }
            ]
        },

        c4_classroom_brief: {
            background: 'assets/images/backgrounds/classroom.jpg',
            dialogues: [
                { character: '【場景：課堂·試煉前的說明】', text: '大講堂內，老師的聲音低沉。牆上懸掛的古老掛毯描繪著無數被情咒吞噬的影子。' },
                { character: '老師', text: '共鳴咒試煉，不是戰鬥，而是揭示。它將讓你們面對最深的心念。你們可以選擇隱藏，但試煉不會說謊。' },
                { character: '旁白', text: '學生們議論紛紛，壓抑的氣氛逐漸蔓延。有人呼吸急促，有人低聲禱告。' },
                { character: '旁白', text: '瑪格麗特只是沉默，心跳卻逐漸加快。她感覺得到，鈴蘭的視線停留在自己身上。' },
                { character: '旁白', text: '但當她回望時，鈴蘭卻若無其事地移開目光，仿佛什麼都沒有發生過。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【傍晚·學院花園】。', choices: [ { text: '繼續', nextScene: 'c4_garden' } ] }
            ]
        },

        c4_garden: {
            background: 'assets/images/backgrounds/garden.jpg',
            dialogues: [
                { character: '【場景：傍晚·學院花園】', text: '試煉前夕。夕陽把整個花園渲染成橘紅色，長椅上落滿了斑駁的光影。' },
                { character: '旁白', text: '瑪格麗特坐在石椅上，手裡攥著那本日記，心情紊亂。' },
                { character: '旁白', text: '鈴蘭慢慢走來，手中拿著一支白色的百合。' },
                { character: '森森鈴蘭', text: '聽說百合能驅散惡夢。明天，妳應該會需要它。' },
                { character: '旁白', text: '鈴蘭把花放在她手心，語氣帶著輕快的調侃。瑪格麗特怔住，低聲問：' },
                { character: '瑪格麗特', text: '……妳不害怕嗎？' },
                { character: '森森鈴蘭', text: '害怕啊。不過，與其害怕試煉，不如害怕自己連正視都不敢吧。' },
                { character: '旁白', text: '這句話像一根細針，輕輕刺入瑪格麗特心裡。她張了張口，卻什麼也沒說，只能緊緊握住那支百合。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【夜晚·宿舍屋頂】。', choices: [ { text: '繼續', nextScene: 'c4_rooftop' } ] }
            ]
        },

        c4_rooftop: {
            background: 'assets/images/backgrounds/dorm_morning.jpg',
            dialogues: [
                { character: '【場景：夜晚·宿舍屋頂】', text: '深夜的宿舍裡一片寂靜，只有月光從窗縫照進來。' },
                { character: '旁白', text: '瑪格麗特翻來覆去，無法入睡。她終於下床，抱著日記走到屋頂。' },
                { character: '旁白', text: '風很冷，星光卻很亮。她緩緩寫下心中的不安。' },
                { character: '瑪格麗特（心聲）', text: '我不想讓她看見我的心。可是，我又無法忍受，她若因此與我保持距離。' },
                { character: '旁白', text: '墨跡在月色下閃動，淚水無聲滑落。就在這時，身後傳來輕響。' },
                { character: '森森鈴蘭', text: '睡不著嗎？' },
                { character: '旁白', text: '鈴蘭的聲音響起，她也走上了屋頂。披著外套，髮絲被夜風吹亂。' },
                { character: '旁白', text: '兩人並肩坐下，誰也沒說話。只是靜靜地看著遠方的夜空。' },
                { character: '旁白', text: '沉默中，瑪格麗特聽見自己的心跳，強烈到像是要把胸腔震碎。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【試煉之日·大禮堂】。', choices: [ { text: '繼續', nextScene: 'c4_hall' } ] }
            ]
        },

        c4_hall: {
            background: 'assets/images/backgrounds/hall_exterior.jpg',
            dialogues: [
                { character: '【場景：試煉之日·大禮堂】', text: '高聳的圓頂、冷冽的石牆，四周環繞著古老符文，空氣中瀰漫著壓迫感。' },
                { character: '旁白', text: '學生們被一一喚名，走向中央的試煉水晶。當瑪格麗特的名字被念出，她幾乎站不穩。' },
                { character: '旁白', text: '她走到水晶前，閉上眼。瞬間，黑暗如潮水般湧來——' },
                { character: '【內心世界】', text: '她看見無數散落的信紙，鋪滿腳下的地面。' },
                { character: '旁白', text: '每一封，都是她從未寄出的日記與信件，字裡行間全是關於鈴蘭的片段。' },
                { character: '旁白', text: '腳步聲響起。她回頭，看見鈴蘭站在遠方，拾起那些信紙，逐字逐句地閱讀。' },
                { character: '旁白', text: '瑪格麗特慌亂地想要阻止，卻無法靠近。她的聲音在這個心境裡失效，只能眼睜睜看著鈴蘭一封接一封地讀下去。' },
                { character: '【試煉水晶外】', text: '圍觀的學生看不見心境裡的景象，只見瑪格麗特淚流滿面，渾身顫抖。' },
                { character: '旁白', text: '而站在另一側的鈴蘭，眼神卻愈發深沉，唇角失去了笑意。' },
                { character: '旁白', text: '她伸出手，輕輕碰上水晶。下一瞬間，她竟「闖入」了瑪格麗特的心境。' },
                { character: '【內心世界·交會】', text: '信紙如雪片般飛舞。鈴蘭站在瑪格麗特面前，手中仍捏著那最後一封信。' },
                { character: '旁白', text: '她沒有說話。只是一步一步走近，然後——牽起瑪格麗特的手。' },
                { character: '旁白', text: '那一刻，所有信紙同時化作夜語花，漫天盛放。瑪格麗特呆呆望著，淚水止不住。' },
                { character: '森森鈴蘭', text: '妳知道嗎……我一直都聽得見。' },
                { character: '旁白', text: '【第四章·完】', video: 'assets/videos/transition_ch4_to_ch5.mp4', nextScene: 'c5_gate' }
            ]
        },
        
        // 第五章：無聲之花 — 分場景（含雙結局）
        c5_gate: {
            background: 'assets/images/backgrounds/academy_gate_dawn.jpg',
            bgm: 'assets/audio/bgm_ch5.mp3',
            dialogues: [
                { character: '【場景：黎明·學院邊界】', text: '濃霧覆蓋著森林，鐵門緊閉，符文在空氣中微微閃爍。' },
                { character: '旁白', text: '幾名學生趁著守衛換班，悄然逃離。腳步聲急促，心跳混雜在夜鳥的鳴叫裡。' },
                { character: '旁白', text: '瑪格麗特與鈴蘭並肩而行，氣息凌亂，卻沒有誰先開口。' },
                { character: '旁白', text: '背後的學院鐘聲緩慢響起，像是最後的告別。瑪格麗特心中顫抖，她明白，若真的走出這道門，就再也回不去那段日常。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【森林小徑】。', choices: [ { text: '繼續', nextScene: 'c5_forest_path' } ] }
            ]
        },

        c5_forest_path: {
            background: 'assets/images/backgrounds/forest_path.jpg',
            dialogues: [
                { character: '【場景：逃亡的旅途·森林小徑】', text: '林間濕潤，空氣裡帶著松針與泥土的氣味。露水從枝葉滴落，砸在他們的肩頭。' },
                { character: '旁白', text: '瑪格麗特抱緊書冊與日記，緊跟在鈴蘭身後。她看見鈴蘭的背影挺直，步伐堅定，卻隱隱透著一種孤絕。' },
                { character: '瑪格麗特', text: '……妳真的不後悔嗎？' },
                { character: '旁白', text: '瑪格麗特終於問出口，聲音微顫。鈴蘭沒有立刻回答。她只是停下腳步，望向遠處霧氣中若隱若現的村落燈火。' },
                { character: '旁白', text: '良久，她才淡淡說：' },
                { character: '森森鈴蘭', text: '後悔什麼？我們都只是想活下去。' },
                { character: '旁白', text: '這句話輕得像風，卻讓瑪格麗特的心沉了下去。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【夜晚·廢棄教堂】。', choices: [ { text: '繼續', nextScene: 'c5_church' } ] }
            ]
        },

        c5_church: {
            background: 'assets/images/backgrounds/church_ruins.jpg',
            dialogues: [
                { character: '【場景：夜晚·廢棄教堂】', text: '殘破的彩色玻璃灑下斑駁光影，木椅上覆滿灰塵。' },
                { character: '旁白', text: '瑪格麗特捧著百合花，低聲說：' },
                { character: '瑪格麗特', text: '鈴蘭……如果他們找到我們怎麼辦？' },
                { character: '旁白', text: '鈴蘭笑了笑，卻沒有回答。她只是走到講壇前，指尖在破碎的木雕上輕輕劃過，仿佛在告別什麼。' },
                { character: '旁白', text: '沉默持續了許久，直到火堆將木柴燒得噼啪作響，鈴蘭才低聲開口：' },
                { character: '森森鈴蘭', text: '其實，我已經決定好了。' },
                { character: '旁白', text: '瑪格麗特一愣，心口揪緊。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【分岔口·雨夜】。', choices: [ { text: '繼續', nextScene: 'c5_crossroad' } ] }
            ]
        },

        c5_crossroad: {
            background: 'assets/images/backgrounds/rainy_crossroad.jpg',
            dialogues: [
                { character: '【場景：分岔口·雨夜】', text: '暴雨傾盆，林道泥濘。兩人站在岔路口，雨水打濕了頭髮與衣襟。' },
                { character: '旁白', text: '鈴蘭轉身，眼神前所未有的堅定。' },
                { character: '森森鈴蘭', text: '妳走吧，瑪格麗特。往北，還有能容身的地方。' },
                { character: '瑪格麗特', text: '不……我們不是說好要一起——' },
                { character: '旁白', text: '瑪格麗特愣住，雨水模糊了視線。鈴蘭用力打斷：' },
                { character: '森森鈴蘭', text: '我不能跟妳一起走。他們給了我選擇。只要我留下，成為研究樣本，就能保妳自由。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '瑪格麗特整個人都僵住，喉嚨發不出聲。', choices: [ { text: '一起走！', nextScene: 'c5_separation' } ] }
            ]
        },

        c5_separation: {
            background: 'assets/images/backgrounds/rainy_crossroad.jpg',
            dialogues: [
                { character: '旁白', text: '她衝上前，抓住鈴蘭的手，指尖顫抖到幾乎要斷裂。' },
                { character: '瑪格麗特', text: '不要……不要這樣……' },
                { character: '旁白', text: '聲音破碎，幾乎被雨聲掩蓋。鈴蘭用力回握，卻一步步將她推向北方的道路。' },
                { character: '森森鈴蘭', text: '妳要活下去。妳要替我記住，我存在過。' },
                { character: '旁白', text: '瑪格麗特淚水與雨水混雜，視線一片模糊。她想要抗拒，卻終於被鈴蘭推開。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '即將前往【數年後·無聲之園】。', choices: [ { text: '繼續', nextScene: 'c5_silent_garden' } ] }
            ]
        },

        c5_silent_garden: {
            background: 'assets/images/backgrounds/silent_garden.jpg',
            dialogues: [
                { character: '【場景：數年後·無聲之園】', text: '歲月流轉。遠方的山谷裡，一片新生的花園悄然綻放。' },
                { character: '旁白', text: '「無聲之園」，收容那些無法壓抑情咒的孩子們。' },
                { character: '旁白', text: '瑪格麗特已不再是當年那個顫抖的少女。她身姿挺直，溫柔地教導新來的孩子如何與情感共處。' },
                { character: '旁白', text: '某日，一封無署名信送來。紙張泛黃，字跡卻熟悉。' },
                { character: '信件', text: '我曾在妳的夜語裡，看見整個世界。謝謝妳，讓我明白什麼是「愛」。' },
                { character: '旁白', text: '字跡在陽光下閃爍，瑪格麗特屏住呼吸，指尖顫抖。' },
                { character: '旁白', text: '—— 請選擇結局 ——' },
                { character: '旁白', text: '【兩個結局選項】', choices: [ { text: 'A 結局：尋找', nextScene: 'c5_endA' }, { text: 'B 結局：傳遞', nextScene: 'c5_endB' } ] }
            ]
        },
        
        // 結局A：尋找
        c5_endA: {
            background: 'assets/images/backgrounds/mountains.jpg',
            bgm: 'assets/audio/bgm_end_a.mp3',
            dialogues: [
                { character: '旁白', text: '她合上信，抬頭望向群山：如果妳還在……我一定會找到妳。' },
                { character: '旁白', text: '她踏上旅途。', video: 'assets/videos/ending_A.mp4', nextScene: 'start' }
            ]
        },
        
        // 結局B：傳遞
        c5_endB: {
            background: 'assets/images/backgrounds/garden.jpg',
            bgm: 'assets/audio/bgm_end_b.mp3',
            dialogues: [
                { character: '旁白', text: '她將信折好，放入夜語花的花心：就讓孩子們，替我把情感傳遞下去吧。' },
                { character: '旁白', text: '風起，花瓣飛舞。', video: 'assets/videos/ending_B.mp4', nextScene: 'start' }
            ]
        }
    },
    
    // 角色定義
    characters: {
        '瑪格麗特': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（心聲）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（有些慌亂）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（點頭）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（低聲）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（驚訝）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（試探）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（遲疑）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '瑪格麗特（震驚·低聲）': {
            image: 'assets/images/characters/margaret.png',
            position: '15%'
        },
        '森森鈴蘭': {
            image: 'assets/images/characters/visitor.png',
            position: '50%'
        },
        '森森鈴蘭（笑）': {
            image: 'assets/images/characters/visitor.png',
            position: '50%'
        },
        '森森鈴蘭（微笑）': {
            image: 'assets/images/characters/visitor.png',
            position: '50%'
        },
        '森森鈴蘭（轉過頭）': {
            image: 'assets/images/characters/visitor.png',
            position: '50%'
        },
        '森森鈴蘭（心聲）': {
            image: 'assets/images/characters/visitor.png',
            position: '50%'
        },
        '教師甲（低聲）': {
            image: 'assets/images/characters/librarian.png',
            position: '50%'
        },
        '教師乙': {
            image: 'assets/images/characters/librarian.png',
            position: '50%'
        },
        '老師': {
            image: 'assets/images/characters/librarian.png',
            position: '50%'
        },
        '信件': {
            image: '',
            position: '50%'
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
    

},
    
     // 獲取角色圖片路徑
    getCharacterImage: function(characterName) {
        const character = this.characters[characterName];
        return character ? character.image : '';
    },
    
    // 獲取角色位置
    getCharacterPosition: function(characterName) {
        const character = this.characters[characterName];
        return character ? character.position : '50%';
    }
};

export { Story };


