import Phaser from "phaser";
import {GAME_WIDTH, GAME_HEIGHT} from "./GameConstant";
import BootScene from "../scenes/BootScene";
import MainScene from "../scenes/MainScene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: "game-container",
    backgroundColor: "#87CEEB",

    scene: [
        BootScene,
        MainScene
    ],

    physics:{
        default:"arcade",
        arcade:{
            debug:false
        }
    },

    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

export default gameConfig;