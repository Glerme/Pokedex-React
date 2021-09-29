export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
}

export interface PokemonData {
  abilities: Abilities[];
  base_experience: number;
  forms: Array<{}>;
  game_indices: Array<{}>;
  height: number;
  held_items: Array<{}>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_types: Array<{}>;
  species: BaseProps;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}

export interface Status {
  idPokemon: number;
  pokemonStatus: PokemonStatusProps[];
  pokemonAbilities: PokemonAbilitiesProps[];
  pokemonData: PokemonData;
  isAlola: boolean;
  isGmax: boolean;
  isGalarian: boolean;
  isMega: boolean;
}

export interface Abilities {
  ability: BaseProps;
  is_hidden: boolean;
  slot: number;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: BaseProps;
}

export interface PokemonStatusProps {
  key: string;
  value: number;
}

export interface PokemonAbilitiesProps {
  key: string;
  abilities: string[];
}

interface BaseProps {
  name: string;
  url: string;
}

interface Moves {
  move: BaseProps;
}

interface Types {
  type: BaseProps;
}

interface Other {
  dream_world: {
    front_default: string;
    front_female: string;
  };
  official_artwork: {
    front_default: string;
  };
}

export interface Evolucao {
  id: number;
  baby_trigger_item: string | null;
  chain: Chain;
}

interface Chain {
  is_baby: boolean;
  evolution_details: null | [];
  species: BaseProps;
  evolves_to: EvolvesTo[];
}

interface EvolvesTo {
  is_baby: boolean;
  evolution_details: EvolutionDetails[];
  species: BaseProps;
  evolves_to: EvolvesTo[];
}

interface EvolutionDetails {
  gender: string | any;
  held_item: string | any;
  item: string | any;
  known_move: string | any;
  known_move_type: string | any;
  location: string | any;
  min_affection: string | any;
  min_beauty: string | any;
  min_happiness: string | any;
  min_level: 10;
  needs_overworld_rain: boolean;
  party_species: string | any;
  party_type: string | any;
  relative_physical_stats: string | any;
  time_of_day: string | any;
  trade_species: string | any;
  trigger: BaseProps;
  turn_upside_down: boolean;
}

export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: {};
  egg_groups: [];
  evolution_chain: { url: string };
  evolves_from_species: BaseProps;
  flavor_text_entries: [];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: [];
  generation: {};
  growth_rate: {};
  habitat: {};
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: [];
  order: number;
  pal_park_encounters: [];
  pokedex_numbers: [];
  shape: {};
  varieties: [];
}
export interface PokemonSpeciesProps {
  id: string;
  name: string;
  imageURL: string;
  types: string[];
}
