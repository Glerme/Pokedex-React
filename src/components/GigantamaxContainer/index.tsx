import { NextPage } from "next";

import { Container } from "./styles";
import { GmaxContainerProps } from "../../types/PokemonGmax";
import CardGigantamax from "../CardGigantamax";

const GigantamaxContainer: NextPage<GmaxContainerProps> = ({
  isGmax,
  id,
  name,
}) => {
  return (
    <Container>
      <CardGigantamax id={id} isGmax={isGmax} name={name} />
    </Container>
  );
};

export default GigantamaxContainer;
