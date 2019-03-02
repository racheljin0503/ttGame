
class gameOver extends Phaser.Scene{
    constructor(){
        super({key: 'GameOver', active: false});

        console.log("yay, in game over");
    }

    preload() {
        this.load.image('gameOver', './imgs/gameover.png');
    }

    create() {
        console.log("YEEEEEE BRUH");
        // this.highScore = Math.max(score, highScore);
        // this.localStorage.setItem(localStorageName, highScore);

        this.gameOver = this.add.image(window.innerWidth*0.5, window.innerHeight*0.5,'gameOver');
        this.gameOver.displayWidth = window.innerWidth;
        this.gameOver.displayHeight = window.innerHeight;

        this.score = this.add.text(window.innerWidth*0.5, window.innerHeight*0.43, score, {
            fontSize: window.innerWidth*0.2 + 'px',
            fill: '#ffffff'
        });
        this.score.setOrigin(0.5,0.5);

        this.restartButton = this.add.rectangle(window.innerWidth*0.51, window.innerHeight*0.61, window.innerWidth*0.78, window.innerHeight*0.2);
        this.restartButton.setInteractive();

        this.restartButton.on('pointerdown', function () {
            this.scene.stop('GameOver');
            this.scene.start('Game_');
        }, this);

        this.menuButton = this.add.rectangle(window.innerWidth*0.53, window.innerHeight*0.81, window.innerWidth*0.74, window.innerHeight*0.15);
        this.menuButton.setInteractive();
       
         this.menuButton.on('pointerdown', function () {
            console.log('menu');
            this.scene.stop('GameOver');
            this.scene.start('Menu');
        }, this);
        
    }
}

