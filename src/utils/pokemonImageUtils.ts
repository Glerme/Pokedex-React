const POKEMON_SPRITE_BASE_URL = "https://img.pokemondb.net/artwork/large";

interface GetPokemonImageOptions {
  name: string;
  form?: "normal" | "mega" | "gmax" | "alola" | "galar" | "hisui";
  fallback?: string;
}

const formatPokemonName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export const getPokemonImage = ({
  name,
  form = "normal",
  fallback = "",
}: GetPokemonImageOptions): string => {
  try {
    const formattedName = formatPokemonName(name);

    switch (form) {
      case "mega":
        return `${POKEMON_SPRITE_BASE_URL}/${formattedName}-mega.jpg`;
      case "gmax":
        return `${POKEMON_SPRITE_BASE_URL}/${formattedName}-gigantamax.jpg`;
      case "alola":
        return `${POKEMON_SPRITE_BASE_URL}/${formattedName}-alola.jpg`;
      case "galar":
        return `${POKEMON_SPRITE_BASE_URL}/${formattedName}-galar.jpg`;
      case "hisui":
        return `${POKEMON_SPRITE_BASE_URL}/${formattedName}-hisui.jpg`;
      default:
        return `${POKEMON_SPRITE_BASE_URL}/${formattedName}.jpg`;
    }
  } catch (error) {
    console.error(`Error getting Pokemon image: ${error}`);
    return fallback;
  }
};

export const getAllPokemonForms = (name: string): Record<string, string> => {
  return {
    normal: getPokemonImage({ name }),
    mega: getPokemonImage({ name, form: "mega" }),
    gmax: getPokemonImage({ name, form: "gmax" }),
    alola: getPokemonImage({ name, form: "alola" }),
    galar: getPokemonImage({ name, form: "galar" }),
    hisui: getPokemonImage({ name, form: "hisui" }),
  };
};
