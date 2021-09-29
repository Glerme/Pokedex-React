import Image from "next/image";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { makeURL, makeURLM } from "../../utils/getPokemonImages";

import { MegaEvolutionCardContainer } from "./styles";

interface EvolutionProps {
  id: string;
  name: string;
  isMega: boolean;
}

export const MegaEvolutionsTab: NextPage<EvolutionProps> = ({
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
            <Image alt={name} src={evolutionURL} width={400} height={400} />

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
