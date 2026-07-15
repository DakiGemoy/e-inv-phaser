import "./ScreenTransition.css";

type Prop = {
    isVisible: boolean
}

const COLS = 20;
const ROWS = 36;

export default function ScreenTransition({isVisible}: Prop){
    const randomColor = ()=>{
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
    };
    return (
        <div 
            className={`screen-transition${isVisible ? " visible" : ""}`}>
                {Array.from({length: COLS*ROWS}).map((_, index)=>(
                    <div 
                        key={index}
                        className={`pixel${isVisible ? " show" : " showout"}`}
                        style={{
                            animationDelay:`${Math.random()*300}ms`,
                            backgroundColor: randomColor()
                        }} 
                    />
                ))}
        </div>
    );
}