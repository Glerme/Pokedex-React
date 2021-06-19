import { PokemonData } from "./PokemonTypes";

export interface EvolutionProps {
  id: string;
  name: string;
  isMega: boolean;
}

export interface EvolutionsData {
  pokemonData: PokemonData;
}
