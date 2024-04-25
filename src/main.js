// main.js
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    fps: {
        forceSetTimeOut: true, target: 30
    },
    scene: [Movement] 
};

const game = new Phaser.Game(config);
