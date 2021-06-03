import { NextPage } from "next";

import * as Styled from "../../styles/NamePokemon";
import { formatId } from "../../utils/formatId";

interface NamePokemonProps {
  name: string;
  id: number;
}

const NomePokemon: NextPage<NamePokemonProps> = ({ id, name }) => {
  const newId = formatId(id);

  return (
    <Styled.ContainerPokemon>
      <h3>{name}</h3>
      <span>#{newId}</span>
    </Styled.ContainerPokemon>
  );
};

export default NomePokemon;
