import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { makeURL, makeURLM } from "../../utils/getPokemonImages";

import { EvolutionProps } from "../../types/PokemonEvolution";

import { MegaEvolutionCardContainer } from "./styles";

export const CardMegaEvolucao: NextPage<EvolutionProps> = ({
  id,
  name,
  isMega,
}) => {
  const [imagemMega, setImagemMega] = useState<string[]>();

  const getMega = useCallback(async () => {
    if (isMega) {
      const imagesURLs = makeURL(name);
      setImagemMega([imagesURLs]);

      return;
    } else {
      const imagesURLs = makeURLM(name);

      try {
        const { status } = await axios.get(imagesURLs[0]);

        if (status === 404) {
          setImagemMega(["Não possui mega"]);
          return;
        }
      } catch (error) {
        console.error({ error });
        return;
      }

      setImagemMega(imagesURLs);
      return;
    }
  }, []);

  useEffect(() => {
    getMega();
  }, []);

  return (
    <MegaEvolutionCardContainer>
      {imagemMega ? (
        imagemMega.map((evolutionURL, index) => (
          <div key={index}>
            <img alt={name} src={evolutionURL} />

            <p>Mega {name}</p>
            <span>#{id.padStart(3, "0")}</span>
          </div>
        ))
      ) : (
        <p>Nenhuma Mega Evolução.</p>
      )}
    </MegaEvolutionCardContainer>
  );
};
