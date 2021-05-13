import { NextPage } from "next";

import { Status } from "../../types/PokemonTypes";

import Tabs from "../Tabs";

const StatusPokemon: NextPage<Status> = ({
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

export default StatusPokemon;
