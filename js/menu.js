let highScore;

class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu', active: false}); 
    }

    scaler() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setMinMax(400, 300, 800, 600);
        scaleRatio = window.devicePixelRatio / 3;
    }

    preload() {
        this.load.image('titanMenu', './imgs/TitanMenu.png');
    }

    create() {
        console.log("okk");

        this.titanMenu = this.add.image(window.innerWidth/2, window.innerHeight/2, 'titanMenu');
            this.titanMenu.displayWidth = window.innerWidth;
            this.titanMenu.displayHeight = window.innerHeight;


        // if(localStorage.getItem('highscore') === null){
        //     highScore = 0;
        // }
        // else if (score > localStorage.getItem('highscore')) {
        //     highScore = localStorage.getItem('highscore');
        // }
            
        this.highScore = this.add.text(window.innerWidth/2, window.innerHeight*0.42, score, {
            fontSize: window.innerWidth*0.1 +'px',
            fill:'#ffffff'
        });
        this.highScore.setOrigin(0.5, 0.5);

        this.button = this.add.rectangle(window.innerWidth*0.52, window.innerHeight*0.53, window.innerWidth*0.63, window.innerHeight*0.1);
        this.button.setInteractive();
    
        this.button.on('pointerdown', function() {
            console.log('something');
            this.scene.stop('Menu');
            this.scene.start('Game_');
            // let key = 'Joe';
            // let stuff = new Test(key);
            // this.scene.remove('MainMenu');
            // this.scene.add('Game_');
            // this.scene.add(key, stuff, true);
            // scene.scene.remove(MainMenu);
            // game = new Phaser.Game(config);()
            this.button.destroy();
        }, this);
    }
}


function resize() {
    var canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
    var wratio = width / height, ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
        canvas.style.width = width + "px";
        canvas.style.height = (width / ratio) + "px";
    } else {
        canvas.style.width = (height * ratio) + "px";
        canvas.style.height = height + "px";
    }
}