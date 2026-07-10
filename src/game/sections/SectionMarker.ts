import Phaser from 'phaser';
import type { SectionData } from './SectionData';

export default class SectionMarker {
    readonly data: SectionData;
    readonly radius: number = 120;
    private box: Phaser.GameObjects.Rectangle;
    private label: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, data: SectionData, y: number) {
        this.data = data;
        this.box = scene.add.rectangle(data.x, y, 80, 80, 0x2196f3);
        this.label = scene.add.text(data.x, y+60, data.title, {
            color: '#ffffff',
            fontSize: '20px'
        }).setOrigin(0.5);
    }

    highlight(active: boolean) {
        this.box.setFillStyle(active ? 0x4caf50 : 0x2196f3);
        this.label.setColor(active ? '#011601' : '#ffffff');
    }
}