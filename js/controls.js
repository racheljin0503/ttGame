class Controls {
    constructor(scene) {
        this.scene = scene;

        this.left = false;
        this.right = false;

        this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){
        if (this.leftArrow.isDown) {
            this.left = true;
            this.right = false;
        } else if (this.rightArrow.isDown) {
            this.right = true;
            this.left = false;
        } else{
            this.left = false;
            this.right = false;
        }
    
    }

    getMotion() {
        this.update();
        return { left: this.left, right: this.right };
    }

}
