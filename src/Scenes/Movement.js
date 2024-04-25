class Movement extends Phaser.Scene {
    constructor() {
        super('MovementScene');
        this.bodyX = 400;  
        this.bodyY = 550;  
        this.my = { sprite: {} };
        this.speed = 160;  
        this.frameTime = 0;  
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("player", "character_squareYellow.png");  
        this.load.image('bullet', 'character_handRed.png');  
    }
    
    create() {

        this.my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "player");
        this.bullet = this.add.sprite(this.bodyX, this.bodyY - 20, 'bullet').setVisible(false);


        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(time, delta) {
        this.frameTime += delta;
        if (this.frameTime > 16.5) {
            this.frameTime = 0;

            let movementDelta = this.speed * (delta / 1000);  


            if (this.AKey.isDown) {
                this.my.sprite.body.x -= movementDelta;
            }

            if (this.DKey.isDown) {
                this.my.sprite.body.x += movementDelta;
            }
        }


        if (this.spaceBar.isDown && !this.bullet.visible) {
            this.fireBullet();
        }

        if (this.bullet.visible) {
            this.bullet.y -= this.speed * 4 * (delta / 1000);  
            if (this.bullet.y < 0) {
                this.bullet.setVisible(false);
            }
        }
    }

    fireBullet() {
        this.bullet.setPosition(this.my.sprite.body.x, this.my.sprite.body.y);
        this.bullet.setVisible(true);
    }
}
