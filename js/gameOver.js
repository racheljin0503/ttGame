class gameOver extends Phaser.Scene{
    constructor(){
        super({key: 'GameOver', active: false});

        console.log("yay, in game over");

        // this.Over = this.scene.add.image((300/640)*window.innerWidth,(450,960)*window.innerHeight, 'over')
        // this.button = this.scene.add.rectangle((410/640)*window.innerWidth,(450/960)*window.innerHeight, window.innerWidth, window.innerHeight*0.7)
        // this.button.setInteractive();
        // this.button('pointerdown', function(){
        //     console.log('restart');
        //     this.scene.start('Game');
        // });
        // this.create();
    }

    create(){
        console.log("YEEEEEE BRUH");
        // game.physics.arcade.checkCollision.down = false;
        // rocket.asteriodCrash = true;
        // rocket.events.asteriodCollider.add(function(){
        //     alert('Game Over');
        //     location.reload();
        // }, this);
        this.pauseText = this.add.text(window.innerWidth/2, window.innerHeight/3, 'Go To Menu', {
            fontSize: '80px',
            fill: '#ffffff'
        });

        this.pauseText.setInteractive();

        this.pauseText.on('pointerdown', function () {
            this.scene.stop('GameOver');
            this.scene.start('Menu');
        }, this);
    }
}
