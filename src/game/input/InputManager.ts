import type { InputState } from "../../types/InputState";

class InputManager{
    private state: InputState = {
        leftPressed: false,
        rightPressed: false,
        actionPressed: false,
        gameLocked: false
    }

    getState(): Readonly<InputState> {
        return this.state;
    }

    setLeft(value: boolean){
        this.state.leftPressed = value;
    }

    setRight(value: boolean){
        this.state.rightPressed = value;
    }

    setAction(value: boolean){
        this.state.actionPressed = value;
    }

    lockGame(){
        this.state.gameLocked = true;
        this.reset;
    }

    unlockGame(){
        this.state.gameLocked = false;
        this.reset;
    }

    isLeftPressed(){
        return this.state.leftPressed;
    }

    isRightPressed(){
        return this.state.rightPressed;
    }

    isActionPressed(){
        return this.state.actionPressed;
    }

    reset(){
        this.state  = {
            leftPressed: false,
            rightPressed: false,
            actionPressed: false,
            gameLocked: false
        }
    }
}

export default new InputManager();