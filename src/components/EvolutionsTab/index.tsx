import Image from "next/image";
import { NextPage } from "next";

import { useCallback, useEffect, useState } from "react";

import { api } from "../../services/api";

import {
  Evolucao,
  PokemonData,
  PokemonSpecies,
  PokemonSpeciesProps,
} from "../../types/PokemonTypes";

import { chainEvo } from "../../utils/chainEvo";
import { getPokemonImage } from "../../utils/pokemonImageUtils";

interface EvolutionsData {
  pokemonData: PokemonData;
}

interface EvolutionCardProps {
  pokemon: PokemonSpeciesProps;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ pokemon }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="relative w-48 h-48 mb-4">
      <Image
        src={getPokemonImage({
          name: pokemon.name,
          fallback: "/images/pokemon-placeholder.png",
        })}
        width={192}
        height={192}
        className="object-contain"
        alt={pokemon.name}
        priority={true}
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="flex items-center gap-2">
      <p className="text-lg font-medium capitalize text-gray-900">
        {pokemon.name}
      </p>
      <span className="text-sm text-gray-500">#{pokemon.id}</span>
    </div>
  </div>
);

export const EvolutionsTab: NextPage<EvolutionsData> = ({ pokemonData }) => {
  const [evolutionChain, setEvolutionChain] = useState<PokemonSpeciesProps[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvolutionChain = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data: species } = await api.get<PokemonSpecies>(
        pokemonData.species.url
      );

      const { data: chain } = await api.get<Evolucao>(
        species.evolution_chain.url
      );

      const evolutions = await chainEvo(chain);
      setEvolutionChain(evolutions);
    } catch (err) {
      setError("Failed to load evolution chain");
      console.error("Evolution chain error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [pokemonData.species.url]);

  useEffect(() => {
    fetchEvolutionChain();
  }, [fetchEvolutionChain]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-lg text-gray-600">Loading evolution chain...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {evolutionChain.map((pokemon, index) => (
          <EvolutionCard key={`${pokemon.id}-${index}`} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
