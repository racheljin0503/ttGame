class Controls {
    constructor(scene) {
        this.scene = scene;


        this.right = false;



    }

    }



    // update(){
    //     if (this.leftArrow.isDown) {
    //         this.left = true;
    //         this.right = false;
    //         console.log('teu')
    //     } else if (this.rightArrow.isDown) {
    //         this.right = true;
    //         this.left = false;
    //     } else{
    //         this.left = false;
    //         this.right = false;
    //     }
    //
    // }

    getMotion() {
        this.update();
        return { left: this.left, right: this.right };
    }

}
