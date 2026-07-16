import Phaser from "phaser";
import InputManager from "../input/InputManager";
import {PLAYER} from "../config/playerConfig";
import {WORLD_WIDTH, ANIMATION_SPEED} from "../config/GameConstant";

export default class Player extends Phaser.GameObjects.Container {
    private sprite: Phaser.GameObjects.Sprite;
    private velocityX = 0;
    private direction = 1;
    private animationElapsed = 0;
    private animationFrame = 0;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this.sprite = scene.add.sprite(0,0,"player-idle");
        this.sprite.setOrigin(0, 0.65);

        this.add(this.sprite);
        scene.add.existing(this);
    }

    update(delta: number) {
        const deltaSecond = delta / 1000;
        const input = InputManager.getState();

        if (input.gameLocked){
            return;
        }

        this.animationElapsed += delta;

        if(this.animationElapsed >= ANIMATION_SPEED){
            this.animationElapsed = 0;
            this.animationFrame++;

            this.animationFrame = this.animationFrame>1 ? 0 : this.animationFrame;

            if(this.animationFrame === 0){
                this.sprite.setTexture("player-walk1");
            } else {
                this.sprite.setTexture("player-walk2");
            }
        }
        
        if(InputManager.isLeftPressed() || InputManager.isRightPressed()){
            if(InputManager.isLeftPressed()){
                this.moveLeft(deltaSecond);
            } 
            if(InputManager.isRightPressed()){
                this.moveRight(deltaSecond);
            }
        } else {
            this.stop();
        }

        if(this.direction ==- 1){
            this.sprite.setFlipX(true);
        } else {
            this.sprite.setFlipX(false);
        }
        
        //batas player (perlu didalami)
        this.x = Phaser.Math.Clamp(this.x, PLAYER.WIDTH / 2, WORLD_WIDTH - PLAYER.WIDTH / 2);
    }

    moveRight(deltaSecond: number){
        this.velocityX = PLAYER.SPEED;
        this.direction = 1;
        this.x += this.velocityX * deltaSecond; 
    }

    moveLeft(deltaSecond: number){
        this.velocityX = -PLAYER.SPEED;
        this.direction = -1;
        this.x += this.velocityX * deltaSecond;
    }

    stop(){
        this.velocityX = 0;
        this.animationElapsed = 0;
        this.animationFrame = 0;
        this.sprite.setTexture("player-idle");
    }
}