class Loading extends Phaser.Scene {
    constructor() {
        super({ key: 'Loading', active: true });
    }

    preload() {
        // window.addEventListener('resize', resize);
        // resize();

        var width = game.config.width;
        var height = game.config.height;

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width*0.3, height*0.45, 600, 140);
        
        var percentText = this.make.text({
            x: width * 0.5,
            y: height *0.49,
            text: '0%',
            style: {
                font: '50px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width *0.51,
            y: height * 0.53,
            text: '',
            style: {
                font: '35px monospace',
                fill: '#72FFFF'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle('#ffffff');
            progressBar.fillRect(width*0.36, height*0.47, 490* value, 100);
        });
                    
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        
    this.load.image('titanLogo', './imgs/technoTitanLogo.png');
        for (var i = 0; i < 5000; i++) {
            this.load.image('assets'+i, '../imgs/technoTitanLogo.png');
        }
    }

    loadScreen() {
        logo = this.add.image(width/2, height/2, 'logo');
        if(percentText === 100) {
            this.scene.launch('Menu');
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