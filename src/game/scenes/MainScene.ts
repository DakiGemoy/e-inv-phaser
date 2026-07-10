import Phaser from "phaser";
import {
    WORLD_WIDTH,
    WORLD_HEIGHT,
    PLAYER_Y
} from "../config/GameConstant";
import Player from "../objects/Player";
import Sky from "../objects/Sky";
import Ground from "../objects/Ground";
import Tree from "../objects/Tree";
import SectionMaker from "../objects/SectionMaker";

export default class MainScene extends Phaser.Scene {
    private player!: Player;

    constructor() {
        super("MainScene");
    }

    create() {
        // camera & world
        this.cameras.main.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
        this.physics.world.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

        new Sky(this);
        new Ground(this);

        //tree
        for(let i = 300; i < WORLD_WIDTH; i+=600) {
            new Tree(this, i, PLAYER_Y-10);
        }

        new SectionMaker(this, 1000, PLAYER_Y, "MAP");
        new SectionMaker(this, 2000, PLAYER_Y, "GALERI");
        new SectionMaker(this, 3000, PLAYER_Y, "RSVP");
        new SectionMaker(this, 4000, PLAYER_Y, "GIFT");

        //player
        this.player = new Player(this, 100, PLAYER_Y);

        //camera
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    }

    update(delta: number) {
        this.player.update(delta);
    }
}