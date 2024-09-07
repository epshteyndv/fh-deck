import './App.css'
import {Deck} from "./Deck.tsx";
import {useEffect, useReducer} from "react";
import {BuildContext, initializeState, reducer} from "./BuildContext.ts";
import {Header} from "./Header.tsx";
import {Characters} from "./Characters.tsx";

function App() {
  const [state, dispatch] = useReducer(reducer, null, initializeState);

  useEffect(() => {
    localStorage.setItem("character_id", state.characterId);
    localStorage.setItem(`build_${state.characterId}`, JSON.stringify({selectedCards: state.selectedCards}));
  }, [state.characterId, state.selectedCards])

  return (
    <>
      <BuildContext.Provider value={{state, dispatch}}>
        <Header/>
        <div className={"content"}>
          {state.isCharacterSelection ? <Characters/> : <Deck/>}
        </div>
      </BuildContext.Provider>
    </>
  )
}

export default App
