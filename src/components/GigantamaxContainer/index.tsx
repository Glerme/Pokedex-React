import { NextPage } from "next";

import * as Styled from "../../styles/GigantamaxContainer";
import { GmaxContainerProps } from "../../types/PokemonGmax";
import CardGigantamax from "../CardGigantamax";

const GigantamaxContainer: NextPage<GmaxContainerProps> = ({
  isGmax,
  id,
  name,
}) => {
  return (
    <Styled.GigantamaxContainer>
      <CardGigantamax id={id} isGmax={isGmax} name={name} />
    </Styled.GigantamaxContainer>
  );
};

export default GigantamaxContainer;
