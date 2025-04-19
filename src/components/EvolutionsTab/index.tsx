import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { chainEvo } from "../../utils/chainEvo";
import { getPokemonImage } from "../../utils/pokemonImageUtils";
import { PokemonSpeciesProps } from "../../types/PokemonTypes";
import { TipoPokemon } from "../TipoPokemon";
import Image from "next/image";

interface EvolutionsTabProps {
  idPokemon: number;
}

export const EvolutionsTab: NextPage<EvolutionsTabProps> = ({ idPokemon }) => {
  const router = useRouter();
  const [evolucoes, setEvolucoes] = useState<PokemonSpeciesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvolutions = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/pokemon-species/${idPokemon}`);
        const { data: evolutionChain } = await api.get(
          data.evolution_chain.url
        );
        const parsedData = await chainEvo(evolutionChain);
        setEvolucoes(parsedData);
      } catch (error) {
        console.error("Error fetching evolutions:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvolutions();
  }, [idPokemon]);

  const handlePokemonClick = (id: string) => {
    router.push(`/pokemon/${id}`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <p className="text-gray-500 animate-pulse">Loading evolutions...</p>
      </div>
    );
  }

  if (!evolucoes.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-6">
        <div className="relative w-32 h-32">
          <Image
            src="/images/pokemon-placeholder.png"
            alt="No evolutions"
            width={128}
            height={128}
            className="object-contain opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent animate-pulse" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-gray-900">
            No Evolutions Found
          </h3>
          <p className="text-gray-500">
            This Pokémon doesn't have any evolutions in its chain.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Evolution Chain</h2>
          <span className="text-sm text-gray-500">
            {evolucoes.length} Evolution{evolucoes.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {evolucoes.map((pokemon, index) => (
          <div
            key={pokemon.id}
            onClick={() => handlePokemonClick(pokemon.id)}
            className="group relative rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-1 overflow-hidden"
            style={{ backgroundColor: `var(--${pokemon.types[0]})` }}
          >
            <div className="absolute top-4 left-4 z-20">
              <span className="text-sm font-bold bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-2xl text-gray-700">
                #{index + 1}
              </span>
            </div>

            <div className="absolute inset-0 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/10 to-transparent opacity-30" />
            </div>

            <div className="relative mb-5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[220px] h-[220px] rounded-full bg-white/10 backdrop-blur-sm animate-pulse" />
              </div>
              <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                <Image
                  src={getPokemonImage({
                    id: Number(pokemon.id),
                    fallback: "/images/pokemon-placeholder.png",
                  })}
                  alt={pokemon.name}
                  width={220}
                  height={220}
                  className="object-contain drop-shadow-lg transition-all duration-500"
                  priority
                />
              </div>
            </div>

            <div className="space-y-3 text-center relative z-10">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold capitalize text-white group-hover:text-white/90 transition-colors duration-300">
                  {pokemon.name}
                </h3>
                <span className="inline-block text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white transition-colors duration-300">
                  #{pokemon.id.padStart(3, "0")}
                </span>
              </div>

              <div className="flex justify-center">
                <TipoPokemon
                  type1={pokemon.types[0]}
                  type2={pokemon.types[1]}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
