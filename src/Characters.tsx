import {AbilityCard} from "./AbilityCard.tsx";
import {characters} from "./game-config.ts";
import {useNavigate} from "react-router-dom";
import {useMemo} from "react";

export const Characters = () => {
  const navigate = useNavigate();

  const cardViewModels = useMemo(
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

  const selectCharacter = (id: string) => {
    navigate(`/${id}`);
  }

  return (
    <div className={"container"}>
      <div className={"row"}>
        {cardViewModels.map(card =>
          <AbilityCard key={card.cardName} {...card} onSelect={() => selectCharacter(card.characterId)}/>
        )}
      </div>
    </div>
  )
}