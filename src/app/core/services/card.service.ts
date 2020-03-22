import {Injectable} from "@angular/core";
import {Card} from "../../commons/model/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() {
  }

  shuffleDeck(cardsArray: Array<Card>) {
    let m = cardsArray.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = cardsArray[m];
      cardsArray[m] = cardsArray[i];
      cardsArray[i] = t;
    }

    return cardsArray;
  }

  getCards(): Array<Card> {
    return [...this.cards];
  }

  private cards: Array<Card> = [
    {
      id: 1,
      rank: "Ace",
      rankNo: 1,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/ace_of_spades.svg"
    },
    {
      id: 2,
      rank: "Two",
      rankNo: 2,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/2_of_spades.svg"
    },
    {
      id: 3,
      rank: "Three",
      rankNo: 3,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/3_of_spades.svg"
    }
    ,
    {
      id: 4,
      rank: "Four",
      rankNo: 4,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/4_of_spades.svg"
    },
    {
      id: 5,
      rank: "Five",
      rankNo: 5,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/5_of_spades.svg"
    },
    {
      id: 6,
      rank: "Six",
      rankNo: 6,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/6_of_spades.svg"
    },
    {
      id: 7,
      rank: "Seven",
      rankNo: 7,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/7_of_spades.svg"
    },
    {
      id: 8,
      rank: "Eight",
      rankNo: 8,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/8_of_spades.svg"
    },
    {
      id: 9,
      rank: "Nine",
      rankNo: 9,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/9_of_spades.svg"
    },
    {
      id: 10,
      rank: "Ten",
      rankNo: 10,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/10_of_spades.svg"
    },
    {
      id: 11,
      rank: "Jack",
      rankNo: 10,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/jack_of_spades2.svg"
    },
    {
      id: 12,
      rank: "Queen",
      rankNo: 10,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/queen_of_spades2.svg"
    },
    {
      id: 13,
      rank: "King",
      rankNo: 10,
      suit: "Spade",
      imageUrl: "../../../assets/cards_image/SVG/king_of_spades2.svg"
    },
    {
      id: 14,
      rank: "Ace",
      rankNo: 1,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/ace_of_clubs.svg"
    },
    {
      id: 15,
      rank: "Two",
      rankNo: 2,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/2_of_clubs.svg"
    },
    {
      id: 16,
      rank: "Three",
      rankNo: 3,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/3_of_clubs.svg"
    }
    ,
    {
      id: 17,
      rank: "Four",
      rankNo: 4,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/4_of_clubs.svg"
    },
    {
      id: 18,
      rank: "Five",
      rankNo: 5,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/5_of_clubs.svg"
    },
    {
      id: 19,
      rank: "Six",
      rankNo: 6,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/6_of_clubs.svg"
    },
    {
      id: 20,
      rank: "Seven",
      rankNo: 7,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/7_of_clubs.svg"
    },
    {
      id: 21,
      rank: "Eight",
      rankNo: 8,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/8_of_clubs.svg"
    },
    {
      id: 22,
      rank: "Nine",
      rankNo: 9,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/9_of_clubs.svg"
    },
    {
      id: 23,
      rank: "Ten",
      rankNo: 10,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/10_of_clubs.svg"
    },
    {
      id: 24,
      rank: "Jack",
      rankNo: 10,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/jack_of_clubs2.svg"
    },
    {
      id: 25,
      rank: "Queen",
      rankNo: 10,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/queen_of_clubs2.svg"
    },
    {
      id: 26,
      rank: "King",
      rankNo: 10,
      suit: "Club",
      imageUrl: "../../../assets/cards_image/SVG/king_of_clubs2.svg"
    },
    {
      id: 27,
      rank: "Ace",
      rankNo: 1,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/ace_of_diamonds.svg"
    },
    {
      id: 28,
      rank: "Two",
      rankNo: 2,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/2_of_diamonds.svg"
    },
    {
      id: 29,
      rank: "Three",
      rankNo: 3,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/3_of_diamonds.svg"
    }
    ,
    {
      id: 30,
      rank: "Four",
      rankNo: 4,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/4_of_diamonds.svg"
    },
    {
      id: 31,
      rank: "Five",
      rankNo: 5,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/5_of_diamonds.svg"
    },
    {
      id: 32,
      rank: "Six",
      rankNo: 6,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/6_of_diamonds.svg"
    },
    {
      id: 33,
      rank: "Seven",
      rankNo: 7,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/7_of_diamonds.svg"
    },
    {
      id: 34,
      rank: "Eight",
      rankNo: 8,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/8_of_diamonds.svg"
    },
    {
      id: 35,
      rank: "Nine",
      rankNo: 9,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/9_of_diamonds.svg"
    },
    {
      id: 36,
      rank: "Ten",
      rankNo: 10,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/10_of_diamonds.svg"
    },
    {
      id: 37,
      rank: "Jack",
      rankNo: 10,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/jack_of_diamonds2.svg"
    },
    {
      id: 38,
      rank: "Queen",
      rankNo: 10,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/queen_of_diamonds2.svg"
    },
    {
      id: 39,
      rank: "King",
      rankNo: 10,
      suit: "Diamond",
      imageUrl: "../../../assets/cards_image/SVG/king_of_diamonds2.svg"
    },
    {
      id: 40,
      rank: "Ace",
      rankNo: 1,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/ace_of_hearts.svg"
    },
    {
      id: 41,
      rank: "Two",
      rankNo: 2,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/2_of_hearts.svg"
    },
    {
      id: 42,
      rank: "Three",
      rankNo: 3,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/3_of_hearts.svg"
    }
    ,
    {
      id: 43,
      rank: "Four",
      rankNo: 4,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/4_of_hearts.svg"
    },
    {
      id: 44,
      rank: "Five",
      rankNo: 5,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/5_of_hearts.svg"
    },
    {
      id: 45,
      rank: "Six",
      rankNo: 6,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/6_of_hearts.svg"
    },
    {
      id: 46,
      rank: "Seven",
      rankNo: 7,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/7_of_hearts.svg"
    },
    {
      id: 47,
      rank: "Eight",
      rankNo: 8,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/8_of_hearts.svg"
    },
    {
      id: 48,
      rank: "Nine",
      rankNo: 9,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/9_of_hearts.svg"
    },
    {
      id: 49,
      rank: "Ten",
      rankNo: 10,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/10_of_hearts.svg"
    },
    {
      id: 50,
      rank: "Jack",
      rankNo: 10,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/jack_of_hearts2.svg"
    },
    {
      id: 51,
      rank: "Queen",
      rankNo: 10,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/queen_of_hearts2.svg"
    },
    {
      id: 52,
      rank: "King",
      rankNo: 10,
      suit: "Heart",
      imageUrl: "../../../assets/cards_image/SVG/king_of_hearts2.svg"
    }
  ];
}
