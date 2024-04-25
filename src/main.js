// main.js
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,  // Using CANVAS rendering
    width: 800,
    height: 600,
    fps: {
        forceSetTimeOut: true,
        target: 30           // Target 30 fps for the game loop
    },
    render: {
        pixelArt: true       // Pixel art will not be blurred when scaled
    },
    scene: [Movement]       // Make sure 'Movement' matches your scene's class name
};

const game = new Phaser.Game(config);
