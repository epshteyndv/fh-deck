import * as React from "react";
import {Card} from "../models/Card.tsx";

interface AbilityCardProps {
  card: Card
  onSelect: (card: Card) => void
}

export const AbilityCard: React.FC<AbilityCardProps> = ({card, onSelect}) => {
  return (<div onClick={() => onSelect(card)}>{card.name}</div>)
}