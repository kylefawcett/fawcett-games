import * as Phaser from 'phaser';

interface IMenuItem {
    scene: string;
    text: string;
    textGo?: Phaser.GameObjects.Text;
}


export default class MainMenuScene extends Phaser.Scene {
    config: Phaser.Types.Core.GameConfig;
    menuItems: IMenuItem[];
    screenCenter: [number, number];

    constructor(config: Phaser.Types.Core.GameConfig) {
        super('MainMenuScene');
        this.config = config;
        this.menuItems = [
            {scene: 'MainMenuScene', text: 'Flight of the Hamacorn'},
            {scene: null, text: 'Credits'},
        ]
        this.screenCenter = [config.width as number / 2.0, config.height as number / 2.0];
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');

    }
    create() {
        this.add.image(0, 0, 'sky').setOrigin(0, 0);
        this.createMenu();
    }

    createMenu() {
        this.menuItems.forEach((item, index) => {
            this.createMenuItem(item, index);
        });
    }

    createMenuItem(item: IMenuItem, index: number) {
        const style: Phaser.Types.GameObjects.Text.TextStyle = {
            fontStyle: 'bold',
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff',
            align: 'center',
        };
        const text = this.add.text(this.screenCenter[0], 100 + index * 50, item.text, style)
            .setOrigin(0.5, 1)
            .setInteractive({cursor: 'pointer', useHandCursor: true});
        text.setAlpha(0.7);
        text.on('pointerover', () => {
            text.setAlpha(1);
        });
        text.on('pointerout', () => {
            text.setAlpha(.7);
        });
        text.on('pointerdown', () => {
            this.scene.start(item.scene);
        });
    }
}
