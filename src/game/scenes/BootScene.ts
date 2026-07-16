import Phaser from "phaser";
import charIdle from "../../assets/char_idle.png";
import charWalk1 from "../../assets/char_walk1.png";
import charWalk2 from "../../assets/char_walk2.png";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.image("player-idle", charIdle);
        this.load.image("player-walk1", charWalk1);
        this.load.image("player-walk2", charWalk2);
    }

    create() {
        this.scene.start("MainScene");
    }
}