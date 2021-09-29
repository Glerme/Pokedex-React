import axios from "axios";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import { CardContainer } from "./styles";
import { GmaxContainerProps } from "../../types/PokemonGmax";
import { makeURL, makeURLGmax } from "../../utils/getPokemonImages";

export const CardGigantamax: NextPage<GmaxContainerProps> = ({
  id,
  isGmax,
  name,
}) => {
  const [gmax, setGmax] = useState<string>("");

  const getGalar = useCallback(async () => {
    if (isGmax) {
      const imagesURLs = makeURL(name);
      setGmax(imagesURLs);

      return;
    } else {
      const imagesURLs = makeURLGmax(name);

      try {
        const { status } = await axios.get(imagesURLs);

        if (status === 404) {
          const imagePokemonNormal = makeURL(id.padStart(3, "0"));
          setGmax(imagePokemonNormal);
          return;
        }

        setGmax(imagesURLs);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    getGalar();
  }, []);

  return (
    <CardContainer>
      {gmax ? (
        <>
          <img src={gmax} />
          <p>Gigantamax {name}</p>
          <span>#{id.padStart(3, "0")}</span>
        </>
      ) : (
        <p>Não possui Gmax</p>
      )}
    </CardContainer>
  );
};
