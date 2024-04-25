class Movement extends Phaser.Scene {
    constructor() {
        super('MovementScene');
        this.bodyX = 400;  
        this.bodyY = 550;  
        this.my = { sprite: {} };
        this.speed = 160;  // Speed of the player
        this.frameTime = 0;  // Time accumulator for frame rate independence
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("player", "character_squareYellow.png");  // Player image
        this.load.image('bullet', 'character_handRed.png');  // Bullet image
    }
    
    create() {
        // Create the player sprite
        this.my.sprite.body = this.physics.add.sprite(this.bodyX, this.bodyY, 'player');
        this.my.sprite.body.setCollideWorldBounds(true);  // Prevent player from going out of bounds

        // Create the bullet sprite
        this.bullet = this.physics.add.sprite(this.bodyX, this.bodyY - 20, 'bullet').setVisible(false);

        // Create keyboard keys once here instead of in the update loop
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);  // For firing the bullet
    }

    update(time, delta) {
        this.frameTime += delta;
        if (this.frameTime > 16.5) {
            this.frameTime = 0;


            if (this.AKey.isDown) {
                for (let part in this.my.sprite) {
                    this.my.sprite[part].x -= this.speed * (delta / 500);  
                }
            }

            if (this.DKey.isDown) {
                for (let part in this.my.sprite) {
                    this.my.sprite[part].x += this.speed * (delta / 500);  
                }
            }
        }

        // Fire a bullet if the space key is pressed and the bullet is not already visible
        if (this.spaceBar.isDown && !this.bullet.visible) {
            this.fireBullet();
        }

        // Update bullet's position if it's visible
        if (this.bullet.visible) {
            this.bullet.y -= 100;  
            if (this.bullet.y < 0) {
                this.bullet.setVisible(false);  // Reset bullet visibility if it goes off-screen
            }
        }
    }

    fireBullet() {
        // Function to handle firing the bullet
        this.bullet.setPosition(this.my.sprite.body.x, this.my.sprite.body.y);
        this.bullet.setVisible(true);
    }
}
