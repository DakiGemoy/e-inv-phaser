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
import SectionManager from "../manager/SectionManager";
import { SectionType } from "../sections/SectionType";
import SectionMarker from "../sections/SectionMarker";

export default class MainScene extends Phaser.Scene {
    private player!: Player;
    private sectionManager = new SectionManager();

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

        // new SectionMaker(this, 1000, PLAYER_Y, "MAP");
        // new SectionMaker(this, 2000, PLAYER_Y, "GALERI");
        // new SectionMaker(this, 3000, PLAYER_Y, "RSVP");
        // new SectionMaker(this, 4000, PLAYER_Y, "GIFT");

        //player
        this.player = new Player(this, 100, PLAYER_Y);

        //camera
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

        const map = new SectionMarker(this,{id: "map", title: "Peta", type: SectionType.MAP, x: 1000}, PLAYER_Y);
        this.sectionManager.register(map);
        const galeri = new SectionMarker(this,{id: "GALLERY", title: "Galeri", type: SectionType.GALLERY, x: 2000}, PLAYER_Y);
        this.sectionManager.register(galeri);
        const rsvp = new SectionMarker(this,{id: "RSVP", title: "Reservasi", type: SectionType.RSVP, x: 3000}, PLAYER_Y);
        this.sectionManager.register(rsvp);
        const gift = new SectionMarker(this,{id: "GIFT", title: "Gift", type: SectionType.GIFT, x: 4000}, PLAYER_Y);
        this.sectionManager.register(gift);
    }

    update(_time: number, delta: number) {
        this.player.update(delta);
        this.sectionManager.update(this.player);
    }
}