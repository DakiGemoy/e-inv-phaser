import Phaser from "phaser";

export default class Cloud {
    constructor(scene: Phaser.Scene, x: number){
        const cloud: string = "cloud"+randomCloud(1,3);
        const y = randomCloud(100,400);
        const cloudImg = scene.add.image(x,y,cloud);
        
        cloudImg.setDisplaySize(250,100);
    }
}

function randomCloud(min: number, max: number){
    const gen = Math.floor(Math.random() * (max-min+1))+min;
    return Math.floor(gen);
}