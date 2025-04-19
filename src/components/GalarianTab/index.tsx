import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { getPokemonImage } from "../../utils/pokemonImageUtils";

interface GalarContainerProps {
  id: string;
  name: string;
  isGalar: boolean;
}

export const GalarianTab: NextPage<GalarContainerProps> = ({
  id,
  isGalar,
  name,
}) => {
  const [galarUrl, setGalarUrl] = useState<string>("");

  const getGalar = useCallback(async () => {
    if (isGalar) {
      const imagesURLs = getPokemonImage({ name, form: "galar" });
      setGalarUrl(imagesURLs);

      return;
    } else {
      const imagesURLs = getPokemonImage({ name, form: "galar" });

      try {
        const { status } = await axios.get(imagesURLs);

        if (status === 404) {
          const imagePokemonNormal = getPokemonImage({
            name: id.padStart(3, "0"),
          });
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
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      {galarUrl ? (
        <>
          <div className="relative w-64 h-64 mb-4">
            <Image
              src={galarUrl}
              alt={`Galarian ${name}`}
              width={256}
              height={256}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-medium capitalize text-gray-900">
              Galarian {name}
            </p>
            <span className="text-sm text-gray-500">
              #{id.padStart(3, "0")}
            </span>
          </div>
        </>
      ) : (
        <p className="text-lg text-gray-600">Não possui Galarian Form</p>
      )}
    </div>
  );
};
