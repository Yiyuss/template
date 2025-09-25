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
        
        // 第一章：新的校園，新的邂逅 — 分場景
c1_gate: {
    background: 'assets/images/backgrounds/campus.jpg',
    bgm: 'assets/audio/bgm_ch1.mp3',
    dialogues: [
        { character: '【校門】', text: '初春的晨風帶著微涼的氣息，靜語花園學院的校門靜靜聳立在遠方。' },
        { character: '旁白', text: '這是一座以白色石材砌成的拱門，頂端盤繞著常青藤，偶爾有幾朵粉紫色的小花點綴其中，像是在迎接每一位到來的學生。' },
        { character: '旁白', text: '瑪格麗特·諾爾絲靜靜地站在校門口。' },
        { character: '旁白', text: '她背著略顯笨重的旅行袋，肩膀被壓得有些下垂。從長途馬車下來的腳步還有些僵硬，卻掩不住她眼中閃爍的光彩。' },
        { character: '瑪格麗特', text: '……就是這裡啊。' },
        { character: '旁白', text: '和外界的喧囂不同，學院似乎自成一個小小的世界。遠遠望去，紅磚砌成的主教學樓矗立於校園深處，旁邊是綠意盎然的林木。' },
        { character: '旁白', text: '她甚至聽見微風拂過枝葉，發出細微的沙沙聲，彷彿在為她奏起迎接的樂曲。' },
        { character: '旁白', text: '她的心口有些發緊。' },
        { character: '旁白', text: '這裡將是她往後數年的生活之地，也是她必須面對自我的地方。' },
        { character: '旁白', text: '她曾經在舊日記裡無數次想像過自己來到這裡的模樣——但真實的場景，卻比她的字句要更鮮明、更迫切。' },
        { character: '瑪格麗特', text: '……呼。' },
        { character: '旁白', text: '她深吸一口氣，才邁步踏入。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【校園小徑】。', choices: [ { text: '出發', nextScene: 'c1_path' } ] }
    ]
},

c1_path: {
    background: 'assets/images/backgrounds/school.jpg',
    dialogues: [
        { character: '【校園小徑】', text: '沿著鋪滿碎石的小徑前行，兩側是整齊修剪的樹籬。' },
        { character: '旁白', text: '空氣中瀰漫著青草的清香，偶爾有白色的花瓣隨風飄落，在陽光下閃爍著淡淡的光。' },
        { character: '旁白', text: '瑪格麗特握緊行李袋的帶子，步伐略顯拘謹。' },
        { character: '旁白', text: '她想抬頭欣賞校園，但又忍不住低下視線，避免與周遭的學生視線交會。' },
        { character: '瑪格麗特', text: '這裡的氣息……好安靜。' },
        { character: '旁白', text: '然而正因如此，她反而覺得自己的存在格外突兀。像是一滴墨水滴入清澈的泉水裡，無論如何掩飾，都會被人注意。' },
        { character: '旁白', text: '就在她陷入緊張時，一群穿著校服的學生笑鬧著從小徑另一端走來。' },
        { character: '旁白', text: '她立刻偏過身，裝作在整理肩上的帶子。' },
        { character: '旁白', text: '學生們的笑聲在她耳邊掠過，帶著青春的活力和一種屬於團體的自在感。' },
        { character: '旁白', text: '——那是她所缺乏的。' },
        { character: '旁白', text: '她心底微微一沉，卻又暗暗打起精神。' },
        { character: '瑪格麗特', text: '沒關係……這裡是新的開始。至少，至少要……試著去改變。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍走廊】。', choices: [ { text: '繼續', nextScene: 'c1_dorm_hall' } ] }
    ]
},

c1_dorm_hall: {
    background: 'assets/images/backgrounds/dorm_morning.jpg',
    dialogues: [
        { character: '【宿舍走廊】', text: '在學姐的帶領下，瑪格麗特抵達了分配好的宿舍棟。' },
        { character: '旁白', text: '走廊裡鋪著淺色木地板，窗戶敞開，陽光灑落，空氣中帶著淡淡的木香。' },
        { character: '旁白', text: '腳步聲在寂靜的走廊迴盪，每一步都提醒她：從今天起，她將在這裡度過無數的晨昏。' },
        { character: '瑪格麗特', text: '這裡……好像比我想像中更寬敞。' },
        { character: '旁白', text: '她小聲自語，試著讓自己感到安心。' },
        { character: '旁白', text: '宿舍的牆上掛著幾幅描繪花園的水彩畫，色調溫和，彷彿要告訴新來的人——這裡不只是學習的地方，也是心靈的歸宿。' },
        { character: '學姐', text: '你的房間在這裡。' },
        { character: '瑪格麗特', text: '謝、謝謝。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍房間】。', choices: [ { text: '進入房間', nextScene: 'c1_dorm_room' } ] }
    ]
},

c1_dorm_room: {
    background: 'assets/images/backgrounds/school4.jpg',
    dialogues: [
        { character: '【宿舍房間】', text: '推開門時，一股淡淡的清新氣息迎面而來。' },
        { character: '旁白', text: '房間不大，卻佈置得井然有序：靠窗的位置擺著兩張床，中間隔著小桌，桌上放著新發的日程冊和一盞油燈。' },
        { character: '旁白', text: '窗簾半掀，柔和的光線照進來，灑落在淺藍色的床單上。' },
        { character: '旁白', text: '瑪格麗特走近，伸手撫過木質桌面的紋理，指尖觸到一絲溫潤的質感。' },
        { character: '旁白', text: '——她還沒來得及仔細觀察，門卻在此刻被推開了。' },
        { character: '森森鈴蘭', text: '啊，妳已經到了？' },
        { character: '旁白', text: '瑪麗抬頭，與一雙明亮的眼睛對上。' },
        { character: '旁白', text: '那是個與她年紀相仿的少女，帶著自然的笑容，髮梢在陽光下閃爍。' },
        { character: '旁白', text: '她的出現，就像在安靜的房間裡點亮了一盞燈。' },
        { character: '森森鈴蘭', text: '……我叫森森鈴蘭。' },
        { character: '旁白', text: '少女笑著自我介紹，將行李輕放到另一張床上。' },
        { character: '森森鈴蘭', text: '看來以後我們要一起住了呢。' },
        { character: '旁白', text: '瑪麗愣了愣，才急忙低聲回應。' },
        { character: '瑪格麗特', text: '我……我叫瑪格麗特·諾爾絲，請、請多多指教。' },
        { character: '旁白', text: '她的聲音有些顫抖，但鈴蘭只是笑得更溫柔。' },
        { character: '森森鈴蘭', text: '嗯，請多多關照呀。' },
        { character: '旁白', text: '瑪麗雖然緊張，但還是努力讓自己微笑，小心翼翼地問。' },
        { character: '瑪格麗特', text: '妳是……轉學生嗎？' },
        { character: '森森鈴蘭', text: '嗯，算是吧。' },
        { character: '旁白', text: '鈴蘭把外套脫下來，掛在牆邊的掛鉤上，動作乾脆俐落。' },
        { character: '森森鈴蘭', text: '我以前是在北方的分校念書，因為一些原因才轉來這裡。聽說這裡的花園很有名呢，所以有點期待。' },
        { character: '瑪格麗特', text: '花園……' },
        { character: '旁白', text: '瑪麗心中微微一顫。' },
        { character: '旁白', text: '對她來說，「花園」並不是單純的觀光景點，而是某種心底的秘密寄託。' },
        { character: '旁白', text: '她一直壓抑的情感，總會在夜晚化作「夜語花」悄然綻放。' },
        { character: '森森鈴蘭', text: '怎麼了？' },
        { character: '旁白', text: '鈴蘭注意到她表情的變化。' }, 
        { character: '瑪格麗特', text: '沒、沒事。' },
        { character: '旁白', text: '瑪麗慌忙垂下眼簾，將日記本收進抽屜裡，像是怕被發現什麼。' },
        { character: '森森鈴蘭', text: '哈哈，妳很緊張啊。' },
        { character: '旁白', text: '鈴蘭笑出聲，卻沒有追問，只是自然地拉開窗簾，讓更多陽光灑入房間。' },
        { character: '旁白', text: '她轉身時，那抹笑容乾淨得彷彿能驅散一切陰影。' },
        { character: '旁白', text: '瑪麗胸口一熱，不知該說什麼，只能安靜地看著對方。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【教室】。', choices: [ { text: '第二日', nextScene: 'c1_classroom' } ] }
    ]
},

