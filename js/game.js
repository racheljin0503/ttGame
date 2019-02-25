let game;

let gameOptions = {
    asteroidSpeedRange: [200, 200],
    spaceSpeed: 80,
    rocketStartPosition: 320,
    cargoPercent: 1,
    alienPercent: 5,
    hatchPanelsPercent: 1,
    asteroidPercent: 2
    };

    let space;
    let primus;        
    let rocket;
    let controls;
    let collectAsset;
    let scoreText;

    let score = 0;
    let updateRate = 10;
    let currentUpdate = 0;

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady(){
        console.log(navigator.accelerometer);
    }

class Game_ extends Phaser.Scene {
    constructor() {
        super({ key: 'Game_', active: false });
    }

    scaler() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setMinMax(400, 300, 800, 600);
        scaleRatio = window.devicePixelRatio / 3;
    }

    preload() {
        this.load.image('space', './imgs/spacegif.jpg');
        this.load.image('rocket', './imgs/rocket.png');
        this.load.image('alien', './imgs/alien.gif');
        this.load.image('asteroid', './imgs/asteroid.png');
        this.load.image('cargo', './imgs/cargo.png');
        this.load.image('hatchPanels', './imgs/hatchPanel.png');
        this.load.image('bullets', './imgs/laserBlasts.jpg');
        this.load.image('primus', './imgs/primus.png');
        this.load.image('hatchIcon', './imgs/hatchIcon.png');
        this.load.image('Menu', 'TitanMenu.png');
        // this.load.audio('theme', ['./imgs/assets/audio/Deep_Space_Destructors_-_04_-_From_The_Ashes.mp3']);
    }

    create() {
        // var music= this.sound.add('theme');
        // music.play();

        space = this.add.tileSprite((game.config.width/2), (game.config.height/2), game.config.width, game.config.height, 'space');
        primus = this.add.tileSprite((game.config.width/2), game.config.height, game.config.width, game.config.height, 'primus');
        rocket = new Rocket(this);
        controls = new Controls(this);
        window.addEventListener('resize', resize);
        resize();
        // this.anims.create({
        //     key: "rotate",
        //     frames: this.anims.generateFrameNumbers("hatchPanels", {
        //         start: 0,
        //         end: 5
        //     }),
        //     frameRate: 10,
        //     yoyo: true,
        //     repeat: -1
        // });

        collectAsset = new collectAssets(this);
        //boost
        // if spacebar = full 

        // top header tracker
        // pause = new Pause(this);
        // hatchIcon = this.physics.add.staticGroup();
        // hatchIcon.create((535/640)*window.innerWidth, (29/960)*window.innerHeight, 'hatchIcon');
        // let hatchPanelsCollected = 0;
        // text = this.add.text(560, 20, hatchPanelsCollected, {
        //     fontSize: '20px',
        //     fill: '#ffffff'
        // });

        scoreText = this.add.text(game.config.width*0.01, game.config.height*0.01, `Score:0`, {
            fontSize: '35px',
            fill: '#ffffff'
        });
        scoreText.setScrollFactor(0);
    }

    update() {
        currentUpdate +=1;

        if(currentUpdate === updateRate) {
            scoreText.destroy();
            scoreText = this.add.text(25, 20, 'Score: ' + score, {
                fontSize: '20px',
                fill: '#ffffff'
            });
            score++;
            currentUpdate = 0;
        }


        // console.log(controls.getMotion())
        rocket.move(controls.getMotion());
        rocket.checkCollision(collectAsset.getAssetCoordinates())
        // rocket.fire(controls.getShooting());

        collectAsset.assetCreate();

        space.tilePositionY -= 5;
        primus.tilePositionY -= 2;

        if (primus.tilePositionY <= -370) {
            primus.destroy();
        }
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

