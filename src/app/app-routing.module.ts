import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {GameBoardComponent} from "./game-board/game-board/game-board.component";
import {HowToPlayComponent} from "./game-board/how-to-play/how-to-play.component";


const routes: Routes = [
  {path: 'play', component: GameBoardComponent},
  {path: 'how-to-play', component: HowToPlayComponent},
  {path: 'index', component: MenuComponent},
  {path: '**', redirectTo: '', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
