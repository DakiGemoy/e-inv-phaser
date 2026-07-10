import GameCanvas from './GameCanvas';
import VirtualControls from './VirtualControls';

export default function GameShell() {
    return (
        <div className="game-shell">
            <div>
                <GameCanvas />
                <VirtualControls />
            </div>
        </div>
    );
}