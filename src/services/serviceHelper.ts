import { ResponseStatType, Stat } from "src/utils/interface"

export const POKEMONS_API_URL: string = 'https://pokeapi.co/api/v2/pokemon'

export const POKEMON_API_URL = (id: number): string => `https://pokeapi.co/api/v2/pokemon/${id}`

export const parsePokemon = (response: any) => (
  {
    id: response.id,
    name: response.name,
    baseExperience: response.base_experience,
    height: response.height,
    weight: response.weight,
    abilities: parseAbilities(response),
    moves: parseMoves(response),
    types: parseTypes(response),
    stats: parseStats(response)
  }
)

const parseAbilities = (response: any): string[] => (
  response.abilities.map(({ ability }) => ability.name)
)

const parseMoves = (response: any): string[] => (
  response.moves.map(({ move }) => move.name)
)

const parseTypes = (response: any): string[] => (
  response.types.map(({ type }) => type.name)
)

const parseStats = (response: any): Stat[] => (
  response.stats
    .map(({ base_stat: baseStat, effort, stat }: ResponseStatType) => (
      {
        baseStat,
        effort,
        name: stat.name
      }
    ))
)