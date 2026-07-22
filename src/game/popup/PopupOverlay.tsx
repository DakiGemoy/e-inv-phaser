import { GAME_WIDTH, GAME_HEIGHT } from "../config/GameConstant";

interface Props{
    children: React.ReactNode
}

export default function PopupOverlay({children}:Props){
    const canvasWidth = document.querySelector("canvas");
    let widthUsed = canvasWidth ? canvasWidth.clientWidth : GAME_WIDTH;
    const maximumWidthPopup = widthUsed * 80/100;
    const maximumHeightPopup = GAME_HEIGHT / 2;

    return (
        <div className="popup-overlay">
            <div className="popup" style={{
                "--popup-width": `${maximumWidthPopup}px`,
                "--popup-height": `${maximumHeightPopup}px`
            } as React.CSSProperties}>
                {children}
            </div>
        </div>
    );
}