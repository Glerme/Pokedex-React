import { NextPage } from "next";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { getPokemonImage } from "../../utils/pokemonImageUtils";

export interface AlolaContainerProps {
  id: string;
  name: string;
  isAlola: boolean;
}

export const AlolaTab: NextPage<AlolaContainerProps> = ({
  id,
  name,
  isAlola,
}) => {
  const [alolanURLS, setAlolanURLS] = useState<string>("");

  const getAlolan = useCallback(async () => {
    if (isAlola) {
      const imagesURLs = getPokemonImage({ name, form: "alola" });
      setAlolanURLS(imagesURLs);

      return;
    } else {
      const imagesURLs = getPokemonImage({ name, form: "alola" });

      try {
        const { status } = await axios.get(imagesURLs);

        if (status === 404) {
          const imagePokemonNormal = getPokemonImage({
            name: id.padStart(3, "0"),
          });
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
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      {isAlola ? (
        <>
          <div className="relative w-64 h-64 mb-4">
            <Image
              src={alolanURLS}
              alt={`Alolan ${name}`}
              width={256}
              height={256}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-medium capitalize text-gray-900">
              Alolan {name}
            </p>
            <span className="text-sm text-gray-500">
              #{id.padStart(3, "0")}
            </span>
          </div>
        </>
      ) : (
        <>
          {alolanURLS ? (
            <>
              <div className="relative w-64 h-64 mb-4">
                <Image
                  src={alolanURLS}
                  alt={`Alolan ${name}`}
                  width={256}
                  height={256}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium capitalize text-gray-900">
                  Alolan {name}
                </p>
                <span className="text-sm text-gray-500">
                  #{id.padStart(3, "0")}
                </span>
              </div>
            </>
          ) : (
            <p className="text-lg text-gray-600">Não possui Alolan Form</p>
          )}
        </>
      )}
    </div>
  );
};
