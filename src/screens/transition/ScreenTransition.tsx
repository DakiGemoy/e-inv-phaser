import "./ScreenTransition.css";

type Prop = {
    isVisible: boolean
}

export default function ScreenTransition({isVisible}: Prop){
    return (
        <div 
            className={`screen-transition${isVisible ? " visible" : ""}`}>
        </div>
    );
}