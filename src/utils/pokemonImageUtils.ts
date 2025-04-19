const BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

interface GetPokemonImageProps {
  id: number;
  fallback?: string;
}

export const getPokemonImage = ({
  id,
  fallback = "/images/pokemon-placeholder.png",
}: GetPokemonImageProps): string => {
  try {
    return `${BASE_URL}/${id}.png`;
  } catch (error) {
    return fallback;
  }
};
