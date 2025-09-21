// 圖片資源預設配置
const ImageAssets = {
    // 背景圖片
    backgrounds: [
        {
            id: 'bg1',
            path: 'assets/images/backgrounds/bg1.gif',
            description: '開始場景背景'
        },
        {
            id: 'bg2',
            path: 'assets/images/backgrounds/bg2.jpg',
            description: '城市場景背景'
        },
        {
            id: 'bg3',
            path: 'assets/images/backgrounds/bg3.jpg',
            description: '森林場景背景'
        }
    ],
    
    // 角色圖片
    characters: [
        {
            id: 'char1',
            path: 'assets/images/characters/char1.png',
            description: '角色1'
        },
        {
            id: 'char2',
            path: 'assets/images/characters/char2.png',
            description: '角色2'
        },
        {
            id: 'char3',
            path: 'assets/images/characters/char3.png',
            description: '角色3'
        },
        {
            id: 'char4',
            path: 'assets/images/characters/char4.png',
            description: '角色4'
        }
    ],
    
    // 視頻資源
    videos: [
        {
            id: 'video1',
            path: 'assets/videos/video1.mp4',
            description: '商店場景視頻'
        },
        {
            id: 'video2',
            path: 'assets/videos/video2.mp4',
            description: '公園場景視頻'
        }
    ],
    
    // 預加載所有圖片
    preloadImages: function() {
        // 預加載背景
        this.backgrounds.forEach(bg => {
            const img = new Image();
            img.src = bg.path;
        });
        
        // 預加載角色
        this.characters.forEach(char => {
            const img = new Image();
            img.src = char.path;
        });
    }

};
