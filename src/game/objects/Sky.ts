import Phaser from "phaser";
import {WORLD_WIDTH, WORLD_HEIGHT} from "../config/GameConstant";

export default class Sky {
    constructor(scene: Phaser.Scene) {
        const graphics = scene.add.graphics();

        graphics.fillGradientStyle(0x6EC6FF,0x6EC6FF,0xFFE7B0,0xFFE7B0);
        graphics.fillRect(0,0,WORLD_WIDTH,WORLD_HEIGHT);
    }
}