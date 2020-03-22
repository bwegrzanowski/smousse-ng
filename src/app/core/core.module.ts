import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from "./services/api.service";
import {CardService} from "./services/card.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ApiService, CardService]
})
export class CoreModule {
}
