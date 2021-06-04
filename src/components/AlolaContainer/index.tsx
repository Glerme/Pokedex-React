import { NextPage } from "next";

import * as Styled from "../../styles/AlolaContainer";
import { AlolaContainerProps } from "../../types/PokemonAlola";
import AlolaCard from "../AlolaCard";

const AlolaContainer: NextPage<AlolaContainerProps> = ({
  id,
  name,
  isAlola,
}) => {
  return (
    <Styled.AlolaContainer>
      <AlolaCard id={id} name={name} isAlola={isAlola} />
    </Styled.AlolaContainer>
  );
};

export default AlolaContainer;
