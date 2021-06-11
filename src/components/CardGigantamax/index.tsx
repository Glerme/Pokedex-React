import axios from "axios";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import * as Styled from "../../styles/CardGigantamax";
import { GmaxContainerProps } from "../../types/PokemonGmax";
import { makeURL, makeURLGmax } from "../../utils/getPokemonImages";

const CardGigantamax: NextPage<GmaxContainerProps> = ({ id, isGmax, name }) => {
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
  console.log("gmax", gmax);
  return (
    <Styled.CardContainer>
      {gmax ? (
        <>
          <img src={gmax} />
          <p>Gigantamax {name}</p>
          <span>#{id.padStart(3, "0")}</span>
        </>
      ) : (
        <p>Não possui Gmax</p>
      )}
    </Styled.CardContainer>
  );
};

export default CardGigantamax;
