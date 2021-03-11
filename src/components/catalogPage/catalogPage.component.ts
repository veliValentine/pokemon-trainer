import { Component } from "@angular/core";
import { PokemonService } from "src/services/pokemon.service";
import { PokemonBase } from "../../utils/interface";

@Component({
  selector: 'catalogPage',
  templateUrl: './catalogPage.component.html',
  styleUrls: ['./catalogPage.component.css']
})

export class CatalogPage {
  pokemons = [];
  constructor(private readonly pokemonService: PokemonService) {
    this.pokemonService.getPokemons()
      .subscribe(response => {
        this.pokemons = response
      })
  }

  // pokemons: PokemonBase[] = this.pokemonService.getPokemons();
}