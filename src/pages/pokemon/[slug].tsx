import Head from "next/head";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { useRouter } from "next/router";

import { api } from "../../services/api";

import { formatAbilities } from "../../utils/formatAbilities";

import {
  Evolucao,
  PokemonAbilitiesProps,
  PokemonData,
  PokemonStatusProps,
} from "../../types/PokemonTypes";

import { Header } from "../../components/Header";
import { NomePokemon } from "../../components/NomePokemon";
import { TipoPokemon } from "../../components/TipoPokemon";
import { ImagePokemon } from "../../components/ImagePokemon";
import { TabContainer } from "../../components/TabContainer";

interface PokemonProps {
  pokemonData: PokemonData;
  pokemonStatus: PokemonStatusProps[];
  pokemonAbilities: PokemonAbilitiesProps[];
  evolucao: Evolucao;
}

const Pokemon: NextPage<PokemonProps> = ({
  pokemonData,
  pokemonStatus,
  pokemonAbilities,
}) => {
  return (
    <>
      <Head>
        <title>
          Pokedex | {pokemonData.name.toUpperCase()} - #
          {pokemonData.id.toString().padStart(3, "0")}
        </title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {pokemonData && (
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
              <NomePokemon name={pokemonData.name} id={pokemonData.id} />

              <div className="flex flex-col items-center gap-6 sm:gap-8">
                <ImagePokemon
                  idPokemonSprite={pokemonData.id}
                  colorPkm={pokemonData.types[0].type.name}
                  name={pokemonData.name}
                />
                <TipoPokemon
                  type1={pokemonData.types[0].type.name}
                  type2={pokemonData.types[1]?.type.name}
                />
              </div>

              <TabContainer
                idPokemon={pokemonData.id}
                pokemonAbilities={pokemonAbilities}
                pokemonStatus={pokemonStatus}
                pokemonData={pokemonData}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pokemon;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await api.get(`/pokemon/${params?.slug}`);
    const { data: species } = await api.get(data.species.url);

    const statusKeys = [
      ...new Set(data.stats.map((s) => s.stat.name)),
    ] as string[];

    const parsedStatus = statusKeys.map((key) => {
      return {
        key: key.toUpperCase(),
        value: data.stats.filter((s) => s.stat.name === key)[0].base_stat,
      };
    });

    const formatedAbilities = formatAbilities(data.abilities);

    return {
      props: {
        pokemonData: data,
        pokemonStatus: parsedStatus,
        pokemonAbilities: formatedAbilities,
        species,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (error) {
    return {
      redirect: {
        destination: `/pokemon-not-found?name=${params?.slug}`,
        permanent: false,
      },
    };
  }
};
