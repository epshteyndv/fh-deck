import {CardConfig, characters} from "./game-config.ts";
import {createContext} from "react";
import * as React from "react";

export interface BuildState {
  isCharacterSelection: boolean;
  characterId: string;
  characterName: string;
  maxCards: number;
  cards: CardConfig[];
  selectedCards: string[]
}

export type BuildAction =
  | { type: "addCard"; value: string }
  | { type: "removeCard"; value: string }
  | { type: "showCharacters" }
  | { type: "selectCharacter", value: string }

export function reducer(state: BuildState, action: BuildAction): BuildState {
  switch (action.type) {
    case "addCard":
      if (state.maxCards == state.selectedCards.length)
        return state;

      return {
        ...state,
        selectedCards: state.selectedCards.some(c => c == action.value)
          ? state.selectedCards
          : [...state.selectedCards, action.value]
      };

    case "removeCard":
      return {
        ...state,
        selectedCards: state.selectedCards.filter(c => c != action.value)
      }

    case "showCharacters":
      return {...state, isCharacterSelection: true};

    case "selectCharacter": {
      const characterConfig = characters[action.value];
      const build = getBuildFromStorage(action.value);

      return {
        ...state,
        isCharacterSelection: false,
        characterId: action.value,
        characterName: characterConfig.name,
        maxCards: characterConfig.maxCards,
        cards: characterConfig.cards,
        selectedCards: build.selectedCards
      };
    }

    default:
      throw new Error("Unknown action");
  }
}

function getBuildFromStorage(id: string) {
  return JSON.parse(localStorage.getItem(`build_${id}`) || '{ "selectedCards": [] }');
}

export function initializeState(): BuildState {
  const id = localStorage.getItem("character_id") || "bn";
  const build = getBuildFromStorage(id);

  const characterConfig = characters[id];
  return {
    isCharacterSelection: false,
    characterId: id,
    characterName: characterConfig.name,
    maxCards: characterConfig.maxCards,
    cards: characterConfig.cards,
    selectedCards: build.selectedCards
  }
}

export const BuildContext = createContext<{ state: BuildState, dispatch: React.Dispatch<BuildAction> }>({
  state: initializeState(),
  dispatch: () => undefined
});
