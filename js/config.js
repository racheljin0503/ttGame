let config;

let scene = [];
scene.push(Menu);
// scene.push("Game");

window.onload = function() {
    config = {
        type: Phaser.AUTO,
        width: 640,
        height: 960,
        scene: scene,
        physics: {
            default: "arcade",
        }
    }


game = new Phaser.Game(config);
    // window.focus();
    // resize();
    // window.addEventListener("resize", resize, false);
}

//     menuConfig = {
//         type: Phaser.AUTO,
//         width: 640,
//         height: 960,
//         scene:
//         {
//             preload: menuPreload,
//             create: menuCreate,
//             update: menuUpdate

//         },

//         physics: {
//             default: "arcade",
//         }
//     };
//     start();
// };