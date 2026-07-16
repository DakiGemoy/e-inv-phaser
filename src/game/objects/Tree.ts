import Phaser from "phaser";

export default class Tree {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        scene.add.circle(x,y-40,30,0x2e7d32);
        scene.add.rectangle(x,y+10,12,70,0x795548);
    }
}