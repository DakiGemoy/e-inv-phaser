import Phaser from "phaser";

export default class Tree {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        scene.add.circle(x,y-40,30,0x2e7d32);
        scene.add.rectangle(x,y,12,50,0x795548);
    }
}