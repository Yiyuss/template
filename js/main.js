// 遊戲入口
document.addEventListener('DOMContentLoaded', () => {
    // 初始化遊戲
    Game.init();
    
    // 綁定開始遊戲按鈕
    document.getElementById('start-game-button').addEventListener('click', () => {
        document.getElementById('start-screen').style.display = 'none';
        Game.startGame();
    });
});

// 遊戲核心邏輯
const Game = {
    currentScene: 'start',
    currentDialogue: 0,
    
    init: function() {
        Transitions.init();
        AudioManager.init();
        
        document.getElementById('dialogue-box').addEventListener('click', this.nextDialogue.bind(this));
    },
    
    startGame: function() {
        this.currentScene = 'start';
        this.currentDialogue = 0;
        this.loadScene(this.currentScene);
        
        if (Story.defaultBgm) {
            AudioManager.playBgm(Story.defaultBgm);
        }
    },
    
    loadScene: function(sceneName) {
        const scene = Story.scenes[sceneName];
        if (!scene) return;
        
        Transitions.fadeToBlack(() => {
            document.getElementById('background-layer').style.backgroundImage = `url('${scene.background}')`;
            document.getElementById('character-layer').innerHTML = '';
            
            this.currentScene = sceneName;
            this.currentDialogue = 0;
            
            if (scene.bgm) {
                AudioManager.stopBgm();
                AudioManager.playBgm(scene.bgm);
            }
            
            this.displayCurrentDialogue();
        });
    },
    
    displayCurrentDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        const dialogue = scene.dialogues[this.currentDialogue];
        if (!dialogue) return;
        
        document.getElementById('character-name').textContent = dialogue.character;
        document.getElementById('dialogue-text').textContent = dialogue.text;
        
        if (dialogue.character && dialogue.character !== '') {
            this.showCharacter(dialogue.character);
        }
        
        if (dialogue.choices) {
            this.showChoices(dialogue.choices);
        } else {
            document.getElementById('choice-container').style.display = 'none';
        }
        
        if (dialogue.video) {
            AudioManager.pauseBgm();
            this.playVideo(dialogue.video, dialogue.nextScene);
        }
    },
    
    showCharacter: function(characterName) {
        const characterImage = Story.getCharacterImage(characterName);
        const position = Story.getCharacterPosition(characterName);
        
        document.getElementById('character-layer').innerHTML = '';
        
        if (characterImage) {
            const characterElement = document.createElement('img');
            characterElement.src = characterImage;
            characterElement.className = 'character';
            characterElement.style.left = position;
            document.getElementById('character-layer').appendChild(characterElement);
        }
    },
    
    showChoices: function(choices) {
        const choiceContainer = document.getElementById('choice-container');
        choiceContainer.innerHTML = '';
        
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            
            button.addEventListener('click', () => {
                this.loadScene(choice.nextScene);
                choiceContainer.style.display = 'none';
            });
            
            choiceContainer.appendChild(button);
        });
        
        choiceContainer.style.display = 'block';
    },
    
    playVideo: function(videoSrc, nextScene) {
        const videoPlayer = document.getElementById('video-player');
        videoPlayer.src = videoSrc;
        videoPlayer.style.display = 'block';
        
        AudioManager.stopBgm();
        
        videoPlayer.onended = () => {
            videoPlayer.style.display = 'none';
            
            if (nextScene) {
                this.loadScene(nextScene);
            } else {
                const currentScene = Story.scenes[this.currentScene];
                if (currentScene.bgm) {
                    AudioManager.playBgm(currentScene.bgm);
                }
            }
        };
        
        videoPlayer.play();
    },
    
    nextDialogue: function() {
        const scene = Story.scenes[this.currentScene];
        const currentDialogue = scene.dialogues[this.currentDialogue];
        
        if (currentDialogue.choices || currentDialogue.video) {
            return;
        }
        
        this.currentDialogue++;
        
        if (this.currentDialogue >= scene.dialogues.length) {
            this.loadScene('start');
            return;
        }
        
        this.displayCurrentDialogue();
    }
};