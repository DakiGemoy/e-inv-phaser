import Phaser from "phaser";
import charIdle_img from "../../assets/char_idle.png";
import charWalk1_img from "../../assets/char_walk1.png";
import charWalk2_img from "../../assets/char_walk2.png";
import tree_img from "../../assets/tree.png";
import cloud1_img from "../../assets/awan1.png";
import cloud2_img from "../../assets/awan2.png";
import cloud3_img from "../../assets/awan3.png";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.image("player-idle", charIdle_img);
        this.load.image("player-walk1", charWalk1_img);
        this.load.image("player-walk2", charWalk2_img);
        this.load.image("tree", tree_img);
        this.load.image("cloud1", cloud1_img);
        this.load.image("cloud2", cloud2_img);
        this.load.image("cloud3", cloud3_img);
    }

    create() {
        this.scene.start("MainScene");
    }
}