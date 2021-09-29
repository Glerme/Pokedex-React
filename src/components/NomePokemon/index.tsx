import { NextPage } from "next";

import { ContainerPokemon } from "./styles";

interface NamePokemonProps {
  name: string;
  id: number;
}

export const NomePokemon: NextPage<NamePokemonProps> = ({ id, name }) => {
  const formatId = (id: number) => {
    const newId = id.toString().padStart(3, "0");
    return newId;
  };

  return (
    <ContainerPokemon>
      <h3>{name}</h3>
      <span>#{formatId(id)}</span>
    </ContainerPokemon>
  );
};
