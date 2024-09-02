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

}

const initialState: DeckState = {selectedCards: []}

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

  const selectedCards = useMemo(() => cards.filter(c => state.selectedCards.includes(c.name)), [state]);
  const availableCards = useMemo(() => cards.filter(c => !state.selectedCards.includes(c.name)), [state]);

  const addCard = (card: Card) => dispatch({type: "addCard", value: card.name});
  const removeCard = (card: Card) => dispatch({type: "removeCard", value: card.name});

  return (
    <div>
      <div>
        <div>Selected</div>
        {selectedCards.map(n => <AbilityCard key={n.name} card={n} onSelect={removeCard}/>)}
      </div>
      <div>
        <div>Available</div>
        {availableCards.map(n => <AbilityCard key={n.name} card={n} onSelect={addCard}/>)}
      </div>
    </div>
  )
}