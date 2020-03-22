import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './game-board/game-board.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { HandComponent } from './hand/hand.component';



@NgModule({
  declarations: [GameBoardComponent, HowToPlayComponent, HandComponent],
  exports: [GameBoardComponent, HowToPlayComponent],
  imports: [
    CommonModule
  ]
})
export class GameBoardModule { }
