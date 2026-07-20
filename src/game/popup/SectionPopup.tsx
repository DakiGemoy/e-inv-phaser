import type { SectionData } from "../sections/SectionData";
import PopupOverlay from "./PopupOverlay";
import close_img from "../../assets/close_button.png";
import title_img from "../../assets/title_bar.png";
import "./popup.css";

interface Property{
    section: SectionData;
    onClose: ()=>void;
}

export default function SectionPopup({section, onClose}: Property){
    return (
        <PopupOverlay>
            <div className="close-bar">
                <img src={close_img} alt="close" onClick={onClose}/>
            </div>
            <div className="title-section">
                <img src={title_img} alt="title-section" />
                <span>{section.title}</span>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, officiis optio cum laborum dolore modi, ipsum magni odit consequatur hic obcaecati ducimus delectus suscipit veniam nam veritatis voluptatibus laboriosam qui.</p>
            </div>
        </PopupOverlay>
    );
}