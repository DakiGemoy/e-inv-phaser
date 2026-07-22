import type { ComponentType } from "react";
import { SectionType } from "./SectionType";

export interface SectionData {
    id: string;
    type: SectionType;
    title: string;
    x: number;
    content: ()=>ComponentType;
}