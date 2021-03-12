export interface PokemonBase {
  id: number,
  name: string,
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

export interface Pokemon {
  id: number,
  name: string,
  baseExperience: number,
  height: number,
  weight: number,
  abilities: string[],
  moves: string[],
  types: string[],
  stats: Stat[],
}