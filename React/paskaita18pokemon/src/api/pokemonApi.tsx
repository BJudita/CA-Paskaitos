import axios from "axios";

export type Pokemon = {
    id: number;
    name: string;
    sprites: Sprites;
    types: Types[];
    abilities: Ability[];
    stats: Stat[];
};
type Sprites = {
    front_default: string;
};
type Types = {
    type: {
        name: string;
      };
    };

type Ability = {
    ability: {
        name: string;
      };
    };
type Stat = {
    stat: {
        name: string;
      };
      base_stat: number;
    };

    export interface PokemonsResponse {
      results: { name: string; url: string }[];
      next: string | null; 
    }

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
  
  export async function fetchData<T>(url: string): Promise<T> {
    try {
      const { data } = await axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  export async function getPokemons(offset = 0, limit = 20): Promise<PokemonsResponse> {
    const url = `${pokemonUrl}?limit=${limit}&offset=${offset}`;
    return fetchData<PokemonsResponse>(url);
  }
  export async function getPokemonById(nameOrId: string): Promise<Pokemon> {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    return response.data;
  };