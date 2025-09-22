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
        
        // 第一章：花園日常 — 起點（沿用 city 這個 key）
        city: {
            background: 'assets/images/backgrounds/bg2.jpg',
            bgm: 'assets/audio/city_bgm.mp3',
            dialogues: [
                {
                    character: '旁白',
                    text: '【場景：靜語花園學院大門】黃昏的陽光斜斜灑落，校園被花草香氣包圍。風鈴聲隨微風響起，帶來不真實的安寧。'
                },
                {
                    character: '瑪格麗特（心聲）',
                    text: '……終於到了。靜語花園學院。'
                },
                {
                    character: '旁白',
                    text: '她抱著一本厚厚的日記本，指尖微微顫抖。'
                },
                {
                    character: '瑪格麗特（心聲）',
                    text: '這裡，據說聚集了全大陸最敏感的情咒者……我真的能融入這裡嗎？'
                },
                {
                    character: '旁白',
                    text: '校門內，學生們三三兩兩走過，笑聲與談話聲交織。她卻覺得格外孤單。'
                },
                {
                    character: '旁白',
                    text: '——'
                },
                {
                    character: '旁白',
                    text: '【場景：校園小徑】'
                },
                {
                    character: '森森鈴蘭',
                    text: '嘿！妳是新生吧？'
                },
                {
                    character: '旁白',
                    text: '瑪格麗特嚇得停下腳步，轉頭，看見一個帶著笑意的女孩正揮手。陽光落在她的髮絲上，耀眼得像光本身。'
                },
                {
                    character: '瑪格麗特',
                    text: '啊……是的。我、我是……瑪格麗特·諾爾絲。'
                },
                {
                    character: '森森鈴蘭',
                    text: '瑪格麗特？名字很好聽。妳要去哪裡？宿舍？還是食堂？'
                },
                {
                    character: '瑪格麗特（有些慌亂）',
                    text: '宿舍……我第一次來，不太清楚……'
                },
                {
                    character: '森森鈴蘭（笑）',
                    text: '那正好，我帶妳走吧！反正我也要回去。'
                },
                {
                    character: '旁白',
                    text: '她邁開腳步，走得很自然，像是習慣帶領別人。瑪格麗特猶豫了一下，還是跟了上去。'
                },
                {
                    character: '瑪格麗特（心聲）',
                    text: '她好像……和其他人不一樣。不會用那種打量的眼神看我……'
                },
                {
                    character: '旁白',
                    text: '——',
                },
                {
                    character: '旁白',
                    text: '【場景：宿舍走廊】',
                },
                {
                    character: '森森鈴蘭',
                    text: '所以，妳是轉學生嗎？'
                },
                {
                    character: '瑪格麗特（點頭）',
                    text: '嗯，之前一直在小鎮的普通學堂……因為情咒敏感度的檢測結果，被推薦來這裡。'
                },
                {
                    character: '森森鈴蘭（挑眉）',
                    text: '喔～原來妳也是「高敏感組」啊，難怪老師們會注意到妳。'
                },
                {
                    character: '瑪格麗特（低聲）',
                    text: '可我……從來沒有真正成功使用過魔法。'
                },
                {
                    character: '森森鈴蘭（笑）',
                    text: '那沒什麼啊。會不會用不重要，重要的是……妳能感覺到，對吧？'
                },
                {
                    character: '瑪格麗特（驚訝）',
                    text: '……感覺？'
                },
                {
                    character: '森森鈴蘭（轉過頭）',
                    text: '嗯，情咒不是用來炫耀的東西。妳會發現，它更多時候……只是心在說話的方式。'
                },
                {
                    character: '旁白',
                    text: '二人被臨時分配去清理古老溫室……夜語花的奇蹟即將發生。'
                },
                {
                    character: '旁白',
                    text: '【場景：古老溫室】微塵浮動，枯枝沉睡。當她們心念相連時，微光自花蕊漫出——',
                    video: 'assets/videos/video1.mp4',
                    nextScene: 'c2_library_night'
                }
            ]
        },
        
        // 第二章：禁忌花名冊 — 圖書館·深夜（未解鎖分支 forest -> 鎖定提示）
        forest: {
            background: 'assets/images/backgrounds/bg3.jpg',
            bgm: 'assets/audio/forest_bgm.mp3',
            dialogues: [
                {
                    character: '旁白',
                    text: '此路線尚未解鎖，請先從「瑪格麗特·諾爾絲」開始。'
                },
                {
                    character: '旁白',
                    text: '將返回到開始畫面。'
                },
                {
                    character: '旁白',
                    text: '——',
                },
                {
                    character: '旁白',
                    text: '返回開始。',
                    video: 'assets/videos/video2.mp4',
                    nextScene: 'start'
                }
            ]
        },
        
        // 第二章：圖書館·深夜
        c2_library_night: {
            background: 'assets/images/backgrounds/bg1.jpg',
            bgm: 'assets/audio/start_bgm.mp3',
            dialogues: [
                {
                    character: '旁白',
                    text: '【場景：學院圖書館·深夜】微弱的燈光，紙張與墨水的味道瀰漫。瑪格麗特偷偷留到很晚，翻閱古老筆記。'
                },
                {
                    character: '瑪格麗特（心聲）',
                    text: '……這裡寫著，夜語花是最純粹的情感化形。只有在心聲無法承受時才會綻放。'
                },
                {
                    character: '旁白',
                    text: '她緊緊抱著日記本，眼神閃爍不安。'
                },
                {
                    character: '旁白',
                    text: '——'
                },
                {
                    character: '旁白',
                    text: '【場景：圖書館地窖入口】忽然，她在半掩的門後聽見談話聲。'
                },
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
                    text: '教師們離開後，瑪格麗特忍不住上前，發現桌上一本厚重黑皮冊子——《花名冊》。'
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
                {
                    character: '旁白',
                    text: '——'
                },
                {
                    character: '旁白',
                    text: '【場景：第二天·花園長椅】陽光燦爛，學生喧鬧。瑪格麗特卻渾身僵硬。'
                },
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
                {
                    character: '旁白',
                    text: '——'
                },
                {
                    character: '旁白',
                    text: '【場景：宿舍夜晚】瑪格麗特輾轉反側，最終忍不住起身。夜空安靜無聲。'
                },
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
                {
                    character: '旁白',
                    text: '她的眼神第一次沒有笑意，反而深不見底。'
                },
                {
                    character: '旁白',
                    text: '【第二章·完】',
                    choices: [
                        { text: '前往第三章', nextScene: 'c3_echo' },
                        { text: '返回開始', nextScene: 'start' },
                        { text: '重看第二章結尾片段', nextScene: 'c2_outro' }
                    ]
                }
            ]
        },
        
        // 第二章結尾過場影片（可選）
        c2_outro: {
            background: 'assets/images/backgrounds/bg1.jpg',
            bgm: 'assets/audio/start_bgm.mp3',
            dialogues: [
                {
                    character: '旁白',
                    text: '夜色如潮，花影浮動。',
                    video: 'assets/videos/video2.mp4',
                    nextScene: 'start'
                }
            ]
        }
        ,
        
        // 第三章：情咒的迴響
        c3_echo: {
            background: 'assets/images/backgrounds/bg2.jpg',
            bgm: 'assets/audio/city_bgm.mp3',
            dialogues: [
                { character: '旁白', text: '【場景：清晨·宿舍】陽光越過窗棂，薄霧未散。鳥鳴在陌生的學院裡格外清晰。' },
                { character: '旁白', text: '瑪格麗特坐起，凝視同寢的森森鈴蘭。她睡得安穩，眉間卻帶著若隱若現的緊繃。' },
                { character: '旁白', text: '她拉近日記本，細細寫下心底最輕的憂慮。' },
                { character: '瑪格麗特（心聲）', text: '我不懂她。她笑得這麼輕快，為什麼我卻覺得，她在笑容之下，藏著比我更沉重的東西？' },
                { character: '旁白', text: '她停筆，合上本子，像是怕打擾沉睡的同伴。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：學院餐廳】早餐時間喧鬧，刀叉與陶瓷相碰的聲音此起彼伏。' },
                { character: '森森鈴蘭', text: '這裡！' },
                { character: '旁白', text: '她遞來一杯熱騰騰的花草茶——玫瑰果茶，帶著安定心情的回甘。' },
                { character: '鈴蘭', text: '妳昨天是不是又看書看到很晚？' },
                { character: '瑪格麗特（支吾）', text: '……嗯，有一點。' },
                { character: '鈴蘭（故意眯眼）', text: '妳小心點喔，圖書館的老書不全是能隨便碰的。有些東西，會咬人。' },
                { character: '旁白', text: '瑪格麗特心中一震，卻把到嘴邊的話吞了回去。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：課堂·情咒基礎】老師的聲音低沉而緩慢：情咒不是力量，而是映照。' },
                { character: '老師', text: '真正的危險，不是咒本身，而是人心。' },
                { character: '旁白', text: '瑪格麗特專注地聽著，幾乎每一個字都重重敲擊心底。鈴蘭則顯得心神不寧。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：操場·放學後】眾人練習，光與霧交錯。' },
                { character: '旁白', text: '瑪格麗特的指尖只閃過微弱光點，隨即熄滅。' },
                { character: '森森鈴蘭（笑）', text: '別急。情咒不是用「想」出來的，它只是……妳心底的回聲。' },
                { character: '旁白', text: '她的眼神帶著鼓勵，卻掩不住一縷陰影。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：夜晚·宿舍屋頂】星空與月光覆頂。' },
                { character: '瑪格麗特（心聲）', text: '我開始明白，情咒是心的映照。可是——如果心底藏著不該有的東西，會不會連花朵也因此扭曲？' },
                { character: '旁白', text: '夜語花的光在她指尖浮現，比以往更清晰。遠處的鈴蘭，眼神裡閃過一絲痛苦。' },
                { character: '旁白', text: '【第三章·完】', choices: [ { text: '前往第四章', nextScene: 'c4_trial' } ] }
            ]
        },
        
        // 第四章：共鳴咒試煉
        c4_trial: {
            background: 'assets/images/backgrounds/bg2.jpg',
            bgm: 'assets/audio/city_bgm.mp3',
            dialogues: [
                { character: '旁白', text: '【場景：清晨·學院廣場】石磚在露水中發光。鐘樓長鳴，空氣裡迴盪著壓抑。' },
                { character: '旁白', text: '每個人手裡都有封印的試煉名單。瑪格麗特看見自己的名字，也看見了——森森鈴蘭。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：課堂·試煉前說明】' },
                { character: '老師', text: '共鳴咒試煉，不是戰鬥，而是揭示。它讓你們面對最深的心念。試煉不會說謊。' },
                { character: '旁白', text: '壓抑蔓延。瑪格麗特沉默，心跳漸快；鈴蘭的視線停在她身上，卻又裝作若無其事。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：傍晚·學院花園】夕陽將花園渲染成橘紅。' },
                { character: '旁白', text: '鈴蘭把白色百合放在她手心：聽說百合能驅散惡夢。明天，妳會需要它。' },
                { character: '瑪格麗特', text: '……妳不害怕嗎？' },
                { character: '森森鈴蘭', text: '害怕啊。不過，與其害怕試煉，不如害怕自己連正視都不敢。' },
                { character: '旁白', text: '她緊握百合，卻無言。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：夜晚·宿舍屋頂】二人無言並肩，遠望星空。' },
                { character: '旁白', text: '她聽見自己的心跳，強烈到像要震碎胸腔。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：試煉之日·大禮堂】高聳圓頂、冷冽石牆，符文環繞。' },
                { character: '旁白', text: '當她的名字被唸出，她幾乎站不穩。她觸碰水晶，黑暗如潮——' },
                { character: '旁白', text: '【內心世界】散落的信紙鋪滿地面，皆是從未寄出的字句。' },
                { character: '旁白', text: '鈴蘭拾起那些信紙，默讀。她想阻止，卻無法靠近。' },
                { character: '旁白', text: '【試煉水晶外】眾人只見她淚流滿面。鈴蘭伸手，竟闖入了她的心境。' },
                { character: '旁白', text: '【內心世界·交會】信紙如雪飛舞，終化作夜語花。' },
                { character: '森森鈴蘭', text: '妳知道嗎……我一直都聽得見。' },
                { character: '旁白', text: '【第四章·完】', choices: [ { text: '前往第五章', nextScene: 'c5_finale' } ] }
            ]
        },
        
        // 第五章：無聲之花（含雙結局）
        c5_finale: {
            background: 'assets/images/backgrounds/bg3.jpg',
            bgm: 'assets/audio/forest_bgm.mp3',
            dialogues: [
                { character: '旁白', text: '【場景：黎明·學院邊界】濃霧覆蓋森林，符文在空氣中微光閃爍。' },
                { character: '旁白', text: '幾名學生趁守衛換班悄然逃離。瑪格麗特與鈴蘭並肩而行，誰也沒有先開口。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：森林小徑】露水自枝葉滴落。鈴蘭背影挺直，步伐堅定而孤絕。' },
                { character: '瑪格麗特', text: '……妳真的不後悔嗎？' },
                { character: '旁白', text: '她望向霧中的村落燈火：' },
                { character: '森森鈴蘭', text: '後悔什麼？我們都只是想活下去。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：夜晚·廢棄教堂】彩窗殘缺，灰塵覆椅。' },
                { character: '瑪格麗特', text: '如果他們找到我們怎麼辦？' },
                { character: '旁白', text: '她在講壇前指尖劃過破損木雕，像在告別。' },
                { character: '森森鈴蘭', text: '其實，我已經決定好了。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：分岔口·雨夜】暴雨傾盆，林道泥濘。' },
                { character: '森森鈴蘭', text: '妳走吧，往北，還有能容身的地方。' },
                { character: '瑪格麗特', text: '不……我們不是說好要一起——' },
                { character: '森森鈴蘭', text: '我不能跟妳一起走。他們給了我選擇——只要我留下，成為研究樣本，就能保妳自由。' },
                { character: '旁白', text: '她衝上前握住她的手，卻終被一步步推向北方道路。' },
                { character: '森森鈴蘭', text: '妳要活下去。替我記住——我存在過。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：雨中分離】背影消失在雨幕。夜語花在掌心綻放，光芒如最後的回應。' },
                { character: '旁白', text: '——' },
                { character: '旁白', text: '【場景：數年後·無聲之園】一片新生的花園收容無法壓抑情咒的孩子們。' },
                { character: '旁白', text: '瑪格麗特身姿挺直，溫柔地教導新來的孩子與情感共處。' },
                { character: '旁白', text: '某日，一封無署名信送來——字跡熟悉。' },
                { character: '信件', text: '我曾在妳的夜語裡，看見整個世界。謝謝妳，讓我明白什麼是「愛」。' },
                { character: '旁白', text: '她屏住呼吸，指尖顫抖。' },
                { character: '旁白', text: '—— 請選擇結局 ——' },
                { character: '旁白', text: '選擇後會播放片段並返回開始。' },
                { character: '旁白', text: '結局選擇：', choices: [ { text: 'A 結局：尋找', nextScene: 'c5_endA' }, { text: 'B 結局：傳遞', nextScene: 'c5_endB' } ] }
            ]
        },
        
        // 結局A：尋找
        c5_endA: {
            background: 'assets/images/backgrounds/bg5.jpg',
            bgm: 'assets/audio/forest_bgm.mp3',
            dialogues: [
                { character: '旁白', text: '她合上信，抬頭望向群山：如果妳還在……我一定會找到妳。' },
                { character: '旁白', text: '她踏上旅途。', video: 'assets/videos/video1.mp4', nextScene: 'start' }
            ]
        },
        
        // 結局B：傳遞
        c5_endB: {
            background: 'assets/images/backgrounds/bg4.jpg',
            bgm: 'assets/audio/start_bgm.mp3',
            dialogues: [
                { character: '旁白', text: '她將信折好，放入夜語花的花心：就讓孩子們，替我把情感傳遞下去吧。' },
                { character: '旁白', text: '風起，花瓣飛舞。', video: 'assets/videos/video2.mp4', nextScene: 'start' }
            ]
        }
    },
    
    // 角色定義
    characters: {
        '瑪格麗特': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（心聲）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（有些慌亂）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（點頭）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（低聲）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（驚訝）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（試探）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（遲疑）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
        },
        '瑪格麗特（震驚·低聲）': {
            image: 'assets/images/characters/margaret.png',
            position: '30%'
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
