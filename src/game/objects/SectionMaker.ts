import Phaser from "phaser";

export default class SectionMaker {
    constructor(scene: Phaser.Scene, x: number, y: number, title: string) {
        scene.add.rectangle(x, y, 80, 80, 0x2196f3); 
        scene.add.text(x, y+60, title, { fontSize: '20px', color: '#ffffff' }).setOrigin(0.5);       
    }
}