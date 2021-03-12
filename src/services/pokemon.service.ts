import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { parsePokemon, POKEMONS_API_URL, POKEMON_API_URL } from "./serviceHelper";
import { PokemonBase, Pokemon, Stat, ResponseStatType } from "../utils/interface";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  constructor(private readonly http: HttpClient) { }

  private getIdFromURL = (url: string): number => (
    Number(url.match(/\/[\d]+\//)[0].replace(/\//g, ''))
  );

  private convertToPokemonBase = ({ name, url }: { name: string, url: string }) => (
    {
      id: this.getIdFromURL(url),
      name
    }
  )

  private parsePokemonBase = (response: any): PokemonBase[] => (
    response.results.map(this.convertToPokemonBase)
  )

  getPokemons(): Observable<PokemonBase[]> {
    return this.http
      .get<PokemonBase[]>(POKEMONS_API_URL)
      .pipe(
        map(this.parsePokemonBase)
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
