class Pause extends Phaser.Scene {
    constructor () {
        super({key: 'Pause', active: false});
        this.pauseText;
    }

    create() {
        this.pauseText = this.add.text(window.innerWidth/2, window.innerHeight/3, 'Pause', {
            fontSize: '80px',
            fill: '#ffffff'
        });

        this.pauseText.setInteractive();

        this.pauseText.on('pointerdown', function () {
            this.scene.resume('Game_');
            this.scene.stop();
        }, this);
    }
}