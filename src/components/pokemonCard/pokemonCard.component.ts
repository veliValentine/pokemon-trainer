import { Component, Input } from "@angular/core";
import { PokemonBase } from '../../utils/interface'

@Component({
  selector: 'pokemonCard',
  templateUrl: './pokemonCard.component.html',
  styleUrls: ['./pokemonCard.component.css']
})

export class PokemonCard {
  @Input() pokemon: PokemonBase;
}
