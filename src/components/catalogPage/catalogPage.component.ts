import { Component } from "@angular/core";
import { PokemonService } from "src/services/pokemon.service";
import { PokemonBase, PokemonsResponse } from "src/utils/interface";

@Component({
  selector: 'catalogPage',
  templateUrl: './catalogPage.component.html',
  styleUrls: ['./catalogPage.component.css']
})

export class CatalogPage {
  pokemons: PokemonBase[] = [];
  previous: string = null;
  next: string = null;

  constructor(private readonly pokemonService: PokemonService) {
    this.getPokemons();
  }

  getPokemons = (path: string = undefined): void => {
    this.pokemonService.getPokemons(path)
      .subscribe(this.setValues)
  }

  setValues = ({ pokemons, previous, next }: PokemonsResponse): void => {
    this.pokemons = pokemons;
    this.previous = previous;
    this.next = next;
  }

  handleNavigation = (path: string): void => {
    this.getPokemons(path);
  }
}
