import Phaser from "phaser";
import gameConfig from "../config/gameConfig";

class GameManager {
    private game?: Phaser.Game;

    createGame() {
        if (this.game) {
            return;
        }

        this.game = new Phaser.Game(gameConfig);
    }

    destroyGame() {
        if(!this.game) {
            return;
        }
        this.game.destroy(true);
        this.game = undefined;
    }
}

export default new GameManager();