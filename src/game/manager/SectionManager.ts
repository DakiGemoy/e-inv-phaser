import Player from "../objects/Player";
import SectionMarker from "../sections/SectionMarker";
import EventBus from "../events/EventBus";
import { GameEvents } from "../events/GameEvents";

export default class SectionManager {
    private sections: SectionMarker[] = [];
    private active?: SectionMarker;

    register(section: SectionMarker) {
        this.sections.push(section);
    }

    update(player: Player) {
        let nearest: SectionMarker | undefined;

        for(const section of this.sections) {
            const distance = Math.abs(player.x - section.data.x);
            if(distance<=section.radius){
                nearest = section;
                break;
            }
        }

        if(nearest === this.active) {
            return;
        }

        if(this.active) {
            this.active.highlight(false);
        }

        this.active = nearest;

        if(this.active) {
            this.active.highlight(true);
        }

        EventBus.emit(GameEvents.SECTION_CHANGED, this.active?.data ?? null);
    }

    getActive(){
        return this.active;
    }

    getActiveSection(){
        return this.active?.data ?? null;
    }
}