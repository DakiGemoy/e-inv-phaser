import Phaser from "phaser";
import {WORLD_WIDTH, WORLD_HEIGHT, DYNAMIC_GROUND} from "../config/GameConstant";

export default class Ground {    
    constructor(scene: Phaser.Scene) {
        scene.add.rectangle(
            WORLD_WIDTH / 2,
            WORLD_HEIGHT - (DYNAMIC_GROUND / 2),
            WORLD_WIDTH,
            DYNAMIC_GROUND,
            0x4caf50
        );
    }
}