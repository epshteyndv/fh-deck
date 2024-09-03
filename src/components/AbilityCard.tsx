import * as React from "react";
import {Card} from "../models/Card.tsx";

interface AbilityCardProps {
  card: Card
  isSelected: boolean
  onSelect: (card: Card) => void
}

export const AbilityCard: React.FC<AbilityCardProps> = ({card, isSelected, onSelect}) => {
  return (
    <div onClick={() => onSelect(card)} className={isSelected ? "active-card" : "inactive-card"}>
      <img className={"card-img"} src={`https://raw.githubusercontent.com/epshteyndv/fh-deck/main/public/cards/bn/${card.name}.jpeg`}
           alt={card.name}/>
    </div>
  )
}