import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import axios from "axios";

import { makeURlMega } from "../../utils/getPokemonImages";

import { EvolutionProps } from "../../types/PokemonEvolution";

import * as Styled from "../../styles/MegaEvolutionCard";

const CardMegaEvolucao: NextPage<EvolutionProps> = ({ id, name }) => {
  const [megaEvolutionsURLs, setMegaEvolutionURLs] = useState<string[]>([]);

  const getMega = useCallback(async () => {
    try {
      const imagesURLs = makeURlMega(Number(id), name);

      await axios.get(imagesURLs[0]);

      setMegaEvolutionURLs(imagesURLs);
    } catch (err) {
      setMegaEvolutionURLs([]);
    }
  }, []);

  useEffect(() => {
    getMega();
  }, []);

  return (
    <Styled.MegaEvolutionCardContainer>
      {megaEvolutionsURLs.length > 0 ? (
        megaEvolutionsURLs.map((evolutionURL, index) => (
          <div key={index}>
            <img alt={name} src={evolutionURL} srcSet={evolutionURL} />

            <p>Mega {name}</p>
            <span>#{id.padStart(3, "0")}</span>
          </div>
        ))
      ) : (
        <p>Nenhuma Mega Evolução.</p>
      )}
    </Styled.MegaEvolutionCardContainer>
  );
};

export default CardMegaEvolucao;
