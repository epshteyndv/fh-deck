import * as React from "react";
import {useMemo, useReducer} from "react";
import {cards} from "./game-config.ts";
import {Card} from "./models/Card.tsx";
import {AbilityCard} from "./components/AbilityCard.tsx";

interface DeckState {
  selectedCards: string[]
}

type DeckAction =
  | { type: "reset" }
  | { type: "addCard"; value: string }
  | { type: "removeCard"; value: string }

interface DeckProps {
  characterName: string
}

const initialState: DeckState = {selectedCards: JSON.parse(localStorage.getItem("selectedCards") ?? "[]") || []}

function reducer(state: DeckState, action: DeckAction): DeckState {
  switch (action.type) {
    case "reset":
      return initialState;
    case "addCard":
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
    default:
      throw new Error("Unknown action");
  }
}

export const Deck: React.FC<DeckProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchAndSave = (value: DeckAction) => {
    dispatch(value)
    localStorage.setItem("selectedCards", JSON.stringify(state.selectedCards))
  }

  const selectedCards = useMemo(
    () => cards.map(c => ({
      ...c,
      isSelected: state.selectedCards.includes(c.name)
    })),
    [state]
  );

  const addCard = (card: Card) => dispatchAndSave({type: "addCard", value: card.name});
  const removeCard = (card: Card) => dispatchAndSave({type: "removeCard", value: card.name});

  return (
    <div className={"deck"}>
      <div className={"deck-header"}>
        Selected {state.selectedCards.length}
      </div>
      <div className={"deck-cards"}>
        {selectedCards.map(card =>
          <AbilityCard key={card.name}
                       card={card}
                       isSelected={card.isSelected}
                       onSelect={card.isSelected ? removeCard : addCard}/>
        )}
      </div>
    </div>
  )
}