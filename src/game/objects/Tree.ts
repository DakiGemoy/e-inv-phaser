import Phaser from "phaser";

export default class Tree {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        const tree = scene.add.image(x,y,"tree");
        tree.setDisplaySize(200,200);
    }
}