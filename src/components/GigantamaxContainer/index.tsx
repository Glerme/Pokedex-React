import { NextPage } from "next";

import * as Styled from "../../styles/GigantamaxContainer";
import CardGigantamax from "../CardGigantamax";

interface GigantamaxProps {
  isGmax: boolean;
}

const GigantamaxContainer: NextPage<GigantamaxProps> = ({ isGmax }) => {
  return (
    <Styled.GigantamaxContainer>
      <CardGigantamax></CardGigantamax>
    </Styled.GigantamaxContainer>
  );
};

export default GigantamaxContainer;
