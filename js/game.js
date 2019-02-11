let game;

let gameOptions = {
    asteroidSpeedRange: [200, 200],
    spaceSpeed: 80,
    rocketStartPosition: 320,
    cargoPercent: 10,
    alienPercent: 5,
    hatchPanelsPercent: 20,
    asteroidPercent: 100
}

function preload() {
    this.load.image('space', './imgs/spacegif.jpg');
    this.load.image('spaceShip', './imgs/rocket.png');
    this.load.image('alien', './imgs/alien.gif');
    this.load.image('bombs', './imgs/asteroid.jpg');
    this.load.image('cargo', './imgs/cargo.jpg');
    this.load.image('hatchPanels', './imgs/hatchPanel.png');
    this.load.image('bullets', './imgs/laserBlasts.jpg');
    this.load.image('primus', './imgs/primus.png');
    this.load.image('hatchIcon', './imgs/hatchIcon.png');
}

let space;
let primus;
let rocket;
let controls;
let collectAsset;

function create() {
    space = this.add.tileSprite(320, 480, 640, 960, 'space');
    primus = this.add.tileSprite(200, 960, 640, 300, 'primus');
    rocket = new Rocket(this);
    controls = new Controls(this);

    this.anims.create({
        key: "rotate",
        frames: this.anims.generateFrameNumbers("hatchPanels", {
            start: 0,
            end: 5
        }),
        frameRate: 10,
        yoyo: true,
        repeat: -1
    });
    collectAsset = new collectAssets(this);
    //boost
    // if spacebar = full 

    // top header tracker
    let hatchPanelsCollected = 0;
    text = this.add.text(440, 20, `Hatch Panels`, {
        fontSize: '20px',
        fill: '#ffffff'
    });
    text.setScrollFactor(0);
    hatchIcon = this.physics.add.staticGroup();
    hatchIcon.create(600, 24, 'hatchIcon');


    scoreText = this.add.text(25, 20, `Score:0`, {
        fontSize: '20px',
        fill: '#ffffff'
    });
    score += 10;
    scoreText.setText('Score: ' + score);
    text.setScrollFactor(0);
}


// // alien
//     alien = this.physics.add.gif({
//         key: 'alien',
//         repeat: Phaser.Math.Between(1,10),
//         setXY: { x: Phaser.Math.Between(1,10), y: 0, stepY:10000}
//     });
// black hole portal (maybe not)

function update() {
    console.log(controls.getMotion())
    rocket.move(controls.getMotion());
    rocket.fire(controls.getShooting());

    collectAsset.assetCreate();

    space.tilePositionY -= 5;
    primus.tilePositionY -= 2;

    // if (rocket == blackhole && boost = True) {
    //     this.load.image('space', "")
    // }
    if (primus.tilePositionY <= -370) {
        primus.destroy();
    }
}

function resize() {
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = game.config.width / game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
