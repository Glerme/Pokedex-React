import { NextPage } from "next";

import { Container } from "./styles";
import { GalarContainerProps } from "../../types/PokemonGalar";
import { GalarianCard } from "../GalarianCard";

export const GalarianContainer: NextPage<GalarContainerProps> = ({
  id,
  isGalar,
  name,
}) => {
  return (
    <Container>
      <GalarianCard id={id} isGalar={isGalar} name={name} />
    </Container>
  );
};
