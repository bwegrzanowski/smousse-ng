import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly cardsUrl = 'http://localhost:4200/api/cards';

  constructor() {
  }

}
