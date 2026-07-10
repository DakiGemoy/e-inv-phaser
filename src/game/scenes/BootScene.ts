import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        // load asset
    }

    create() {
        this.scene.start("MainScene");
    }
}