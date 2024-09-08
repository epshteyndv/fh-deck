import {useContext, useEffect, useMemo} from "react";
import {AbilityCard} from "./AbilityCard.tsx";
import {BuildContext} from "./BuildContext.ts";

export const Deck = () => {
  const {state, dispatch} = useContext(BuildContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedCards = useMemo(
    () => state.cards.map(card => ({
      ...card,
      isSelected: state.selectedCards.includes(card.name)
    })),
    [state.cards, state.selectedCards]
  );

  const addCard = (name: string) => dispatch({type: "addCard", value: name});
  const removeCard = (name: string) => dispatch({type: "removeCard", value: name});

  return (
    <div className={"container"}>
      <div className={"row"}>
        {selectedCards.map(card =>
          <AbilityCard key={card.name}
                       characterId={state.characterId}
                       cardName={card.name}
                       isSelected={card.isSelected}
                       onSelect={card.isSelected ? removeCard : addCard}/>
        )}
      </div>
    </div>
  )
}