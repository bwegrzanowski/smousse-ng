import {Card} from "./card.model";

export interface Hand {
  cards: Array<Card>;
  overallPoints: number;
}
