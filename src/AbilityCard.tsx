import * as React from "react";

interface AbilityCardProps {
  characterId: string
  cardName: string
  isSelected: boolean
  onSelect: () => void
}

export const AbilityCard: React.FC<AbilityCardProps> = ({characterId, cardName, isSelected, onSelect}) => {
  return (
    <div className={"col-6 col-md-3 p-1 pe-auto"}>
      <div role='button' onClick={() => onSelect()} className={isSelected ? "" : "opacity-50"}>
        <img className={"img-fluid card-image"}
             src={`https://raw.githubusercontent.com/epshteyndv/fh-deck/main/public/cards/${characterId}/${cardName}.png`}
             alt={cardName}/>
      </div>
    </div>
  )
}