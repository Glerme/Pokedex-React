import Image from "next/image";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { getPokemonImage } from "../../utils/pokemonImageUtils";

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
      const imagesURLs = getPokemonImage({ name, form: "mega" });
      setImagemMega([imagesURLs]);

      return;
    } else {
      const imagesURLs = getPokemonImage({ name, form: "mega" });

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {imagemMega ? (
        imagemMega.map((evolutionURL, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative w-48 h-48 mb-4">
              <Image
                alt={name}
                src={evolutionURL}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            <div className="flex items-center gap-2">
              <p className="text-lg font-medium capitalize text-gray-900">
                Mega {name}
              </p>
              <span className="text-sm text-gray-500">
                #{id.padStart(3, "0")}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg text-gray-600">Nenhuma Mega Evolução.</p>
      )}
    </div>
  );
};
