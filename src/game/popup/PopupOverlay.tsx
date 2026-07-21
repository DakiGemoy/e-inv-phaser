import { GAME_WIDTH } from "../config/GameConstant";

interface Props{
    children: React.ReactNode
}

export default function PopupOverlay({children}:Props){
    const canvasWidth = document.querySelector("canvas");
    let widthUsed = canvasWidth ? canvasWidth.clientWidth : GAME_WIDTH;
    const maximumPopup = widthUsed * 80/100;
    return (
        <div className="popup-overlay">
            <div className="popup" style={{
                "--popup-width": `${maximumPopup}px`
            } as React.CSSProperties}>
                {children}
            </div>
        </div>
    );
}