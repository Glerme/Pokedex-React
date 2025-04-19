import { NextPage } from "next";
import Image from "next/image";

interface ImagePokemonProps {
  type1: string;
  type2: string;
}

export const TipoPokemon: NextPage<ImagePokemonProps> = ({ type1, type2 }) => {
  const TypeBadge = ({ type }: { type: string }) => (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-white capitalize shadow-md backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{ backgroundColor: `var(--${type.toLowerCase()})` }}
    >
      <div className="w-5 h-5 relative flex items-center justify-center">
        <Image
          alt={type}
          src={`/pokemonTypes/${type}.svg`}
          width={20}
          height={20}
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>
      <span className="text-sm font-semibold tracking-wide">{type}</span>
    </div>
  );

  return (
    <div className="p-3 mx-auto">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <TypeBadge type={type1} />
        {type2 && <TypeBadge type={type2} />}
      </div>
    </div>
  );
};
