import {Component, OnInit} from '@angular/core';
import {Card} from "../../commons/model/card.model";
import {CardService} from "../../core/services/card.service";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  private leftPlayerName: String = 'Pablito';
  private topPlayerName: String = 'North';
  private rightPlayerName: String = 'East';
  private bottomPlayerName: String = 'Player';
  private cards: Array<Card>;


  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cards = this.cardService.shuffleDeck(this.cardService.getCards());
  }

}
