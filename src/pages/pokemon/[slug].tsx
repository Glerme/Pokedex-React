import { GetServerSideProps, NextPage } from "next";

import NomePokemon from "../../components/NomePokemon";
import TipoPokemon from "../../components/TipoPokemon";
import DescricaoPokemonContainer from "../../components/DescricaoPokemonContainer";
import ImagePokemon from "../../components/ImagePokemon";
import Header from "../../components/Header";

import { getPokemonImage } from "../../utils/getPokemonImages";

import * as Styled from "../../styles/Home";

import { api } from "../../services/api";

import { formatAbilities } from "../../utils/formatAbilities";

import {
  Evolucao,
  PokemonAbilitiesProps,
  PokemonData,
  PokemonStatusProps,
} from "../../types/PokemonTypes";
import Head from "next/head";
import { useLoader } from "../../hooks/loader";
import Loader from "../../components/Loader";

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
  const { addLoader, isLoader, removeLoader } = useLoader();

  const isAlola = !!pokemonData.name.match(/alola/g);
  const isGmax = !!pokemonData.name.match(/gmax/g);

  console.log("pokemonData.name", isAlola);

  return (
    <>
      <Head>
        <title>
          Pokedex | {pokemonData.name.toUpperCase()} - #{pokemonData.id}
        </title>
      </Head>
      <Header />
      {pokemonData && (
        <>
          {isLoader ? (
            <Loader />
          ) : (
            <>
              <Styled.ContainerCardPokemon>
                <NomePokemon name={pokemonData?.name} id={pokemonData?.id} />
                <ImagePokemon
                  idPokemonSprite={getPokemonImage(pokemonData?.id)}
                  colorPkm={pokemonData?.types[0].type.name}
                  name={pokemonData?.name}
                  alolan={isAlola}
                  isGmax={isGmax}
                />
                <TipoPokemon
                  type1={pokemonData?.types[0].type.name}
                  type2={pokemonData.types[1]?.type.name}
                />
              </Styled.ContainerCardPokemon>
              <DescricaoPokemonContainer
                pokemonAbilities={pokemonAbilities}
                pokemonStatus={pokemonStatus}
                pokemonData={pokemonData}
                isAlola={isAlola}
                isGmax={isGmax}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Pokemon;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};
