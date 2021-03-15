import { Component, Input } from "@angular/core";
import { POKEMON } from "src/shared/routerPaths";
import { PokemonBase } from '../../interface'

@Component({
  selector: 'pokemonCard',
  templateUrl: './pokemonCard.component.html',
  styleUrls: ['./pokemonCard.component.css']
})

export class PokemonCard {
  POKEMON = POKEMON
  @Input() pokemon: PokemonBase;
}
