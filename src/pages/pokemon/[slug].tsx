import { GetServerSideProps, NextPage } from "next";

import NamePokemon from "../../components/NamePokemon";
import Type from "../../components/Type";
import StatusPokemon from "../../components/StatusPokemon";
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
          Pokedex | {pokemonData.name.toUpperCase()} - #{pokemonData.id}
        </title>
      </Head>
      <Header />
      {pokemonData ? (
        <>
          <Styled.ContainerCardPokemon>
            <NamePokemon name={pokemonData.name} id={pokemonData.id} />
            <ImagePokemon
              idPokemonSprite={getPokemonImage(pokemonData.id)}
              colorPkm={pokemonData.types[0].type.name}
              name={pokemonData.name}
            />
            <Type
              type1={pokemonData.types[0].type.name}
              type2={pokemonData.types[1]?.type.name}
            />
          </Styled.ContainerCardPokemon>
          <StatusPokemon
            pokemonAbilities={pokemonAbilities}
            pokemonStatus={pokemonStatus}
            pokemonData={pokemonData}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Pokemon;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data: pokemonData } = await api.get<PokemonData>(`/pokemon/${slug}`);

  const statusKeys = [...new Set(pokemonData.stats.map((s) => s.stat.name))];

  const parsedStatus = statusKeys.map((key) => {
    return {
      key: key.toUpperCase(),
      value: pokemonData.stats.filter((s) => s.stat.name === key)[0].base_stat,
    };
  });

  const formatedAbilities = formatAbilities(pokemonData.abilities);

  return {
    props: {
      pokemonData,
      pokemonStatus: parsedStatus,
      pokemonAbilities: formatedAbilities,
    },
  };
};
