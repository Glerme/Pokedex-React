import Head from "next/head";
import { useCallback, useState } from "react";
import { GetStaticProps, NextPage } from "next";

import { PokemonSpeciesProps } from "../types/PokemonTypes";
import { fetchPokemons } from "../utils/fetchPokemons";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

import { Header } from "../components/Header";
import { HomeCards } from "../components/HomeCards";
import { PokemonCardSkeleton } from "../components/PokemonCardSkeleton";

interface HomeProps {
  initialPokemons: PokemonSpeciesProps[];
}

const ITEMS_PER_PAGE = 25;

const Home: NextPage<HomeProps> = ({ initialPokemons }) => {
  const [pokemons, setPokemons] =
    useState<PokemonSpeciesProps[]>(initialPokemons);

  const loadMorePokemons = useCallback(async () => {
    const newPokemons = await fetchPokemons(pokemons.length);
    setPokemons((prev) => [...prev, ...newPokemons]);
  }, [pokemons.length]);

  const { isLoading, error, observerRef } = useInfiniteScroll(
    loadMorePokemons,
    {
      threshold: 0.5,
      rootMargin: "100px",
    }
  );

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />

      <main className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {pokemons.map((pokemon, index) => (
            <HomeCards
              key={`${pokemon.id}-${index}`}
              poke={pokemon}
              ref={index === pokemons.length - 1 ? observerRef : undefined}
            />
          ))}
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
            {[...Array(6)].map((_, index) => (
              <PokemonCardSkeleton key={index} />
            ))}
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-gray-600 text-lg">
              Error loading Pokemon. Please try again.
            </p>
            <button
              onClick={loadMorePokemons}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Retry
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const initialPokemons = await fetchPokemons(0);

    return {
      props: {
        initialPokemons,
      },
      revalidate: 60 * 60 * 24, // 24 hours
    };
  } catch (error) {
    console.error("Error fetching initial Pokemon:", error);
    return {
      props: {
        initialPokemons: [],
      },
      revalidate: 60, // Try again in 1 minute if there was an error
    };
  }
};
