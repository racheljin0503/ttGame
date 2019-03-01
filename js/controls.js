class Controls {
    // add;
    constructor(scene) {
        this.scene = scene;

        this.left = false;
        this.right = false;

        this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }


    // create() {
    //     console.log("okk");
    //     // window.addEventListener('resize', resize);
    //     // resize();
    //
    //     // For location
    //     // this.button = this.add.rectangle((320/640)*window.innerWidth, (480/960)*window.innerHeight, window.innerWidth*0.8, window.innerHeight*0.5);
    //
    //     this.leftbutton = this.add.image(window.innerWidth/2, window.innerHeight/2);
    //         this.leftbutton.displayWidth = window.innerWidth;
    //         this.leftbutton.displayHeight = window.innerHeight;
    //
    //     this.leftbutton = this.add.rectangle(0, window.innerHeight, window.innerWidth/2, window.innerHeight);
    //     this.leftbutton.setInteractive();
    //
    //     this.leftbutton.on('pointerdown', function() {
    //         console.log('left');
    //         this.leftArrow.isDown = true;
    //     }, this);
    //
    //     this.rightbutton = this.add.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, window.innerHeight);
    //     this.rightbutton.setInteractive();
    //
    //     this.rightbutton.on('pointerdown', function() {
    //         console.log('right');
    //         this.rightArrow = true;
    //         this.button.destroy();
    //     }, this);
    // }
    // tester(){
    //
    //     if (this.leftbutton === true){
    //         console.log("HD");
    //     }
    // }


    update(){
        if (this.leftArrow.isDown || this.leftbutton) {
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
