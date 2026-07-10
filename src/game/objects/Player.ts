import Phaser from "phaser";
import InputManager from "../input/InputManager";
import {PLAYER} from "../config/playerConfig";
import {WORLD_WIDTH} from "../config/GameConstant";

export default class Player extends Phaser.GameObjects.Container {
    private bodyRect: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this.bodyRect = scene.add.rectangle(0, 0, PLAYER.WIDTH, PLAYER.HEIGHT, 0xff9800);

        this.add(this.bodyRect);
        scene.add.existing(this);
    }

    update(delta: number) {
        const deltaSecond = delta / 1000;

        if(InputManager.isLeftPressed() || InputManager.isRightPressed()) {
            this.bodyRect.setFillStyle(0xff5722);
        } else {
            this.bodyRect.setFillStyle(0xff9800);
        }

        if(InputManager.isLeftPressed()){
            this.x -= PLAYER.SPEED * deltaSecond;
            this.setScale(-1, 1);
        } 
        if(InputManager.isRightPressed()){
            this.x += PLAYER.SPEED * deltaSecond;
            this.setScale(1, 1);
        }

        this.x = Phaser.Math.Clamp(this.x, PLAYER.WIDTH / 2, WORLD_WIDTH - PLAYER.WIDTH / 2);
    }
}