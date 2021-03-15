import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "src/services/pokemon.service";
import { StorageService } from "src/services/storage.service";
import { Pokemon, PokemonBase } from "src/utils/interface";

@Component({
  selector: 'pokemonPage',
  templateUrl: './pokemonPage.components.html',
  styleUrls: ['./pokemonPage.components.css']
})

export class PokemonPage {
  loading = true;
  pokemon: Pokemon;
  owned: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private readonly pokemonService: PokemonService,
    private readonly storageService: StorageService,
  ) {
    const pokemonID = Number(this.route.snapshot.paramMap.get('id'))
    pokemonService
      .getPokemon(pokemonID)
      .subscribe(response => {
        this.pokemon = response;
        this.loading = false;
      });
    this.owned = storageService.getPokemons()
      .map((pokemon: PokemonBase) => pokemon.id)
      .includes(pokemonID)
  }

  catch() {
    const catcedPokemon: PokemonBase = {
      id: this.pokemon.id,
      name: this.pokemon.name,
    }
    this.storageService.addPokemon(catcedPokemon);
    this.owned = true;
  }
}
