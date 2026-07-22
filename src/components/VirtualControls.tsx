import InputManager from "../game/input/InputManager";
import { useEffect, useState } from "react";
import EventBus from "../game/events/EventBus";
import { GameEvents } from "../game/events/GameEvents";
import type { SectionData } from "../game/sections/SectionData";
import buttonL_img from "../assets/button_left.png";
import buttonR_img from "../assets/button_right.png";
import buttonOpen_img from "../assets/button_open.png";
import { GAME_WIDTH } from "../game/config/GameConstant";

export default function VirtualControls() {
    const [activeSection, setActiveSection] = useState<SectionData | null>(null);
    const [arrowPressed, setArrowPressed] = useState(0);
    const [controlWidth, setControlWidth] = useState(GAME_WIDTH);

    useEffect(() => {
        const handler = (section: SectionData | null) => {
            setActiveSection(section);
        };

        EventBus.on(GameEvents.SECTION_CHANGED, handler);

        const gameContainer = document.getElementById("game-container");

        if (!gameContainer) return;

        const mutationObserver = new MutationObserver(() => {
                const canvas = gameContainer.querySelector("canvas");
                if (!canvas) return;
                setControlWidth(canvas.clientWidth);
                console.log("canvas ditemukan "+canvas.clientWidth);
        });

        mutationObserver.observe(gameContainer, {
            childList: true,
            subtree: true
        });

        return () => {
            EventBus.off(GameEvents.SECTION_CHANGED, handler);
        };
    }, []);

    return (
        <div className="controls" style={{"--control-width": `${controlWidth}px`} as React.CSSProperties}>
            <div className={arrowPressed === -1 ? "leftPressed" : ""}
                onPointerDown={() => {
                    InputManager.setLeft(true);
                    setArrowPressed(-1);
                }}
                onPointerUp={() => {
                    InputManager.setLeft(false);
                    setArrowPressed(0);
                }}
                onPointerCancel={() => {
                    InputManager.setLeft(false);
                    setArrowPressed(0);
                }}
            >
                <img src={buttonL_img} alt="turn_left"  draggable={false} onContextMenu={(e)=>e.preventDefault()}/>
            </div>

            <div className={activeSection ? "action-active" : "action"}
                onPointerDown ={() => {
                    InputManager.setAction(true);
                    EventBus.emit(GameEvents.OPEN_SECTION, activeSection);
                    }
                }
                onPointerUp={() => InputManager.setAction(false)}
                onPointerCancel={() => InputManager.setAction(false)}
            >
                <img src={buttonOpen_img} alt="Open" draggable={false} onContextMenu={(e)=>e.preventDefault()}/>
            </div>

            <div className={arrowPressed === 1 ? "rightPressed" : ""}
                onPointerDown={() => {
                    InputManager.setRight(true);
                    setArrowPressed(1);
                }}
                onPointerUp={() => {
                    InputManager.setRight(false);
                    setArrowPressed(0);
                }}
                onPointerCancel={() => {
                    InputManager.setRight(false);
                    setArrowPressed(0);
                }}
            >
                <img src={buttonR_img} alt="Turn right" draggable={false} onContextMenu={(e)=>e.preventDefault()}/>
            </div>
        </div>
    );
}