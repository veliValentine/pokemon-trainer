import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators'
import { parsePokemon, parsePokemonBase } from "src/shared/parseResponses";
import { ERROR } from "src/shared/routerPaths";

import { Pokemon, PokemonsResponse, } from "../shared/interface";
import { POKEMONS_API_URL, POKEMON_API_URL } from "./serviceHelper";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  constructor(private readonly http: HttpClient, private router: Router) { }

  getPokemons(path = POKEMONS_API_URL): Observable<PokemonsResponse> {
    return this.http
      .get<PokemonsResponse>(path)
      .pipe(
        map(({ previous, next, results }: any) => {
          const pokemons = parsePokemonBase(results);
          return {
            next, previous, pokemons
          }
        }),
        catchError((error) => {
          this.router.navigateByUrl(ERROR)
          throw Error(error);
        })
      )
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(POKEMON_API_URL(id))
      .pipe(
        map(parsePokemon),
        catchError((error) => {
          this.router.navigateByUrl(ERROR)
          throw Error(error);
        })
      )
  }
}
