import { Component } from "@angular/core";
import { POKEMONS, TRAINER } from "src/shared/routerPaths";

@Component({
  selector: 'navBar',
  templateUrl: 'navBar.component.html',
  styleUrls: ['navBar.component.css']
})

export class NavBar {
  POKEMONS = POKEMONS;
  TRAINER = TRAINER
}
