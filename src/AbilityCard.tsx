import * as React from "react";

interface AbilityCardProps {
  characterId: string
  cardName: string
  isSelected: boolean
  onSelect: (name: string) => void
}

export const AbilityCard: React.FC<AbilityCardProps> = ({characterId, cardName, isSelected, onSelect}) => {
  return (
    <div className={"col-6 col-md-3"}>
      <div onClick={() => onSelect(cardName)} className={isSelected ? "card active-card" : "card inactive-card"}>
        <img className={"img-fluid"}
             src={`https://raw.githubusercontent.com/epshteyndv/fh-deck/main/public/cards/${characterId}/${cardName}.jpeg`}
             alt={cardName}/>
      </div>
    </div>
  )
}