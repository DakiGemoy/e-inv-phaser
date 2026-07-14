import GameCanvas from './GameCanvas';
import VirtualControls from './VirtualControls';
import { useEffect, useState } from 'react';
import type { SectionData } from '../game/sections/SectionData';
import InputManager from '../game/input/InputManager';
import SectionPopup from '../game/popup/SectionPopup';
import EventBus from '../game/events/EventBus';
import { GameEvents } from '../game/events/GameEvents';


export default function GameShell() {
    const [openedSection, setOpenedSection] = useState<SectionData | null>(null);
    const closePopup = ()=>{
        InputManager.unlockGame();
        setOpenedSection(null);
    };

    useEffect(() => {
        const handler = (section: SectionData) => {
            if(section != null){
                InputManager.lockGame();
                setOpenedSection(section);
            }
        };

        EventBus.on(GameEvents.OPEN_SECTION, handler);

        return () => {
            EventBus.off(GameEvents.OPEN_SECTION, handler);
        };
    }, []);
    
    return (
        <div className="game-shell">
            <GameCanvas />
            <VirtualControls />
            {
                openedSection && (
                    <SectionPopup section={openedSection} onClose={closePopup}/>
                )
            }
        </div>
    );
}