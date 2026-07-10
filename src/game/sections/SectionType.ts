export const SectionType = {
    MAP: "MAP",
    GALLERY: "GALLERY",
    RSVP: "RSVP",
    GIFT: "GIFT"
} as const;

export type SectionType = typeof SectionType[keyof typeof SectionType];