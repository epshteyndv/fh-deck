import {useContext, useEffect, useMemo} from "react";
import {BuildContext} from "./BuildContext.ts";
import {AbilityCard} from "./AbilityCard.tsx";
import {characters} from "./game-config.ts";

export const Characters = () => {
  const {dispatch} = useContext(BuildContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedCards = useMemo(
    () => {
      const cards: { characterId: string, cardName: string, isSelected: boolean }[] = [];

      for (const key in characters) {
        if (Object.prototype.hasOwnProperty.call(characters, key)) {
          cards.push({
            characterId: key,
            cardName: characters[key].cover,
            isSelected: true
          });
        }
      }

      return cards;
    }, []
  );

  const selectCharacter = (id: string) => dispatch({type: "selectCharacter", value: id});

  return (
    <div className={"cards"}>
      {selectedCards.map(card =>
        <AbilityCard key={card.cardName} {...card} onSelect={() => selectCharacter(card.characterId)}/>
      )}
    </div>
  )
}