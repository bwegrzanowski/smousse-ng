import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  PLAY_BUTTON: String = '../../../assets/play.png';
  HOW_TO_PLAY_BUTTON: String = '../../../assets/how-to-play.png';

  constructor() { }

  ngOnInit() {
  }

}
