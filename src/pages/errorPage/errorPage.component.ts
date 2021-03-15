import { Component } from "@angular/core";
import { POKEMONS, TRAINER } from "src/shared/routerPaths";

@Component({
  selector: 'errorPage',
  templateUrl: './errorPage.component.html',
  styleUrls: ['./errorPage.component.css']
})

export class ErrorPage {
  POKEMONS = POKEMONS;
  TRAINER = TRAINER;
}
