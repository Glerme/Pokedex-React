import Image from "next/image";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { getPokemonImage } from "../../utils/pokemonImageUtils";

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
      const imagesURLs = getPokemonImage({ name, form: "gmax" });
      setGmax(imagesURLs);

      return;
    } else {
      const imagesURLs = getPokemonImage({ name, form: "gmax" });

      try {
        const { status } = await axios.get(imagesURLs);

        if (status === 404) {
          const imagePokemonNormal = getPokemonImage({
            name: id.padStart(3, "0"),
          });
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
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      {gmax ? (
        <>
          <div className="relative w-64 h-64 mb-4">
            <Image
              src={gmax}
              alt={`Gigantamax ${name}`}
              width={256}
              height={256}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-medium capitalize text-gray-900">
              Gigantamax {name}
            </p>
            <span className="text-sm text-gray-500">
              #{id.padStart(3, "0")}
            </span>
          </div>
        </>
      ) : (
        <p className="text-lg text-gray-600">Não possui Gmax</p>
      )}
    </div>
  );
};
