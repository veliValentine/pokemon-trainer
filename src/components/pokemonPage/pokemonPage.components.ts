import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "src/services/pokemon.service";
import { Pokemon } from "src/utils/interface";

@Component({
  selector: 'pokemonPage',
  templateUrl: './pokemonPage.components.html',
  styleUrls: ['./pokemonPage.components.css']
})

export class PokemonPage {
  loading = true;
  pokemon: Pokemon;
  private readonly pokemonID: number;

  constructor(private route: ActivatedRoute, private readonly pokemonService: PokemonService) {
    this.pokemonID = Number(this.route.snapshot.paramMap.get('id'))
    pokemonService
      .getPokemon(this.pokemonID)
      .subscribe(response => {
        this.pokemon = response;
        this.loading = false;
        console.log(this.pokemon);
      });
  }
}
