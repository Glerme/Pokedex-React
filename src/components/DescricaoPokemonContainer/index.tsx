import { NextPage } from "next";

import { Status } from "../../types/PokemonTypes";

import Tabs from "../Tabs";

const DescricaoPokemonContainer: NextPage<Status> = ({
  pokemonAbilities,
  pokemonStatus,
  pokemonData,
}) => {
  return (
    <Tabs
      pokemonAbilities={pokemonAbilities}
      pokemonStatus={pokemonStatus}
      pokemonData={pokemonData}
    />
  );
};

export default DescricaoPokemonContainer;
