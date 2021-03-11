import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { POKEMON_API_URL } from "./serviceHelper";
import { PokemonBase } from "../utils/interface";
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

  getPokemons(): Observable<PokemonBase[]> {
    return this.http
      .get<PokemonBase[]>(POKEMON_API_URL)
      .pipe(
        map((response: any) => {
          const results: any[] = response.results;
          return results.map(this.convertToPokemonBase)
        })
      )
  }
}