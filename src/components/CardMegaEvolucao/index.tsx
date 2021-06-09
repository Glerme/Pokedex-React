import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import axios from "axios";

import { makeURLM, makeURlMega } from "../../utils/getPokemonImages";

import { EvolutionProps } from "../../types/PokemonEvolution";

import * as Styled from "../../styles/MegaEvolutionCard";

const CardMegaEvolucao: NextPage<EvolutionProps> = ({ id, name }) => {
  const [megaEvolutionsURLs, setMegaEvolutionURLs] = useState<string[]>();

  const getMega = useCallback(async () => {
    try {
      const imagesURLs = makeURLM(name);

      if (imagesURLs[1]) {
        setMegaEvolutionURLs([...imagesURLs]);
        return;
      }

      // setMegaEvolutionURLs([imagesURLs]);

      // await axios.get(imagesURLs[0]);
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
            <img alt={name} src={evolutionURL} />

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
