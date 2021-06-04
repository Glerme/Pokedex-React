import { NextPage } from "next";
import { AlolaContainerProps } from "../../types/PokemonAlola";
import { CardContainer } from "../../styles/AlolaCard";
import { makeURL, makeURLAlola } from "../../utils/getPokemonImages";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const AlolaCard: NextPage<AlolaContainerProps> = ({ id, name, isAlola }) => {
  const [alolanURLS, setAlolanURLS] = useState<string>("");

  const getAlolan = useCallback(async () => {
    if (isAlola) {
      const imagesURLs = makeURL(name);
      setAlolanURLS(imagesURLs);

      return;
    } else {
      const imagesURLs = makeURLAlola(name);

      try {
        const { status } = await axios.get(imagesURLs);

        if (status === 404) {
          const imagePokemonNormal = makeURL(id.padStart(3, "0"));
          setAlolanURLS(imagePokemonNormal);
          return;
        }

        setAlolanURLS(imagesURLs);
      } catch (error) {
        console.error(error);
      }
    }
  }, [alolanURLS]);

  useEffect(() => {
    getAlolan();
  }, []);

  return (
    <>
      <CardContainer>
        {isAlola ? (
          <>
            <img alt={name} src={alolanURLS} />
            <p>Alolan {name}</p>
            <span>#{id.padStart(3, "0")}</span>
          </>
        ) : (
          <>
            {alolanURLS ? (
              <>
                <img src={alolanURLS} />
                <p>Alolan {name}</p>
                <span>#{id.padStart(3, "0")}</span>
              </>
            ) : (
              <p>Não possui Alolan Form</p>
            )}
          </>
        )}
      </CardContainer>
    </>
  );
};

export default AlolaCard;
