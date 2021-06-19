import { NextPage } from "next";

import { CardContainer } from "../../styles/AlolaCard";

import { GalarContainerProps } from "../../types/PokemonGalar";

import { useCallback, useEffect, useState } from "react";
import { makeURL, makeURLGalar } from "../../utils/getPokemonImages";
import axios from "axios";

const GalarianCard: NextPage<GalarContainerProps> = ({ id, isGalar, name }) => {
  const [galarUrl, setGalarUrl] = useState<string>("");

  const getGalar = useCallback(async () => {
    if (isGalar) {
      const imagesURLs = makeURL(name);
      setGalarUrl(imagesURLs);

      return;
    } else {
      const imagesURLs = makeURLGalar(name);

      try {
        const { status } = await axios.get(imagesURLs);

        if (status === 404) {
          const imagePokemonNormal = makeURL(id.padStart(3, "0"));
          setGalarUrl(imagePokemonNormal);
          return;
        }

        setGalarUrl(imagesURLs);
      } catch (error) {
        console.error(error);
      }
    }
  }, [galarUrl]);

  useEffect(() => {
    getGalar();
  }, []);

  return (
    <>
      <CardContainer>
        {galarUrl ? (
          <>
            <img src={galarUrl} />
            <p>Galarian {name}</p>
            <span>#{id.padStart(3, "0")}</span>
          </>
        ) : (
          <p>Não possui Galarian Form</p>
        )}
      </CardContainer>
    </>
  );
};

export default GalarianCard;
