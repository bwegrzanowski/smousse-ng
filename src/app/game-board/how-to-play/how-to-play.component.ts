import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent implements OnInit {

  readonly RULES: String = '../../../assets//how-to1.png';
  readonly ROUND_COURSE: String = '../../../assets//how-to2.png';
  readonly SPECIAL_CASES: String = '../../../assets//how-to3.png';

  constructor() { }

  ngOnInit() {
  }

}
