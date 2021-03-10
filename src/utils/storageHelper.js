import { getStorage, setStorage } from "./localStorage"

const TRAINER_KEY = 'user';
const POKEMONS_KEY = 'collected'

export const getTrainer = () => {
  const trainer = getStorage(TRAINER_KEY);
  console.log('getTrainer', { trainer });
  if (trainer) {
    return trainer.trainerName;
  }
  return null;
}

export const saveTrainer = (trainer) => {
  console.log('saveTrainer', { trainer });
  setStorage(TRAINER_KEY, trainer)
}

export const getPokemons = () => {
  const pokemons = getStorage(POKEMONS_KEY);
  console.log('getPokemons', { pokemons });
  if (pokemons) {
    return pokemons;
  }
  return [];
}

export const savePokemons = (pokemons) => {
  console.log('savePokemons', { pokemons });
  setStorage(POKEMONS_KEY, pokemons)
}

export const addPokemon = (pokemon) => {
  let pokemons = getPokemons();
  if (!pokemons) {
    console.log('No catched pokemons in storage')
    pokemons = [];
  }
  savePokemons(pokemons.concat(pokemon))
}
