class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu', active: true}); 
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
        // window.addEventListener('resize', resize);
        // resize();
        this.titanMenu = this.add.image(window.innerWidth/2, window.innerHeight/2, 'titanMenu');
            this.titanMenu.displayWidth = window.innerWidth;
            this.titanMenu.displayHeight = window.innerHeight;

            // For location
        // this.button = this.add.rectangle((320/640)*window.innerWidth, (480/960)*window.innerHeight, window.innerWidth*0.8, window.innerHeight*0.5);
        this.button = this.add.rectangle(window.innerWidth*0.55, window.innerHeight*0.55, window.innerWidth*0.65, window.innerHeight*0.1, "#000000");
        this.button.setInteractive();
    
        this.button.on('pointerdown', function() {
            console.log('something');
            this.scene.launch('Game_');
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