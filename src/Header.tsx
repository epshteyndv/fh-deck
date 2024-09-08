import {useContext} from "react";
import {BuildContext} from "./BuildContext.ts";

export const Header = () => {
  const {state, dispatch} = useContext(BuildContext);

  const showCharacters = () => dispatch({type: "showCharacters"});

  const menuButton = (
    <button className="navbar-toggler shadow-none" type="button" onClick={showCharacters}>
      <span className="navbar-toggler-icon"></span>
    </button>
  );
  return (
    <nav className="navbar bg-primary fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        {state.isCharacterSelection
          ? null
          : menuButton}
        <div className="nav-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {state.isCharacterSelection
                  ? "Select character"
                  : `${state.characterName} [${state.selectedCards.length} of ${state.maxCards}]`}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}