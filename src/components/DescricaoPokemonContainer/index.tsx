import { NextPage } from "next";

import { Status } from "../../types/PokemonTypes";

import Tabs from "../Tabs";

const DescricaoPokemonContainer: NextPage<Status> = ({
  pokemonAbilities,
  pokemonStatus,
  pokemonData,
  isAlola,
  isGmax,
  isGalarian,
  isMega,
}) => {
  return (
    <Tabs
      isAlola={isAlola}
      pokemonAbilities={pokemonAbilities}
      pokemonStatus={pokemonStatus}
      pokemonData={pokemonData}
      isGmax={isGmax}
      isGalarian={isGalarian}
      isMega={isMega}
    />
  );
};

export default DescricaoPokemonContainer;
