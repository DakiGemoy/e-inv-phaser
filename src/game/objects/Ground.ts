import Phaser from "phaser";
import {WORLD_WIDTH, WORLD_HEIGHT, GROUND_HEIGHT} from "../config/GameConstant";

export default class Ground {
    constructor(scene: Phaser.Scene) {
        scene.add.rectangle(
            WORLD_WIDTH / 2,
            WORLD_HEIGHT - (GROUND_HEIGHT / 2),
            WORLD_WIDTH,
            GROUND_HEIGHT,
            0x4caf50
        );
    }
}