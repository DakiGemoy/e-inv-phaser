import Phaser from "phaser";
import {WORLD_WIDTH, WORLD_HEIGHT} from "../config/GameConstant";

export default class Sky {
    constructor(scene: Phaser.Scene) {
        scene.add.rectangle(
            WORLD_WIDTH / 2,
            WORLD_HEIGHT / 2,
            WORLD_WIDTH,
            WORLD_HEIGHT,
            0x87CEEB
        );
    }
}