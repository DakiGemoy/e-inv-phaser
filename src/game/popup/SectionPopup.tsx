import type { SectionData } from "../sections/SectionData";
import PopupOverlay from "./PopupOverlay";

interface Property{
    section: SectionData;
    onClose: ()=>void;
}

export default function SectionPopup({section, onClose}: Property){
    return (
        <PopupOverlay>
            <h2>{section.title}</h2>
            <p>Popup temporer</p>
            <button onClick={onClose}>Close</button>
        </PopupOverlay>
    );
}