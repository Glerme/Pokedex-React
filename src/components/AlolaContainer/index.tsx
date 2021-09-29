import { NextPage } from "next";

import { Container } from "./styles";

import { AlolaContainerProps } from "../../types/PokemonAlola";

import { AlolaCard } from "../AlolaCard";

export const AlolaContainer: NextPage<AlolaContainerProps> = ({
  id,
  name,
  isAlola,
}) => {
  return (
    <Container>
      <AlolaCard id={id} name={name} isAlola={isAlola} />
    </Container>
  );
};
