import { Pokemon, PokemonBase, ResponseStatType, Stat } from "src/utils/interface"
import { title } from "src/utils/title";

export const parsePokemonBase = (results: []): PokemonBase[] => (
  results.map(convertToPokemonBase)
)

const convertToPokemonBase = ({ name, url }: { name: string, url: string }): PokemonBase => (
  {
    name: title(name),
    id: getIdFromURL(url),
  }
)

const getIdFromURL = (url: string): number => (
  Number(url.match(/\/[\d]+\//)[0].replace(/\//g, ''))
);

export const parsePokemon = (response: any): Pokemon => (
  {
    id: response.id,
    name: title(response.name),
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
