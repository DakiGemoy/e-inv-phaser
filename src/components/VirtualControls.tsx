import InputManager from "../game/input/InputManager";

export default function VirtualControls() {
    return (
        <div className="controls">
            <button 
                onPointerDown={() => InputManager.setLeft(true)}
                onPointerUp={() => InputManager.setLeft(false)}
                onPointerLeave={() => InputManager.setLeft(false)}
            >
                ◀
            </button>
            <button 
                onPointerDown ={() => InputManager.setAction(true)}
                onPointerUp={() => InputManager.setAction(false)}
                onPointerCancel={() => InputManager.setAction(false)}
            >
                ACTION
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