import { Injectable } from "@angular/core";
import { PokemonBase } from "src/shared/interface.js";
import { clearStorage, getStorage, setStorage } from '../shared/localStorage';
import { POKEMONS_KEY, TRAINER_KEY } from "./serviceHelper";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  getTrainer(): string {
    const trainer: string = getStorage(TRAINER_KEY);
    if (trainer) {
      return trainer;
    }
    return null;
  }
  saveTrainer(trainerName: string): void {
    clearStorage();
    setStorage(TRAINER_KEY, trainerName);
  }
  getPokemons(): PokemonBase[] {
    const pokemons = getStorage(POKEMONS_KEY);
    if (pokemons) {
      return pokemons;
    }
    return [];
  }
  savePokemons(pokemons: PokemonBase[]) {
    setStorage(POKEMONS_KEY, pokemons)
  }
  addPokemon(pokemon: PokemonBase) {
    const pokemons = this.getPokemons();
    this.savePokemons(pokemons.concat(pokemon));
  }
}
