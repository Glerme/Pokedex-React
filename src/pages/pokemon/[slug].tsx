import Head from "next/head";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";

import { api } from "../../services/api";

import { getPokemonImage } from "../../utils/getPokemonImages";
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

import { Container } from "./styles";

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
  const isAlola = !!pokemonData.name.match(/alola/g);
  const isGmax = !!pokemonData.name.match(/gmax/g);
  const isGalarian = !!pokemonData.name.match(/galar/g);
  const isMega = !!pokemonData.name.match(/Mega/g);

  return (
    <>
      <Head>
        <title>
          Pokedex | {pokemonData.name.toUpperCase()} - #
          {pokemonData.id.toString().padStart(3, "0")}
        </title>
      </Head>
      <Header />
      {pokemonData && (
        <>
          <Container>
            <NomePokemon name={pokemonData.name} id={pokemonData.id} />
            <ImagePokemon
              idPokemonSprite={pokemonData.id}
              colorPkm={pokemonData.types[0].type.name}
              name={pokemonData.name}
            />
            <TipoPokemon
              type1={pokemonData.types[0].type.name}
              type2={pokemonData.types[1]?.type.name}
            />
          </Container>
          <TabContainer
            idPokemon={pokemonData.id}
            pokemonAbilities={pokemonAbilities}
            pokemonStatus={pokemonStatus}
            pokemonData={pokemonData}
            isAlola={isAlola}
            isGmax={isGmax}
            isGalarian={isGalarian}
            isMega={isMega}
          />
        </>
      )}
    </>
  );
};

export default Pokemon;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { slug } = ctx.params;

    const { data: pokemonData } = await api.get<PokemonData>(
      `/pokemon/${slug}`
    );

    const statusKeys = [...new Set(pokemonData.stats.map((s) => s.stat.name))];

    const parsedStatus = statusKeys.map((key) => {
      return {
        key: key.toUpperCase(),
        value: pokemonData.stats.filter((s) => s.stat.name === key)[0]
          .base_stat,
      };
    });

    const formatedAbilities = formatAbilities(pokemonData.abilities);

    if (!pokemonData) {
      return {
        props: {},
      };
    }

    return {
      props: {
        pokemonData,
        pokemonStatus: parsedStatus,
        pokemonAbilities: formatedAbilities,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};