c1_classroom: {
    background: 'assets/images/backgrounds/classroom.jpg',
    dialogues: [
        { character: '【教室】', text: '翌日清晨，學院的鐘聲悠然響起。' },
        { character: '旁白', text: '瑪麗和鈴蘭一同走進教室，裡頭的氣氛比她想像的更熱鬧。' },
        { character: '旁白', text: '木質課桌整齊排列，牆上掛著地圖與魔力規範表。' },
        { character: '旁白', text: '學生們三三兩兩圍在一起，有的在討論課程，有的則分享家鄉的趣事。' },
        { character: '短髮少女', text: '早啊！' },
        { character: '旁白', text: '一位短髮的少女熱情地跟鈴蘭打招呼，目光落在她身旁的瑪格麗特時，語氣帶了幾分好奇' },
        { character: '短髮少女', text: '這位是？' },
        { character: '森森鈴蘭', text: '她是我的室友，瑪格麗特。' },
        { character: '旁白', text: '鈴蘭自然地介紹。' },
        { character: '旁白', text: '瑪麗心頭一顫，卻努力擠出一個笑容，微微鞠躬。' },
        { character: '瑪格麗特', text: '……初次見面，請多多指教。' },
        { character: '短髮少女', text: '哦～' },
        { character: '旁白', text: '短髮少女眼神閃了閃，像是看透了她的羞怯，但沒有多說，只是回以一笑。' },
        { character: '旁白', text: '課程開始後，老師是一位身穿黑袍的中年男子，聲音低沉卻不失威嚴。' },
        { character: '男老師', text: '靜語花園學院，是情咒研究的核心場所。' },
        { character: '男老師', text: '你們在這裡所學，不僅僅是控制情感的技巧，更是學會與自己相處的方式。' },
        { character: '旁白', text: '瑪格麗特低下頭，用筆記下老師的話。' },
        { character: '瑪格麗特', text: '與自己相處……' },
        { character: '旁白', text: '這幾個字在她腦中迴盪，卻又像一道無形的牆，讓她感到窒息。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '下課時，鈴蘭拉著她的袖子。' },
        { character: '森森鈴蘭', text: '瑪麗，我們去圖書館看看吧？聽說裡面藏了很多關於情咒的記錄。' },
        { character: '瑪格麗特', text: '……嗯。' },
        { character: '旁白', text: '她遲疑片刻，還是答應了。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【圖書館】。', choices: [ { text: '離開教室', nextScene: 'c1_library' } ] }
    ]
},

c1_library: {
    background: 'assets/images/backgrounds/library_night.jpg',
    dialogues: [
        { character: '【圖書館】', text: '學院的圖書館是一棟古老的建築，高聳的天花板上懸掛著古典吊燈，四周的書架延伸至二樓。' },
        { character: '旁白', text: '空氣裡彌漫著書頁的氣息，厚重卻帶著安心感。' },
        { character: '旁白', text: '瑪格麗特走在鈴蘭身旁，腳步輕輕，生怕驚擾到這片靜謐。' },
        { character: '瑪格麗特', text: '好壯觀……' },
        { character: '森森鈴蘭', text: '嗯，不過也有點像迷宮。小心別走丟了。' },
        { character: '旁白', text: '她的聲音輕快卻帶點調侃，讓瑪麗臉微微一紅。' },
        { character: '旁白', text: '兩人慢慢走到一排陳舊的書櫃前。' },
        { character: '旁白', text: '鈴蘭隨手抽出一本泛黃的書卷，上面記載的是學院過往的案例。' },
        { character: '森森鈴蘭', text: '妳看，這裡寫著，曾經有個學生因為過度悲傷，竟然讓花園裡的所有花朵同時凋謝。' },
        { character: '旁白', text: '瑪麗瞳孔微微收縮。她想起自己夜晚偷偷對星空說話時，出現過的那些奇異之花。' },
        { character: '旁白', text: '如果被人知道……她是否也會被記錄在冊？' },
        { character: '瑪格麗特', text: '……太神奇了。' },
        { character: '旁白', text: '她強忍著內心的顫抖，把視線移開。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【花園】。', choices: [ { text: '繼續', nextScene: 'c1_garden' } ] }
    ]
},

c1_garden: {
    background: 'assets/images/backgrounds/garden.jpg',
    dialogues: [
        { character: '【花園】', text: '午後的陽光溫和，圖書館外的花園靜靜迎風搖曳。' },
        { character: '旁白', text: '石板小徑蜿蜒而過，兩側種滿了各式各樣的花卉，從常見的百合、薔薇，到少見的幻光草，皆綻放著不同的色彩。' },
        { character: '旁白', text: '瑪格麗特和鈴蘭並肩而行。微風拂過，帶來花香，也帶來一種無法言喻的寧靜。' },
        { character: '瑪格麗特', text: '這裡……好美啊。' },
        { character: '森森鈴蘭', text: '是吧？我就說這裡值得一看。' },
        { character: '旁白', text: '鈴蘭笑著伸展雙臂，彷彿想把花園的空氣全部擁入懷裡。' },
        { character: '旁白', text: '她忽然轉頭看向瑪麗，眼神帶著一絲探尋。' },
        { character: '森森鈴蘭', text: '對了，妳昨晚是不是在寫什麼？' },
        { character: '瑪格麗特', text: '啊……' },
        { character: '旁白', text: '瑪麗心頭一緊，手指本能地攥住裙角。' },
        { character: '瑪格麗特', text: '只是……日記而已。' },
        { character: '旁白', text: '鈴蘭沒有再追問，只是輕輕一笑，像是把這份秘密收進心底。' },
        { character: '旁白', text: '陽光傾灑，兩人並肩走在花園裡。' },
        { character: '旁白', text: '這是她們第一次真正靜下來，分享彼此的沉默——卻也是第一次，讓心之間的距離悄悄縮短。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍房間・夜】。', choices: [ { text: '好感度增加', nextScene: 'c1_dorm_room_night' } ] }
    ]
},

c1_dorm_room_night: {
    background: 'assets/images/backgrounds/school3.jpg',
    dialogues: [
        { character: '【宿舍房間・夜】', text: '夜幕降臨，月光從窗外照進來，灑落在床邊。' },
        { character: '旁白', text: '瑪麗坐在書桌前，攤開日記本，筆尖在紙上顫抖，卻仍堅持落下字句。' },
        { character: '旁白', text: '——今天遇見了室友。她叫森森鈴蘭。' },
        { character: '旁白', text: '——笑容很溫暖，好像能看穿一切。' },
        { character: '旁白', text: '——我想，或許在這裡……我能找到不一樣的自己。' },
        { character: '旁白', text: '寫到這裡，她忽然停下筆，抬頭看向窗外的夜空，輕聲呢喃。' },
        { character: '瑪格麗特', text: '……我希望這次，不要再錯過了。' },
        { character: '旁白', text: '窗外的花園深處，一朵細小的夜語花悄然綻放。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '【第一章·完】', video: 'assets/videos/transition_greenhouse.mp4', nextScene: 'c2_dorm_morning' }
        
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
        
        // 第二章：花語的迴響 — 分場景
c2_dorm_morning: {
    background: 'assets/images/backgrounds/school4.jpg',
    bgm: 'assets/audio/bgm_ch2.mp3',
    dialogues: [
        { character: '【場景：宿舍房間・清晨】', text: '清晨的鐘聲再度迴盪在學院上空，聲音像一層薄霧，繚繞在古老的迴廊與塔尖。' },
        { character: '旁白', text: '陽光從百葉窗的縫隙滲入，為房間鍍上一層淡金的光。' },
        { character: '旁白', text: '桌上墨跡未乾的日記紙張微微翹起，彷彿還留有昨夜心事的餘溫。' },
        { character: '旁白', text: '瑪格麗特翻身醒來，眨著惺忪的睡眼，卻發現對面的鈴蘭早已起床。' },
        { character: '旁白', text: '她正端坐在梳妝鏡前，俐落地將長髮束起，神情專注，仿佛清晨的空氣都因她的存在而顯得更加清澈。' },
        { character: '瑪格麗特', text: '妳今天起得好早。' },
        { character: '旁白', text: '瑪麗揉著眼睛，聲音還帶著困倦。' },
        { character: '森森鈴蘭', text: '習慣了。' },
        { character: '旁白', text: '鈴蘭笑著回頭，黑髮在光下泛著柔和的光澤。' },
        { character: '森森鈴蘭', text: '早起的時候，總覺得空氣比較乾淨，心情也能安定下來。' },
        { character: '旁白', text: '瑪麗愣了愣，對她而言，早晨往往意味著拖延與焦躁，像是被迫迎上未知的一日。' },
        { character: '旁白', text: '但鈴蘭的語氣卻輕盈得像晨風，讓她不自覺地想跟上。' },
        { character: '瑪格麗特', text: '……真不可思議。' },
        { character: '森森鈴蘭', text: '什麼不可思議？' },
        { character: '瑪格麗特', text: '沒什麼！' },
        { character: '旁白', text: '瑪麗迅速背過身，把被子掀開，腳步慌張地踏向更衣架。' },
        { character: '旁白', text: '她不願承認，自己只是被那種淡然自若的氣息所吸引。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【餐廳】。', choices: [ { text: '繼續', nextScene: 'c2_cafeteria' } ] }
    ]
},

c2_cafeteria: {
    background: 'assets/images/backgrounds/cafeteria.jpg',
    dialogues: [
        { character: '【場景：餐廳】', text: '餐廳大廳挑高宏偉，宛若小型禮堂，吊燈折射出的光華流淌在銀器與玻璃杯上。' },
        { character: '旁白', text: '長桌上擺滿了各式早餐：熱騰騰的奶油麵包、果醬與黃油、清爽的水果盅，還有專為情咒學徒調製的花草茶。' },
        { character: '旁白', text: '人聲交錯，卻不顯嘈雜。' },
        { character: '旁白', text: '大多數學生邊交談邊翻閱課本，顯然緊張的氣氛依舊籠罩著新學期。' },
        { character: '森森鈴蘭', text: '這個——' },
        { character: '旁白', text: '鈴蘭端起一杯淡紫色的茶，微笑著遞到瑪麗面前' },
        { character: '森森鈴蘭', text: '是給初學者喝的，可以穩定情緒波動。' },
        { character: '旁白', text: '瑪麗有些遲疑。她低下頭，小心抿了一口。' },
        { character: '旁白', text: '淡淡的甜味與花香交織，順著喉嚨滑下，化作一股暖流在胸腔散開。' },
        { character: '旁白', text: '原本怦怦直跳的心口，像被一雙看不見的手輕輕撫平。' },
        { character: '瑪格麗特', text: '……好喝。' },
        { character: '旁白', text: '鈴蘭眼神一亮，語氣輕快卻帶著堅定：' },
        { character: '森森鈴蘭', text: '那就每天都喝吧，當作我們的約定。' },
        { character: '旁白', text: '瑪麗愣了下，耳尖微紅，她沒有回答，只是點點頭，將茶杯握得更緊。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【教室】。', choices: [ { text: '好感度上升', nextScene: 'c2_classroom' } ] }
    ]
},

c2_classroom: {
    background: 'assets/images/backgrounds/classroom.jpg',
    dialogues: [
        { character: '【場景：教室】', text: '上午的課程比昨日更加緊湊，講台上的老師揮動教鞭，符號與花紋在黑板上逐一浮現。' },
        { character: '老師', text: '情咒的力量，並非單純的法術，而是情感與意志的共鳴。' },
        { character: '老師', text: '若心境動搖，咒語便會隨之變質。今天，我們要進行最基礎的感應訓練。' },
        { character: '旁白', text: '教室瞬間安靜。學生們依序閉上眼睛，跟隨指引感受內心情緒的流動。' },
        { character: '旁白', text: '瑪麗緊張地攥著裙角，掌心滲出細汗。' },
        { character: '旁白', text: '她試圖屏息、放空，卻總被昨夜的影像干擾：那朵在月色中綻放的夜語花，靜靜浮現眼前，掀起心底難以抑制的波動。' },
        { character: '森森鈴蘭', text: '瑪麗？' },
        { character: '旁白', text: '一聲低喚將她拉回現實。她睜開眼，撞上鈴蘭專注的目光。' },
        { character: '森森鈴蘭', text: '妳還好嗎？' },
        { character: '旁白', text: '鈴蘭的眼神真摯，像是能窺見她心底的漣漪。' },
        { character: '瑪格麗特', text: '我……沒事。' },
        { character: '旁白', text: '瑪麗急忙低下頭，耳尖已泛起燒灼般的熱度。' },
        { character: '旁白', text: '老師並未察覺兩人的小插曲，仍在黑板上書寫。' },
        { character: '旁白', text: '瑪麗卻怎麼也無法平靜，她偷偷側目，見鈴蘭已重新閉眼，神色安詳。' },
        { character: '旁白', text: '那一瞬間，她竟羨慕起對方的從容。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【圖書館】。', choices: [ { text: '好感度上升', nextScene: 'c2_library_noon' } ] }
    ]
},

c2_library_noon: {
    background: 'assets/images/backgrounds/library_night.jpg',
    dialogues: [
        { character: '【場景：圖書館】', text: '午休時分，陽光從高窗灑落，照在書架上一排排厚重典籍。' },
        { character: '旁白', text: '圖書館空曠而寧靜，只能聽見筆尖摩擦紙面的沙沙聲。' },
        { character: '旁白', text: '鈴蘭主動翻出一本古舊的《花語情咒錄》，厚重的封皮上浮雕著淡金的藤蔓。' },
        { character: '森森鈴蘭', text: '妳看，這裡寫著：某些稀有花朵，會隨著人的情感而自發綻放。它們是最純粹的情咒形態。' },
        { character: '旁白', text: '她指著一幅插圖，眼神閃爍著光。' },
        { character: '旁白', text: '瑪麗的手指顫了一下，停在那頁紙上。' },
        { character: '旁白', text: '插圖裡的花，與昨夜見到的夜語花幾乎一模一樣。' },
        { character: '森森鈴蘭', text: '怎麼了？' },
        { character: '旁白', text: '鈴蘭敏銳地察覺異樣。' },
        { character: '瑪格麗特', text: '沒事……只是覺得很漂亮。' },
        { character: '旁白', text: '瑪麗急忙收回手，將翻湧的情緒壓回心底。' },
        { character: '旁白', text: '然而，夜語花的影像卻像藤蔓般纏繞在她腦海。' },
        { character: '旁白', text: '她開始懷疑，那朵花究竟只是幻覺，還是她心境外洩的具象？' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【花園】。', choices: [ { text: '情咒等級上升', nextScene: 'c2_garden_afternoon' } ] }
    ]
},

c2_garden_afternoon: {
    background: 'assets/images/backgrounds/garden.jpg',
    dialogues: [
        { character: '【場景：花園】', text: '午後的陽光傾灑在花園深處，萬花競放，香氣交織。' },
        { character: '旁白', text: '小徑兩側的玫瑰與鈴蘭隨風搖曳，彷彿低聲呢喃。' },
        { character: '旁白', text: '兩人散步至一處隱蔽角落，看見一位蒼老卻神情沉穩的園丁正在修剪枝葉。' },
        { character: '旁白', text: '他動作緩慢，卻帶著一種歲月沉澱的從容。' },
        { character: '園丁', text: '新來的孩子啊，記住，花園裡的花，是學院的鏡子。' },
        { character: '旁白', text: '老園丁抬頭，目光慈和卻深邃' },
        { character: '園丁', text: '若妳們心境動盪，花也會隨之變色。' },
        { character: '旁白', text: '鈴蘭恭敬點頭，語氣誠懇：' },
        { character: '森森鈴蘭', text: '謝謝您的教誨。' },
        { character: '旁白', text: '瑪麗卻怔怔站著，心頭一震。' },
        { character: '旁白', text: '她想開口詢問夜語花的事，卻最終噤聲，她害怕答案會揭穿自己的秘密。' },
        { character: '旁白', text: '老園丁似乎看穿她的猶豫，卻什麼也沒說，只是低頭繼續修剪。' },
        { character: '旁白', text: '花瓣靜靜飄落，像是在無聲地見證。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍房間・夜】。', choices: [ { text: '情咒等級下降', nextScene: 'c2_dorm_night_expanded' } ] }
    ]
},

c2_dorm_night_expanded: {
    background: 'assets/images/backgrounds/school3.jpg',
    dialogues: [
        { character: '【場景：宿舍房間・夜】', text: '夜幕降臨，窗外月光灑進，為房間披上一層銀紗。' },
        { character: '旁白', text: '鈴蘭躺在床上翻著書，神情專注，偶爾卻悄悄瞥向對面。' },
        { character: '旁白', text: '瑪格麗特坐在書桌前，燈光映照在她側臉，勾勒出柔和的弧度。' },
        { character: '旁白', text: '她的手指輕輕停在日記本的封面，卻遲遲沒有落筆。' },
        { character: '旁白', text: '腦中盤旋的，始終是鈴蘭白天望向她時，那種彷彿能看透一切的眼神。' },
        { character: '瑪格麗特（低聲）', text: '……如果有一天妳知道我的秘密，還會願意坐在我身邊嗎？' },
        { character: '旁白', text: '窗外，夜語花再次無聲綻放，幽藍的花瓣在月光下閃爍微光。' },
        { character: '旁白', text: '瑪麗並不知道，對面床上的鈴蘭雖假裝專心讀書，卻早已聽見那聲呢喃。' },
        { character: '旁白', text: '她的指尖停在書頁上，心口泛起一陣難以言喻的悸動。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '【第二章·完】', video: 'assets/videos/transition_ch2_to_ch3.mp4', nextScene: 'c3_dorm_morning' }
    ]
},
        
        // 第三章：微光的試探 — 分場景
c3_dorm_morning: {
    background: 'assets/images/backgrounds/school4.jpg',
    bgm: 'assets/audio/bgm_ch3.mp3',
    dialogues: [
        { character: '【場景：宿舍房間・晨】', text: '開學經過了幾個月，微涼的晨風透過半掩的窗縫鑽進來，輕輕拂過室內的薄紗簾。' },
        { character: '旁白', text: '瑪麗緩緩睜開眼時，視線還停留在夢境的殘影裡——夜空下無聲綻放的夜語花，花瓣宛如星子般散落。' },
        { character: '旁白', text: '她試圖伸手去觸碰，卻在指尖碰到冰冷時，花朵碎裂成無數白光。' },
        { character: '瑪格麗特', text: '「……」' },
        { character: '旁白', text: '她吸了口氣，胸口仍有些悶。' },
        { character: '旁白', text: '額頭上細小的冷汗提醒她，那不只是普通的夢，而是每一晚心底留下的語言化作幻影的延續。' },
        { character: '旁白', text: '床邊放著她的日記本。深綠色的封面，邊角因頻繁翻閱而稍稍磨損。' },
        { character: '旁白', text: '她下意識伸手，將它抱在懷裡，指尖摩挲著紙頁的粗糙質感。' },
        { character: '旁白', text: '打開後，映入眼簾的是昨夜的字跡——有些倉促，甚至潦草，但情感卻真實赤裸。' },
        { character: '旁白', text: '「……如果有一天妳知道我的秘密，還會願意坐在我身邊嗎？」' },
        { character: '旁白', text: '這句話孤單地落在頁面中央，墨跡已乾卻仍顯得沉重。' },
        { character: '旁白', text: '她怔怔盯著那行字，呼吸緩慢起伏。' },
        { character: '旁白', text: '心裡的矛盾如潮水般推擠著：既渴望有人能夠看見，卻又害怕那雙眼睛投來理解的同時，也帶來審判與距離。' },
        { character: '旁白', text: '她抬起視線，對面床上的鈴蘭還在熟睡。' },
        { character: '旁白', text: '清晨的光灑在她的臉龐，睫毛在微風裡微顫，唇角帶著若有若無的弧度。' },
        { character: '旁白', text: '瑪麗盯著那張平和的睡顏，胸口忽然湧起複雜的酸楚。' },
        { character: '旁白', text: '她輕輕闔上日記，把它收回枕頭下。' },
        { character: '瑪格麗特', text: '——這些話，只能留在紙上。' },
        { character: '旁白', text: '然而當鈴蘭翻身時，手背意外碰倒了床邊的水杯，清脆的聲音打破靜謐。' },
        { character: '旁白', text: '瑪麗慌忙上前扶住，卻與她的手掌相觸。' },
        { character: '旁白', text: '那一瞬間，宛如有微光在心口閃爍。' },
        { character: '瑪格麗特', text: '早……早安。' },
        { character: '旁白', text: '瑪麗急忙低下頭，聲音輕得幾乎要被晨風吹散。' },
        { character: '森森鈴蘭（笑意）', text: '嗯，早呀。' },
        { character: '旁白', text: '她的眼神短暫對上自己，瑪麗心口一緊，彷彿那視線已洞悉枕下的秘密。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【餐廳・早】。', choices: [ { text: '繼續', nextScene: 'c3_cafeteria' } ] }
    ]
},

c3_cafeteria: {
    background: 'assets/images/backgrounds/cafeteria.jpg',
    dialogues: [
        { character: '【場景：餐廳・早】', text: '宿舍走廊外已傳來學生的腳步聲，早餐的鐘聲在遠處悠然響起。' },
        { character: '旁白', text: '餐廳內熱氣氤氳，伴隨著麵包與草本茶的香味，學生們聚集在長桌旁，交談聲此起彼落。' },
        { character: '旁白', text: '瑪麗端著餐盤，有些拘謹地在人潮間尋找空位。' },
        { character: '旁白', text: '就在她猶豫之際，鈴蘭從後方輕快地拍了拍她的肩膀。' },
        { character: '森森鈴蘭', text: '這邊，跟我一起吧。' },
        { character: '旁白', text: '坐下後，兩人的餐盤之間冒著淡淡白霧。' },
        { character: '旁白', text: '瑪麗小口啜飲抹茶，舌尖立刻感受到一股微苦，隨後在喉間化開清新的涼意。' },
        { character: '瑪格麗特', text: '這茶……有點像薄荷，但又更柔和。' },
        { character: '旁白', text: '鈴蘭眨了眨眼，隨意地把叉子旋轉在手裡。' },
        { character: '森森鈴蘭', text: '聽說是新生專用的調和茶，可以讓情緒比較穩定。' },
        { character: '旁白', text: '她停頓了一下，視線若有若無地落在瑪麗的臉上' },
        { character: '森森鈴蘭', text: '妳不喜歡嗎？' },
        { character: '瑪格麗特', text: '不，不是……只是沒喝過這樣的味道。' },
        { character: '旁白', text: '瑪麗連忙擺手，指尖不小心碰到杯緣，泛起一點顫抖。' },
        { character: '旁白', text: '鈴蘭卻笑了起來，語氣輕快得像是在談論微不足道的小事。' },
        { character: '森森鈴蘭', text: '早起的時候，總覺得空氣比較乾淨，心情也會安定下來，這茶啊，就像清晨的風一樣吧。' },
        { character: '旁白', text: '她的語調不經意地溫柔，讓瑪麗心頭微顫。' },
        { character: '瑪格麗特', text: '……嗯。' },
        { character: '旁白', text: '餐桌周圍的談笑聲繼續流淌，有人討論昨日的練習，有人比較不同種茶的味道。' },
        { character: '旁白', text: '而在這份喧囂裡，兩人卻彷彿自成一隅，空氣被拉長成一種近乎靜止的平衡。' },
        { character: '森森鈴蘭', text: '瑪麗，妳小時候也喜歡花嗎？還是……妳從來不敢靠近？' },
        { character: '旁白', text: '鈴蘭忽然故意問起她的童年，問題像是隨意拋出的，但語氣卻帶著柔軟的探尋。' },
        { character: '旁白', text: '瑪麗的心猛然一縮，本能想要迴避，但最終還是低聲答道。' },
        { character: '瑪格麗特', text: '小時候……家裡院子有百合，母親說，百合的香味能讓心情沉靜。' },
        { character: '瑪格麗特', text: '可是……我總覺得它們太潔白了，不敢靠得太近。' },
        { character: '旁白', text: '她的聲音隱約顫抖，話尾被餐廳的吵雜掩去。' },
        { character: '旁白', text: '然而鈴蘭只是輕輕點頭，沒有追問，眼神卻多了一層說不清的溫度。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【教室・感應課】。', choices: [ { text: '前往教室', nextScene: 'c3_classroom' } ] }
    ]
},

c3_classroom: {
    background: 'assets/images/backgrounds/classroom.jpg',
    dialogues: [
        { character: '【場景：教室・感應課】', text: '陽光從寬大的窗戶斜斜照進教室，木質地板反射出溫潤的光澤。' },
        { character: '旁白', text: '學生們圍坐成半弧形，教師在中央站著。' },
        { character: '老師', text: '今天繼續進行感應訓練，請嘗試將你內心最強烈的情感意象化，化作光點呈現出來。' },
        { character: '老師', text: '記住，這不只是展示，更是對自己心靈的誠實。' },
        { character: '旁白', text: '空氣忽然緊繃起來。' },
        { character: '旁白', text: '一名學生上前，閉上眼，呼吸逐漸平穩。' },
        { character: '旁白', text: '不久，他掌心浮現出一團柔和的淡黃光點，像晨曦的碎片，教室裡響起低低驚嘆。' },
        { character: '旁白', text: '接下來的幾位學生或多或少都成功，光點的顏色各異，映照出不同的心境。' },
        { character: '旁白', text: '輪到瑪格麗特時，她的腳步僵硬，掌心微微出汗，心臟像要衝破胸口。' },
        { character: '老師', text: '請開始吧。' },
        { character: '旁白', text: '教師的目光嚴肅。' },
        { character: '旁白', text: '她努力閉上眼，試著想像一株花。' },
        { character: '旁白', text: '然而腦海裡閃現的卻是昨夜的夜語花——那過於真切的幻象讓她慌亂。' },
        { character: '旁白', text: '情感翻湧，光點在她掌心短暫閃爍，卻旋即扭曲、破碎，像碎裂的玻璃。' },
        { character: '旁白', text: '周圍響起小聲的竊語，有人低聲笑出來，有人皺眉搖頭。' },
        { character: '瑪格麗特', text: '……' },
        { character: '旁白', text: '就在她幾乎要逃離的時候，鈴蘭不動聲色地湊近，輕聲提醒：' },
        { character: '森森鈴蘭（低聲）', text: '慢一點呼吸，把情緒想成一株花……不必去抓住它，只要讓它在風裡搖曳。' },
        { character: '旁白', text: '這句話像一根細線，把她從崩潰邊緣拉回。' },
        { character: '旁白', text: '瑪麗再次嘗試，掌心浮現出淡淡的藍光，雖然不穩定，但至少沒有立刻崩解。' },
        { character: '老師', text: '很好，已經有了基礎的形態。' },
        { character: '旁白', text: '教師語氣中帶著一絲肯定，但接著又冷冷補上一句：' },
        { character: '老師', text: '記住，若情緒失衡，後果不只是你一個人要承擔。' },
        { character: '旁白', text: '這句話如冷鐵般壓下，瑪麗的指尖再次顫抖。' },
        { character: '旁白', text: '她收回手時，淡藍的光點悄然熄滅，心口的空洞反而更明顯。' },
        { character: '旁白', text: '鈴蘭在旁靜靜看著，沒有出聲，只是將桌上的筆悄悄推到她手邊，像是一種不言語的陪伴。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【課後・教室外】。', choices: [ { text: '繼續', nextScene: 'c3_after_class' } ] }
    ]
},

c3_after_class: {
    background: 'assets/images/backgrounds/hallway.jpg',
    dialogues: [
        { character: '【場景：課後・教室外】', text: '下課鐘聲響起，學生們像潮水般散去。' },
        { character: '旁白', text: '教室裡殘留著粉筆灰的氣味與低語的餘韻。' },
        { character: '旁白', text: '瑪格麗特坐在原位，指尖還停留在剛才那支被鈴蘭推到手邊的筆上。' },
        { character: '旁白', text: '那支筆並不特別，普通的木質筆桿，卻因觸感而帶來一種微妙的溫度。' },
        { character: '旁白', text: '她將它小心放進筆袋，心底卻湧起一股難以言說的酸楚。' },
        { character: '瑪格麗特', text: '……我真的做得很糟吧。' },
        { character: '旁白', text: '聲音低到連自己都幾乎聽不清。' },
        { character: '森森鈴蘭', text: '才不是呢。' },
        { character: '旁白', text: '鈴蘭忽然彎下身，笑意輕快卻藏著堅定' },
        { character: '森森鈴蘭', text: '淡藍的光，其實很漂亮呀！只是妳還不太習慣它而已。' },
        { character: '旁白', text: '那句話像一道縫隙，讓壓抑的陰影中滲入一點光亮。' },
        { character: '旁白', text: '瑪麗心口微顫，卻只是低低應了聲。' },
        { character: '瑪格麗特', text: '……謝謝。' },
        { character: '旁白', text: '兩人一同走出教室，走廊外的陽光正隨著午後傾斜，灑落在地板的反光像波浪一樣延展' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【校園小徑・往圖書館】。', choices: [ { text: '好感度提升', nextScene: 'c3_path_library' } ] }
    ]
},

c3_path_library: {
    background: 'assets/images/backgrounds/campus_path.jpg',
    dialogues: [
        { character: '【場景：校園小徑・往圖書館】', text: '通往圖書館的小徑兩側栽種著修剪整齊的樹籬，風吹過時，樹葉發出低聲的沙響。' },
        { character: '旁白', text: '午後的陽光斜斜灑落，瑪格麗特的腳步卻顯得沉重。' },
        { character: '旁白', text: '腦海中回憶起了剛開學時生活，當時也是跟鈴蘭去了圖書館。' },
        { character: '旁白', text: '厚重典籍攤在桌上，鈴蘭纖細的手指點著書頁，眼神帶著光。' },
        { character: '旁白', text: '那一幅「夜語花」的插圖，至今仍深深烙印在眼底。' },
        { character: '森森鈴蘭', text: '還在想訓練的事？' },
        { character: '旁白', text: '鈴蘭忽然偏過頭，語氣半真半假。' },
        { character: '瑪格麗特', text: '……嗯？沒有啦。' },
        { character: '旁白', text: '瑪麗有些心虛低下頭，裝作整理書袋，卻不自覺緊握著帶在身邊的日記本' },
        { character: '旁白', text: '鈴蘭沒有追問，只是換了個話題：' },
        { character: '森森鈴蘭', text: '聽說圖書館裡，還有「花名冊」的記錄。' },
        { character: '旁白', text: '她語調隨意，像是在閒聊，但眼神卻靜靜落在瑪麗的神情上。' },
        { character: '旁白', text: '心臟猛地一顫。' },
        { character: '旁白', text: '夜語花與花名冊，兩個名字像鐵鍊般同時纏繞上來，讓她幾乎透不過氣。' },
        { character: '瑪格麗特', text: '……花名冊嗎？只是傳聞吧。' },
        { character: '旁白', text: '她努力讓聲音顯得平淡，然而眼角的餘光，仍忍不住追隨鈴蘭的神情。' },
        { character: '旁白', text: '對方只是微微一笑，沒有拆穿，也沒有逼問。' },
        { character: '旁白', text: '走在斑駁光影交錯的小徑上，瑪麗的心卻越來越沉重。' },
        { character: '旁白', text: '她害怕被看見，卻又渴望有人真的看見。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【圖書館・黃昏】。', choices: [ { text: '繼續', nextScene: 'c3_library' } ] }
    ]
},
        
c3_library: {
    background: 'assets/images/backgrounds/library.jpg',
    dialogues: [
        { character: '【場景：圖書館・黃昏】', text: '圖書館的大門靜靜矗立，門框上雕刻著繁複的藤蔓紋路。' },
        { character: '旁白', text: '推門進去時，厚重的木質聲音迴盪在空氣裡，帶來一股與外界隔絕的靜謐感。' },
        { character: '旁白', text: '高聳的書架延伸到昏暗的穹頂，空氣中瀰漫著陳舊紙頁與墨水混合的香氣。' },
        { character: '旁白', text: '昏黃的燈光灑下，像一層靜靜流動的塵埃雨。' },
        { character: '旁白', text: '鈴蘭熟練地翻找著書籍，指尖靈巧地劃過書脊，偶爾停下來抽出一本，隨意翻閱幾頁，又輕輕放回。' },
        { character: '旁白', text: '她的神情專注而輕鬆，卻時不時望向瑪麗，像是怕她迷失在這片浩瀚書海。' },
        { character: '旁白', text: '瑪麗則緊握著一本厚重的《情咒形態論》，紙張泛黃，字跡古樸。' },
        { character: '旁白', text: '她小心翻到中段，一幅插圖吸引了目光。' },
        { character: '旁白', text: '那是一種名為「夜語花」的記載。' },
        { character: '旁白', text: '——花瓣在月光下微微發亮，只有能感應到真實心聲的人才能看見。' },
        { character: '旁白', text: '旁邊附著一行館員的手寫註記：' },
        { character: '館員註記', text: '「夜間自語化花，僅有心聲赤裸者方見。」' },
        { character: '旁白', text: '視線在字句上停留的瞬間，她的手微微發抖，彷彿書頁映照出她的秘密。' },
        { character: '瑪格麗特', text: '……夜語花……' },
        { character: '旁白', text: '她猛地合上書，心跳紊亂，仿佛害怕有人窺見頁面。' },
        { character: '旁白', text: '可偏偏在這時，鈴蘭正走過來，手裡拿著一本關於「情咒感應」的書。' },
        { character: '森森鈴蘭', text: '找到什麼了嗎？' },
        { character: '瑪格麗特', text: '沒……沒有。' },
        { character: '旁白', text: '瑪麗慌忙搖頭，把書本壓在桌下，臉頰的熱度讓她幾乎無法直視對方。' },
        { character: '旁白', text: '鈴蘭似乎沒有追問，只是輕輕把那本書放到她身邊。' },
        { character: '森森鈴蘭', text: '這本也許對妳有幫助，裡面提到一些關於光點的訓練方法。' },
        { character: '旁白', text: '她的眼神閃過一瞬的探究，但隨即收回，轉身去翻閱其他書架。' },
        { character: '旁白', text: '瑪麗盯著她的背影，心底湧起複雜的矛盾。' },
        { character: '旁白', text: '——她想把書頁上的記載給鈴蘭看，卻又害怕真相被揭露。' },
        { character: '旁白', text: '最終，她輕輕撕下那頁註記，將它摺疊得極小，藏進日記本裡。' },
        { character: '旁白', text: '紙張發出的細微摩擦聲，在寂靜的圖書館中顯得格外清晰。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【宿舍房間・夜】。', choices: [ { text: '情咒等級些微上升', nextScene: 'c3_dorm_night' } ] }
    ]
},

c3_dorm_night: {
    background: 'assets/images/backgrounds/dorm_room.jpg',
    dialogues: [
        { character: '【場景：宿舍房間・夜】', text: '回到宿舍時，夜色已經覆蓋校園，窗外的月光灑落，像是一層透明的水銀。' },
        { character: '旁白', text: '鈴蘭洗漱過後，很快就沉沉睡去，呼吸規律，表情安穩。' },
        { character: '旁白', text: '瑪格麗特卻在燈下靜靜展開日記，把那張摺疊的紙條貼在頁面中央。' },
        { character: '旁白', text: '墨色的字跡與她的手寫字並列，像兩段平行卻緊密的心聲。' },
        { character: '旁白', text: '她的筆尖停頓許久，終於在空白處寫下：' },
        { character: '瑪格麗特', text: '「如果有人能看見，會不會……不再孤單？」' },
        { character: '旁白', text: '燈光搖曳，她凝視著這句話，呼吸逐漸放緩。' },
        { character: '旁白', text: '眼皮沉重，但心底卻仍在顫動。' },
        { character: '旁白', text: '窗外的夜空裡，一朵夜語花無聲綻放。' },
        { character: '旁白', text: '花瓣如細小的星光，靜靜墜落，只能被真正聽見她心聲的人看見。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '【第三章·完】', video: 'assets/videos/transition_ch3_to_ch4.mp4', nextScene: 'c4_plaza' }
    ]
},
        
        // 第四章：共鳴咒試煉 — 分場景
c4a_plaza: {
    background: 'assets/images/backgrounds/plaza.jpg',
    bgm: 'assets/audio/bgm_ch4.mp3',
    dialogues: [
        { character: '【場景：學院廣場·清晨】', text: '晨霧尚未散去，廣場中央卻早已人聲雜沓。' },
        { character: '旁白', text: '銀灰色的石磚鋪面映照著微冷的晨光，四周懸掛的旗幟在風中鼓動，帶來一種嚴肅到近乎壓迫的氣息。' },
        { character: '旁白', text: '來自各年級的學生聚集於此，低聲交談，衣袂與書袋摩擦發出的聲響與心跳一樣急促。' },
        { character: '旁白', text: '偶爾能見到幾位遠道而來的家長，他們的神情既緊張又小心，彷彿連呼吸都怕驚擾到將臨的考驗。' },
        { character: '旁白', text: '靠近台階處，有幾名身著深色長袍的政府官員站立，袖口繡著銀色的徽章，表情冷峻。' },
        { character: '旁白', text: '瑪格麗特在隊伍邊緣停下腳步。' },
        { character: '旁白', text: '她的指尖輕輕摩挲著日記本的封皮，卻沒有勇氣打開。' },
        { character: '旁白', text: '心口像是被緊繃的絲線繞緊，一呼一吸都帶著隱痛。' },
        { character: '森森鈴蘭', text: '早起的空氣總是這樣乾淨。' },
        { character: '旁白', text: '身旁傳來柔和的聲音。' },
        { character: '旁白', text: '鈴蘭笑著，語氣輕巧，像是在故意把沉重的氣氛稀釋。' },
        { character: '旁白', text: '她的掌心裡，正捧著一朵小小的瑪格麗特花，花瓣在晨光下顫動，清香淡淡瀰散開。' },
        { character: '森森鈴蘭', text: '送妳。' },
        { character: '旁白', text: '她將花遞過來，眼神裡沒有玩笑，只有靜謐。' },
        { character: '旁白', text: '瑪麗一瞬間愣住。' },
        { character: '旁白', text: '掌心接過花時，感覺到細微的露水滑過指尖，冰涼卻溫柔。' },
        { character: '旁白', text: '心中一個幾乎無聲的念頭再次湧起——' },
        { character: '瑪格麗特（心聲）', text: '如果有一天妳知道我的秘密，還會願意坐在我身邊嗎？' },
        { character: '旁白', text: '那句話在腦海裡迴響不去，像夜裡低語的花，無人知曉卻在暗處綻放。' },
        { character: '旁白', text: '她不敢說出口，只能輕輕把花放進胸前的口袋。' },
        { character: '瑪格麗特', text: '……謝謝妳。' },
        { character: '旁白', text: '聲音微弱，卻真切。' },
        { character: '旁白', text: '鈴蘭只是笑，沒有再追問。' },
        { character: '旁白', text: '她似乎總能恰到好處地停下，不讓瑪格麗特退得太遠。' },
        { character: '旁白', text: '遠處，鐘聲忽然響起，渾厚而莊嚴，像是宣告某種無可迴避的命運。' },
        { character: '旁白', text: '學生們陸續往大講堂移動，腳步聲交疊，像一場未見終曲的樂章。' },
        { character: '旁白', text: '瑪格麗特抬起頭，望著那棟圓頂建築。' },
        { character: '旁白', text: '石牆上雕刻的花紋隱約閃爍著符文的光芒，壓迫感在胸口堆積得更沉。' },
        { character: '旁白', text: '腦海深處，另一段記憶被喚起。' },
        { character: '旁白', text: '——她還記得，童年時小鎮上的檢測日，聽到了這段話。' },
        { character: '神秘長輩', text: '越是壓抑，越是危險，記住，孩子……小心政府。' },
        { character: '旁白', text: '那一刻，她第一次明白「被推薦」意味著什麼。' },
        { character: '旁白', text: '不是榮耀，而是一種無聲的烙印。' },
        { character: '旁白', text: '她微微顫抖，緊緊抱住日記本，像抓住最後的浮木。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【大講堂・試煉說明】', choices: [ { text: '情咒等級因壓抑而下降', nextScene: 'c4a_classroom_brief' } ] }
    ]
},

c4a_classroom_brief: {
    background: 'assets/images/backgrounds/hall_interior.jpg',
    dialogues: [
        { character: '【場景：大講堂·試煉說明】', text: '大講堂的圓頂高聳入雲，內壁鑲嵌著一圈透明水晶，晨光穿透其中，折射出冷冽的光。' },
        { character: '旁白', text: '正中央的祭壇上，擺放著一顆巨大的晶石，紋路宛如花瓣綻開，透著奇異的藍白色光暈。' },
        { character: '旁白', text: '台上站著幾名長者，其中一位身著深藍長袍的院長抬手，示意眾人安靜。' },
        { character: '院長', text: '今日，諸位將接受共鳴咒的試煉。' },
        { character: '旁白', text: '院長的聲音沉穩，像從石壁深處滲出。' },
        { character: '院長', text: '試煉不以技巧取勝，而是以心念為證。' },
        { character: '院長', text: '情感若真切，水晶會為之映照；情感若虛偽，水晶會使之碎裂。' },
        { character: '院長', text: '——記住，這不只是測驗，而是你們與世界之間的契約。' },
        { character: '旁白', text: '學生間傳出一陣壓低的呼吸聲。' },
        { character: '旁白', text: '有人咬緊嘴唇，有人偷偷握緊拳頭，空氣沉重得近乎凝固。' },
        { character: '院長', text: '試煉中，外人只能見你們的形體，但你們將身處自己的心境，那裡沒有謊言。' },
        { character: '旁白', text: '瑪麗聽著，胸口愈發緊繃。' },
        { character: '旁白', text: '她偷偷看向鈴蘭，對方只是一如既往地笑著，仿佛什麼也不怕。' },
        { character: '旁白', text: '但她知道，那笑容背後，必定有誰都不願觸碰的陰影。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【試煉前的準備】', choices: [ { text: '繼續', nextScene: 'c4a_preparation' } ] }
    ]
},

c4a_preparation: {
    background: 'assets/images/backgrounds/waiting_room.jpg',
    dialogues: [
        { character: '【場景：試煉前的準備】', text: '學生們被分批帶到大講堂一側的等候區。' },
        { character: '旁白', text: '空間寬闊卻寂靜，長椅排列得整齊，氣氛比任何考場都要沉重。' },
        { character: '旁白', text: '瑪格麗特坐下，膝上攤著日記本。' },
        { character: '旁白', text: '她沒有翻開，只是用拇指摩挲著那熟悉的封面。' },
        { character: '旁白', text: '頁頁文字像沉睡的聲音，在心底暗暗低喃。' },
        { character: '旁白', text: '忽然，一杯溫熱的抹茶被遞到她手邊。' },
        { character: '森森鈴蘭', text: '喝一口，會好受些。' },
        { character: '旁白', text: '鈴蘭輕聲道，眼裡閃著笑意。' },
        { character: '旁白', text: '茶香帶著淡淡的海苔味，滲入喉間的瞬間，緊繃的心弦微微鬆動。' },
        { character: '瑪格麗特', text: '……謝謝。' },
        { character: '旁白', text: '然而，就在這時，耳邊傳來一個壓低的竊語。' },
        { character: '路人學生', text: '聽說她還沒成功過一次……' },
        { character: '另一名學生', text: '那樣的話，會不會……' },
        { character: '旁白', text: '模糊的話語像毒針般刺入。' },
        { character: '旁白', text: '她努力告訴自己不要在意，卻仍舊止不住手心發冷。' },
        { character: '旁白', text: '鈴蘭側身擋住她的視線，語氣輕快卻堅定：' },
        { character: '森森鈴蘭', text: '別聽他們的，這不是比誰更強，而是比誰更真。' },
        { character: '旁白', text: '那雙眼睛亮得像能把一切陰影融化。' },
        { character: '旁白', text: '瑪格麗特緊緊抱著花與日記，深吸一口氣。' },
        { character: '旁白', text: '她知道，很快，就輪到她了。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【大講堂·水晶祭壇】', choices: [ { text: '情咒等級下降', nextScene: 'c4b_hall' } ] }
    ]
},

c4b_hall: {
    background: 'assets/images/backgrounds/hall_exterior.jpg',
    dialogues: [
        { character: '【場景：大講堂·水晶祭壇】', text: '瑪格麗特的名字被念出時，空氣忽然凝固。' },
        { character: '旁白', text: '她的雙腿像灌了鉛，卻仍在眾目注視下，一步步走向祭壇中央。' },
        { character: '旁白', text: '那顆巨大的晶石靜靜矗立，宛如一朵未綻的透明之花。' },
        { character: '旁白', text: '冰涼的光從晶體深處散開，照得她心臟一顫。' },
        { character: '長者', text: '將手放上去。' },
        { character: '旁白', text: '監考長者的聲音沉穩，卻不容拒絕。' },
        { character: '旁白', text: '瑪麗深吸一口氣，把日記本交給侍立的助手，然後抬起顫抖的手，輕觸水晶。' },
        { character: '旁白', text: '——瞬間，世界傾斜。' },
        { character: '旁白', text: '腳下的石磚消失，她被光與黑交織的洪流吞沒。' },
        { character: '旁白', text: '四周沒有邊界，只有無盡漂浮的紙頁，宛如天空中墜落的羽毛。' },
        { character: '旁白', text: '那些紙頁一張張展開，化為信箋，墨跡清晰，筆跡正是她熟悉的字。' },
        { character: '旁白', text: '她的內心，被赤裸地翻開。' },
        { character: '——', text: '' },
        { character: '旁白', text: '即將前往【內心世界·千封信】', choices: [ { text: '情咒等級下降', nextScene: 'c4b_inner_letters' } ] }
    ]
},

// =====================
// 內心世界：千封信
// =====================
c4b_inner_letters: {
    background: 'assets/images/backgrounds/inner_world.jpg',
    dialogues: [
        { character: '【場景：內心世界】', text: '第一封信，紙張仍帶著未乾的墨香。' },
        { character: '信件一', text: '「親愛的自己，今天我又看見了她。」' },
        { character: '信件一', text: '「她站在校門口，陽光落在她的髮上，像在閃爍。」' },
        { character: '信件一', text: '「……我沒有打招呼，只是從遠處看著。」' },
        { character: '旁白', text: '字跡拘謹，像剛學會告白的孩子。' },
        { character: '旁白', text: '紙頁在光中燃起，化作另一封。' },
        { character: '旁白', text: '第二封信。' },
        { character: '信件二', text: '「她笑的時候，好像連空氣都跟著亮了。」' },
        { character: '信件二', text: '「可是，我的聲音卻卡在喉嚨裡，一個字都不敢說。」' },
        { character: '信件二', text: '「……要是她知道我在想什麼，會不會覺得可笑呢？」' },
        { character: '旁白', text: '聲音在內心世界迴盪，像從四面八方傳來的低語。' },
        { character: '旁白', text: '第三封信，筆跡顫抖。' },
        { character: '信件三', text: '「今天她遞給我一枝筆。」' },
        { character: '信件三', text: '「只是隨手的動作，可是我的手指卻發熱到發抖。」' },
        { character: '信件三', text: '「……我假裝若無其事，可是心裡卻像要炸開。」' },
        { character: '旁白', text: '紙頁如雪落下，堆滿她的腳邊。' },
        { character: '旁白', text: '每一張都在提醒：她曾經無數次，把未能說出口的情感，藏進文字。' },
        { character: '旁白', text: '第四封信。' },
        { character: '信件四', text: '「我想靠近她，卻害怕自己太過明顯。」' },
        { character: '信件四', text: '「……我只能在夜裡，把話對星空說。」' },
        { character: '信件四', text: '「星星聽得懂嗎？會不會，有一天，她能看見那些花？」' },
        { character: '旁白', text: '字句間滲著無聲的渴望。' },
        { character: '旁白', text: '在信的背面，夜語花的淡影綻放，藍白色的光緩慢舒展。' },
        { character: '旁白', text: '第五封信。' },
        { character: '旁白', text: '字跡斷裂，像在顫抖中寫下。' },
        { character: '信件五', text: '「如果有一天，她知道我的秘密……還會願意坐在我身邊嗎？」' },
        { character: '旁白', text: '那句話再次出現，比任何時候都更清晰，像利刃般割開胸口。' },
        { character: '旁白', text: '瑪麗跪倒在信箋的堆疊裡，指尖顫抖。' },
        { character: '旁白', text: '這些文字，本該永遠只存在於日記，怎麼能如此赤裸地曝露在光裡？' },
        { character: '旁白', text: '她緊緊抱著自己，淚水從臉頰滑落。' },
        { character: '旁白', text: '第六封信浮現。' },
        { character: '信件六', text: '「有時候，我甚至希望她能聽見。」' },
        { character: '信件六', text: '「哪怕只是一瞬間。」' },
        { character: '信件六', text: '「……因為我快要被這份沉默淹沒了。」' },
        { character: '旁白', text: '信紙在光裡顫抖，彷彿隨時要碎裂。' },
        { character: '旁白', text: '大講堂裡，學生與教師只能看見瑪格麗特立在水晶前。' },
        { character: '旁白', text: '她的雙肩顫抖，臉上淚水淌落，像在與看不見的風暴搏鬥。' },
        { character: '旁白', text: '有人竊竊私語：「她……是不是失控了？」' },
        { character: '旁白', text: '也有人緊張地捂住嘴。' },
        { character: '旁白', text: '然而，鈴蘭忽然站起，眼神堅定。' },
        { character: '旁白', text: '她沒有徵求任何人的允許，直接走上台階，伸手觸向水晶。' },
        { character: '旁白', text: '守在一旁的考官正欲阻止，但晶石忽然綻放耀眼光芒，竟自動接納了她的碰觸。' },
        { character: '旁白', text: '全場瞬間安靜。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【內心世界·雙人交會】', choices: [ { text: '情咒等級產生裂痕', nextScene: 'c4b_inner_meeting' } ] }
    ]
},

// =====================
// 內心世界：雙人交會
// =====================
c4b_inner_meeting: {
    background: 'assets/images/backgrounds/inner_world.jpg',
    dialogues: [
        { character: '【場景：內心世界】', text: '瑪格麗特在信箋海洋中蜷縮，聽見紙頁翻動的聲音逐漸靠近。' },
        { character: '旁白', text: '她抬起頭，驚愕地看見——鈴蘭站在她面前。' },
        { character: '旁白', text: '光影映在對方的眼裡，那雙眼正靜靜閱讀漂浮的信箋。' },
        { character: '旁白', text: '從驚訝，到沉默，再到某種深不可測的柔軟。' },
        { character: '瑪格麗特', text: '……妳怎麼……' },
        { character: '旁白', text: '瑪麗聲音顫抖，眼淚模糊了視線。' },
        { character: '旁白', text: '信上的字跡抖動著，像要逃避，但她卻一字一句讀完。' },
        { character: '森森鈴蘭', text: '我一直……都聽得見。' },
        { character: '旁白', text: '聲音極輕，卻穿透所有嘈雜，落在心底最深處。' },
        { character: '旁白', text: '那一刻，所有的信箋像被風驅動，紛紛飛舞。' },
        { character: '旁白', text: '夜語花的幻影在空中綻放，藍白光雨灑落，將兩人的身影包裹。' },
        { character: '旁白', text: '瑪麗呆呆望著她，喉嚨哽住，什麼都說不出口。' },
        { character: '旁白', text: '只是眼淚止不住地落下，像回應，又像是無聲的告白。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '即將前往【內心世界·信箋海洋】', choices: [ { text: '情咒等級有如玻璃般碎開，一股氣息衝天而起', nextScene: 'c4c_inner_letters' } ] }
    ]
},

// =====================
// 內心世界：信箋海洋（4C）
// =====================
c4c_inner_letters: {
    background: 'assets/images/backgrounds/inner_world_flowers.jpg',
    dialogues: [
        { character: '【場景：內心世界】', text: '紙頁仍在漫天飛舞。' },
        { character: '旁白', text: '數不清的信件，像潮水般拍擊而來，每一封都帶著瑪格麗特從未敢說出口的心音。' },
        { character: '瑪格麗特（心聲）', text: '「喜歡……」' },
        { character: '瑪格麗特（心聲）', text: '「不能……」' },
        { character: '瑪格麗特（心聲）', text: '「如果失去她……」' },
        { character: '旁白', text: '這些斷裂的字句交織成回聲，繞在耳際，像要把她淹沒。' },
        { character: '旁白', text: '她緊緊抱著自己，身子顫抖，呼吸急促到胸口發疼。' },
        { character: '旁白', text: '然而，一雙手卻從亂流中伸來，牢牢握住她的指尖。' },
        { character: '旁白', text: '瑪麗猛地抬頭。' },
        { character: '旁白', text: '鈴蘭正站在信箋的暴風中央，黑髮隨風飛舞，眼神卻沉靜無比。' },
        { character: '森森鈴蘭', text: '……妳不需要再躲了。' },
        { character: '旁白', text: '隨著她的聲音，信箋忽然開始閃爍光芒。' },
        { character: '旁白', text: '紙頁一張張破碎，化作細小的光點，墜落在腳下。' },
        { character: '旁白', text: '瑪格麗特愣住，只見那些光點化為花苞，在漆黑大地上綻放。' },
        { character: '旁白', text: '一瞬之間，滿地皆是夜語花。' },
        { character: '旁白', text: '藍白色的花海無邊無際，光像潮水般洶湧，將兩人托舉在花原之心。' },
        { character: '旁白', text: '她瞠目結舌，喉嚨緊縮。' },
        { character: '旁白', text: '那些花——是她的秘密，是她的渴望，是她字裡行間的全部真相。' },
        { character: '瑪格麗特', text: '不……不要看！' },
        { character: '旁白', text: '她幾乎哭喊，想要衝過去摧毀那些花。' },
        { character: '旁白', text: '但鈴蘭卻緊緊拉住她，把她抱進懷裡。' },
        { character: '森森鈴蘭', text: '瑪格麗特。' },
        { character: '旁白', text: '鈴蘭的聲音貼近耳畔，帶著前所未有的溫柔。' },
        { character: '森森鈴蘭', text: '這些花……不醜，也不可怕。它們很美。' },
        { character: '瑪格麗特', text: '可是——' },
        { character: '森森鈴蘭', text: '沒有可是。' },
        { character: '旁白', text: '鈴蘭的手握得更緊' },
        { character: '森森鈴蘭', text: '因為那就是妳，是我從一開始就一直，看見的妳。' },
        { character: '旁白', text: '瑪格麗特全身一震。' },
        { character: '旁白', text: '眼淚再也止不住，瘋狂滑落。' },
        { character: '瑪格麗特', text: '我……我好害怕……' },
        { character: '瑪格麗特', text: '如果妳知道了這一切，就再也不會靠近我……' },
        { character: '旁白', text: '瑪麗哽咽著' },
        { character: '森森鈴蘭', text: '笨蛋。' },
        { character: '旁白', text: '鈴蘭輕笑，額頭貼在她髮間。' },
        { character: '森森鈴蘭', text: '我早就知道了啊。' },
        { character: '旁白', text: '夜語花同時顫動，像聽見了那句話，綻放出更盛的光。' },
        { character: '旁白', text: '花瓣紛紛飄落，化作無數晶瑩的字句，在空中流轉。' },
        { character: '花語', text: '「喜歡妳。」' },
        { character: '花語', text: '「謝謝妳。」' },
        { character: '花語', text: '「不要離開。」' },
        { character: '旁白', text: '那些話並不是單純的文字，而是瑪格麗特深藏心底的願望，被花語替她說出來。' },
        { character: '旁白', text: '她抖著肩膀，想要否認，卻只能無力地埋進鈴蘭懷裡。' },
        { character: '旁白', text: '那一刻，她第一次感覺到——即使不開口，也有人願意接住她所有的顫抖。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '外界·大講堂。' },
        { character: '旁白', text: '水晶忽然閃耀至極，光如雨幕傾瀉，把整個大講堂映照成銀藍色。' },
        { character: '旁白', text: '所有學生驚訝地仰望，沒有人能靠近。' },
        { character: '旁白', text: '在那光裡，兩道身影模糊卻清晰——她們並肩而立，花雨繞身。' },
        { character: '旁白', text: '監考長者低聲喃語：' },
        { character: '長者', text: '……竟能雙心共鳴？' },
        { character: '旁白', text: '這是多年來，從未有過的奇景。' },
        { character: '旁白', text: '終於，光芒逐漸收斂。' },
        { character: '旁白', text: '夜語花一朵朵消散，重新化為紙箋，輕輕合攏。' },
        { character: '旁白', text: '瑪麗與鈴蘭緩緩睜眼，仍站在水晶前。' },
        { character: '旁白', text: '她的臉頰濕潤，卻不再顫抖。' },
        { character: '旁白', text: '鈴蘭則默默牽著她的手，沒有放開。' },
        { character: '旁白', text: '大講堂死一般的寂靜，所有人屏住呼吸。' },
        { character: '旁白', text: '試煉，落幕。' },
        { character: '旁白', text: '——' },
        { character: '旁白', text: '【第四章·完】', video: 'assets/videos/transition_ch3_to_ch4.mp4', nextScene: 'c5_gate' }
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
        '森森鈴蘭（低聲）': {
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
        '男老師': {
            image: 'assets/images/characters/librarian2.png',
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

















