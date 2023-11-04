import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{
    dude: Phaser.GameObjects.Sprite;

    constructor ()
    {
        super('demo');
        this.dude = null;
    }

    preload ()
    {
        this.load.image('logo', 'assets/phaser3-logo.png');
        this.load.image('libs', 'assets/libs.png');
        this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        this.load.glsl('stars', 'assets/starfields.glsl.js');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create ()
    {
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);
        
        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);
        
        this.add.image(400, 300, 'libs');
        
        const logo = this.add.image(400, 70, 'logo');

        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })
        this.dude = this.add.sprite(400, 300, 'dude').setScale(1.5);
        this.anims.create({
            key: 'dance',
            // frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 8 }),
            frames: [
                // { key: 'dude', frame: 0 },
                // { key: 'dude', frame: 1 },
                // { key: 'dude', frame: 2 },
                { key: 'dude', frame: 3 },
                { key: 'dude', frame: 4 },
                // { key: 'dude', frame: 5 },
                { key: 'dude', frame: 6 },
                // { key: 'dude', frame: 7 },
                // { key: 'dude', frame: 8 }
            ],
            frameRate: 3,
            yoyo: true,
            repeat: -1
        });
        this.dude.play('dance');
    }

    update () {
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);
