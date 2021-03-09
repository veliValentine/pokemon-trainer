import { getStorage, setStorage } from "./localStorage"

const USER_KEY = 'user';
const POKEMONS_KEY = 'collected'

export const getUser = () => {
  console.log('getUser');
  const user = getStorage(USER_KEY);
  if (user) {
    return user;
  }
  return null;
}

export const saveUser = (user) => {
  console.log('saveUser');
  setStorage(USER_KEY, user)
}

export const getPokemons = () => {
  console.log('getPokemons');
  const pokemons = getStorage(POKEMONS_KEY);
  if (pokemons) {
    return pokemons;
  }
  return null;
}

export const savePokemons = (pokemons) => {
  console.log('savePokemons');
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
