import {useContext} from "react";
import {BuildContext} from "./BuildContext.ts";

export const Header = () => {
  const {state, dispatch} = useContext(BuildContext);

  const showCharacters = () => dispatch({type: "showCharacters"});

  return (
    <div className={"main-header"} onClick={showCharacters}>
      {state.isCharacterSelection
        ? "Characters"
        : `${state.characterName} [${state.selectedCards.length} of ${state.maxCards}]`}
    </div>
  )
}