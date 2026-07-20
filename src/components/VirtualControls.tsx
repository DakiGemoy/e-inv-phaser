import InputManager from "../game/input/InputManager";
import { useEffect, useState } from "react";
import EventBus from "../game/events/EventBus";
import { GameEvents } from "../game/events/GameEvents";
import type { SectionData } from "../game/sections/SectionData";
import buttonL_img from "../assets/button_left.png";
import buttonR_img from "../assets/button_right.png";
import buttonOpen_img from "../assets/button_open.png";

export default function VirtualControls() {
    const [activeSection, setActiveSection] = useState<SectionData | null>(null);
    const [arrowPressed, setArrowPressed] = useState(0);

    useEffect(() => {
        const handler = (section: SectionData | null) => {
            setActiveSection(section);
        };

        EventBus.on(GameEvents.SECTION_CHANGED, handler);

        return () => {
            EventBus.off(GameEvents.SECTION_CHANGED, handler);
        };
    }, []);

    return (
        <div className="controls">
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