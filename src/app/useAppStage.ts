import { useState } from "react";
import { AppStage } from "./AppStage";

export const useAppStage = () => {
    const [stage, setStage] = useState<AppStage>(AppStage.INTRO);

    return {
        stage,
        setStage
    };
};