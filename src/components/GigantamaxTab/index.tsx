import Image from "next/image";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { makeURL, makeURLGmax } from "../../utils/getPokemonImages";

import { CardContainer } from "./styles";

export interface GmaxContainerProps {
  id: string;
  name: string;
  isGmax: boolean;
}

export const GigantamaxTab: NextPage<GmaxContainerProps> = ({
  isGmax,
  id,
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
          <Image src={gmax} width={500} height={500} />
          <p>Gigantamax {name}</p>
          <span>#{id.padStart(3, "0")}</span>
        </>
      ) : (
        <p>Não possui Gmax</p>
      )}
    </CardContainer>
  );
};
