class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
        console.log('constructor');
    }

    preload() {
        this.load.image('Menu', 'TitanMenu.png');
        console.log('preload');
    }

    create() {
        console.log('create');
        this.text = this.add.text(
            this.Config.width/2,
            this.Config.height/2,
            'Menu'
        );
        this.text.setOrigin(0.5);
        this.text.setColor('#000000');
        // var Button(x, y, width, height){
        //     this.load.sprite('button', "../imgs/button.png");
        //     this.Button.x = game.width / 2;
        //     this.Button.y = game.height * .75;
        //     Button.setInteractive('click', () => { console.log('click') });
       // }
            
        this.Menu = this.scene.add.tileSprite((300/640)*window.innerWidth,(450/960)*window.innerHeight, 640, 960, 'menu');
            
            // For location
        this.button = this.scene.add.rectangle((410/640)*window.innerWidth, (450/960)*window.innerHeight, window.innerWidth, window.innerHeight*0.07);
            // Actual
            // this.button = this.scene.add.rectangle(420, 500, 75, 50);
        this.button.setInteractive();
    
        this.button.on('pointerdown', function() {
            console.log('something');
            // scene.scene.remove(MainMenu);
            // game = new Phaser.Game(config);
        });

        this.create();
    }
    
        // x, y, width, height, fillColor
        // this.scene.add.rectangle(320, 320, 50, 50, '#000000');
        //     let clickButton = this.add.text(100, 100, 'Blast Off!', { fill: '#0f0' })
        //         .setInteractive()
        //         .on('pointerdown', () =>  // window.relocate) )
        // .on('pointerover', () => this.enterHoverState())
        //                 .on('pointerout', () => this.enterButtonRestState()));
        //     this.
    
    resize() {
        let canvas = document.querySelector("canvas");
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let windowRatio = windowWidth / windowHeight;
        let gameRatio = game.config.width / game.config.height;
        if(windowRatio < gameRatio){
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else{
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }        
    }
    
    //     enterbuttonHoverState() {
    //         this.clickButton.setSty
    //     }
    //         var buttons = [];
    // buttons.push(new buttons(0, 0, 90, 50, 'button', function () {
    //     newgame();
    // }))
    
    
    // update() {
    //     if (menuNumber === 0) {
    //         this.scene.start("Game");
    
    //     }
    // }
}



// function menuPreload() {
//     this.load.image('space', './imgs/spacegif.jpg');
//     this.load.image('rocket', './imgs/rocket.png');
//     this.load.image('alien', './imgs/alien.gif');
//     this.load.image('asteroid', './imgs/asteroid.png');
//     this.load.image('cargo', './imgs/cargo.png');
//     this.load.image('hatchPanels', './imgs/hatchPanel.png');
//     this.load.image('bullets', './imgs/laserBlasts.jpg');
//     this.load.image('primus', './imgs/primus.png');
//     this.load.image('hatchIcon', './imgs/hatchIcon.png');
//     this.load.image('menu', './imgs/TitanMenu.png');
// }

// let menu;

// function menuCreate() {
//     menu = new MainMenu(this);

// }

// function menuUpdate() {
    
// }
