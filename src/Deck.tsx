import {useContext, useEffect, useMemo} from "react";
import {AbilityCard} from "./AbilityCard.tsx";
import {BuildContext} from "./BuildContext.ts";
import {useParams} from "react-router-dom";

export const Deck = () => {
  const {state, dispatch} = useContext(BuildContext);
  const {characterId} = useParams() as { characterId: string };

  useEffect(() => {
    dispatch({type: "selectCharacter", value: characterId});
  }, [dispatch, characterId]);

  const cardViewModels = useMemo(
    () => state.cards.map(card => ({
      ...card,
      isSelected: state.selectedCards.includes(card.name)
    })),
    [state.cards, state.selectedCards]
  );

  const addCard = (name: string) => () => dispatch({type: "addCard", value: name});
  const removeCard = (name: string) => () => dispatch({type: "removeCard", value: name});

  return (
    <div className={"container"}>
      <div className={"row"}>
        {cardViewModels.map(card =>
          <AbilityCard key={card.name}
                       characterId={state.characterId}
                       cardName={card.name}
                       isSelected={card.isSelected}
                       onSelect={card.isSelected ? removeCard(card.name) : addCard(card.name)}/>
        )}
      </div>
    </div>
  )
}