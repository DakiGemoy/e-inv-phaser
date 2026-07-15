export const AppStage = {
    INTRO: "INTRO",
    GAME: "GAME"
}

export type AppStage = typeof AppStage[keyof typeof AppStage] 