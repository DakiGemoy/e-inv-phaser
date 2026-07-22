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
import Cloud from "../objects/Cloud";
import GallerySection from "../sections/popup/GallerySection";
import DefaultContent from "../sections/DefaultContent";

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
        
        for(let i=0; i<WORLD_WIDTH; i++){
            if(i%900 === 0 && i>0){
                new Tree(this, i, PLAYER_Y-55);
            }

            if(i%400 === 0){
                new Cloud(this,i);
            }
        }

        //player
        this.player = new Player(this, 100, PLAYER_Y);

        //camera
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

        const map = new SectionMarker(this,{id: "MAP", title: "Peta", type: SectionType.MAP, x: 1000, content: ()=>DefaultContent}, PLAYER_Y);
        this.sectionManager.register(map);
        const galeri = new SectionMarker(this,{id: "GALLERY", title: "Galeri", type: SectionType.GALLERY, x: 2000, content: ()=>GallerySection}, PLAYER_Y);
        this.sectionManager.register(galeri);
        const rsvp = new SectionMarker(this,{id: "RSVP", title: "Reservasi", type: SectionType.RSVP, x: 3000, content: ()=>DefaultContent}, PLAYER_Y);
        this.sectionManager.register(rsvp);
        const gift = new SectionMarker(this,{id: "GIFT", title: "Gift", type: SectionType.GIFT, x: 4000, content: ()=>DefaultContent}, PLAYER_Y);
        this.sectionManager.register(gift);
    }

    update(_time: number, delta: number) {
        this.player.update(delta);
        this.sectionManager.update(this.player);
    }
}