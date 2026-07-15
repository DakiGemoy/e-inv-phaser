import { useAppStage } from './app/useAppStage';
import { AppStage } from './app/AppStage';
import IntroScreen from './screens/IntroScreen';
import ScreenTransition from './screens/transition/ScreenTransition';
import { useState } from 'react';
import GameShell from './components/GameShell';

function App() {
  const params = new URLSearchParams(window.location.search);
  const invited = params.get("to") ?? "Fulan";

  const {stage, setStage} = useAppStage();
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (stage === AppStage.INTRO){
    return (
      <>
          <IntroScreen guest={invited} onClick={
            ()=>{
              setIsTransitioning(true);
              setTimeout(()=>{
                setTimeout(()=>{
                  setStage(AppStage.GAME)
                  setIsTransitioning(false);
                },500); //transisi keluar
              },300); //transisi masuk
            }
          } />
          <ScreenTransition isVisible={isTransitioning}/>
        </>
    );
  }

  return <>
    <GameShell />
    <ScreenTransition isVisible={isTransitioning}/>
  </>;
}

export default App;