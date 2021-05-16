import { NextPage } from "next";

import { makeURlMega } from "../../utils/getPokemonImages";

import * as Styled from "../../styles/MegaEvolutionCard";

import { EvolutionProps } from "../../types/PokemonEvolution";

const MegaEvolutionCard: NextPage<EvolutionProps> = ({ id, name }) => {
  const imagem = makeURlMega(Number(id), name);

  return (
    <Styled.MegaEvolutionCardContainer>
      {imagem
        ? imagem.map((imgMega, index) => (
            <div key={index}>
              <img src={imgMega} alt={imgMega} />
              <p>Mega {name}</p>
              <span>#{id.padStart(3, "0")}</span>
            </div>
          ))
        : ""}
    </Styled.MegaEvolutionCardContainer>
  );
};

export default MegaEvolutionCard;
