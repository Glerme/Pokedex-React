import { NextPage } from "next";

import { ContainerPokemon } from "./styles";
import { formatId } from "../../utils/formatId";

interface NamePokemonProps {
  name: string;
  id: number;
}

const NomePokemon: NextPage<NamePokemonProps> = ({ id, name }) => {
  const newId = formatId(id);

  return (
    <ContainerPokemon>
      <h3>{name}</h3>
      <span>#{newId}</span>
    </ContainerPokemon>
  );
};

export default NomePokemon;
