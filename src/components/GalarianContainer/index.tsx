import { NextPage } from "next";

import * as Styled from "../../styles/GalarianContainer";
import { GalarContainerProps } from "../../types/PokemonGalar";
import GalarianCard from "../GalarianCard";

const GalarianContainer: NextPage<GalarContainerProps> = ({
  id,
  isGalar,
  name,
}) => {
  return (
    <Styled.GalarianContainer>
      <GalarianCard id={id} isGalar={isGalar} name={name} />
    </Styled.GalarianContainer>
  );
};

export default GalarianContainer;
