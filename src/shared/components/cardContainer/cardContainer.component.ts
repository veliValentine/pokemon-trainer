import { Component, Input } from "@angular/core";
import { PokemonBase } from "src/shared/interface";

@Component({
  selector: 'cardContainer',
  templateUrl: './cardContainer.component.html',
  styleUrls: ['./cardContainer.component.css']
})

export class CardContainer {
  @Input() pokemons: PokemonBase[];
}