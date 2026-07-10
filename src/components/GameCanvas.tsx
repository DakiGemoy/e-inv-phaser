import {useEffect} from "react";
import GameManager from "../game/manager/GameManager";

export default function GameCanvas() {
    useEffect(()=>{
        GameManager.createGame();
        return ()=>{
            GameManager.destroyGame();
        }
    },[]);

    return (
        <div
            id="game-container"
            style={{
                width:"100%",
                height:"100%"
            }}
        />
    );
}