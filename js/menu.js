class MainMenu {
    constructor(scene) {
        this.scene = scene;
        
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
        });

        this.create();
    }

    create() {
        // x, y, width, height, fillColor
        // this.scene.add.rectangle(320, 320, 50, 50, '#000000');
    //     let clickButton = this.add.text(100, 100, 'Blast Off!', { fill: '#0f0' })
    //         .setInteractive()
    //         .on('pointerdown', () =>  // window.relocate) )
    // .on('pointerover', () => this.enterHoverState())
    //                 .on('pointerout', () => this.enterButtonRestState()));

    //     this.
    }

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

    changescenes() {
        this.scene.start('game');
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
