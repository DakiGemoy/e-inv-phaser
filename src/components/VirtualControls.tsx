import InputManager from "../game/input/InputManager";
import { useEffect, useState } from "react";
import EventBus from "../game/events/EventBus";
import { GameEvents } from "../game/events/GameEvents";
import type { SectionData } from "../game/sections/SectionData";

export default function VirtualControls() {
    const [activeSection, setActiveSection] = useState<SectionData | null>(null);

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
            <button 
                onPointerDown={() => InputManager.setLeft(true)}
                onPointerUp={() => InputManager.setLeft(false)}
                onPointerLeave={() => InputManager.setLeft(false)}
            >
                ◀
            </button>
            <button className={activeSection ? "action-active" : "action"}
                onPointerDown ={() => {
                        InputManager.setAction(true);
                        EventBus.emit(GameEvents.OPEN_SECTION, activeSection);
                    }
                }
                onPointerUp={() => InputManager.setAction(false)}
                onPointerCancel={() => InputManager.setAction(false)}
            >
                {activeSection ? "Buka" : "Buka"}
            </button>
            <button 
                onPointerDown={() => InputManager.setRight(true)}
                onPointerUp={() => InputManager.setRight(false)}
                onPointerLeave={() => InputManager.setRight(false)}
            >
                ▶
            </button>
        </div>
    );
}