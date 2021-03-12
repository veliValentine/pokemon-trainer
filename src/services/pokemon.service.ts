import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

import { PokemonBase, Pokemon, } from "../utils/interface";
import { POKEMONS_API_URL, POKEMON_API_URL } from "./serviceHelper";
import { parsePokemon, parsePokemonBase } from "./parseResponses";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  constructor(private readonly http: HttpClient) { }

  getPokemons(): Observable<PokemonBase[]> {
    return this.http
      .get<PokemonBase[]>(POKEMONS_API_URL)
      .pipe(
        map(parsePokemonBase)
      )
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(POKEMON_API_URL(id))
      .pipe(
        map(parsePokemon)
      )
  }
}
