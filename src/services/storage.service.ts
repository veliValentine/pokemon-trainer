import { Injectable } from "@angular/core";
import { PokemonBase } from "src/utils/interface.js";
import { getStorage, setStorage } from '../utils/localStorage';
import { POKEMONS_KEY, TRAINER_KEY } from "./serviceHelper";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  getTrainer(): string {
    const trainer: string = getStorage(TRAINER_KEY);
    console.log('getTrainer', { trainer });
    if (trainer) {
      return trainer
    }
    return null;
  }
  saveTrainer(trainerName: string): void {
    console.log('saveTrainer', { trainerName });
    setStorage(TRAINER_KEY, trainerName)
  }
  getPokemons(): PokemonBase[] {
    const pokemons = getStorage(POKEMONS_KEY);
    console.log('getPokemons', { pokemons });
    if (pokemons) {
      return pokemons;
    }
    return [];
  }
  savePokemons(pokemons: PokemonBase[]) {
    console.log('savePokemons', { pokemons });
    setStorage(POKEMONS_KEY, pokemons)
  }
  addPokemon(pokemon: PokemonBase) {
    const pokemons = this.getPokemons();
    this.savePokemons(pokemons.concat(pokemon));
  }
}
