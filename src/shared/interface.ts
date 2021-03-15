export interface PokemonsResponse {
  pokemons: PokemonBase[],
  previous: string,
  next: string,
}

export interface PokemonBase {
  id: number,
  name: string,
}

export interface Pokemon extends PokemonBase {
  baseExperience: number,
  height: number,
  weight: number,
  abilities: string[],
  moves: string[],
  types: string[],
  stats: Stat[],
}

export interface ResponseStatType {
  base_stat: number,
  effort: number,
  stat: {
    name: string
  }
}

export interface Stat {
  name: string,
  baseStat: number,
  effort: number,
}
