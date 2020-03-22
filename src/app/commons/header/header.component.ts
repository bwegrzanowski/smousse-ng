import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  LOGO: String = '../../../assets/smousse.png';

  constructor(private readonly router: Router) {
  }

  goToIndex() {
    this.router.navigate(['index']);

  }
}
