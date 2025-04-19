import { NextPage } from "next";
import Image from "next/image";
import { useMemo } from "react";
import { getPokemonImage } from "../../utils/pokemonImageUtils";

interface ImagePokemonProps {
  idPokemonSprite: number;
  colorPkm: string;
  name: string;
}

export const ImagePokemon: NextPage<ImagePokemonProps> = ({
  idPokemonSprite,
  colorPkm,
  name,
}) => {
  const imageUrl = useMemo(
    () =>
      getPokemonImage({
        id: idPokemonSprite,
        fallback: "/images/pokemon-placeholder.png",
      }),
    [idPokemonSprite]
  );

  return (
    <div className="relative group max-w-xl mx-auto">
      <div
        className="relative w-full aspect-square rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        style={{ backgroundColor: `var(--${colorPkm})` }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-tl from-black/10 to-transparent opacity-30" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/20 via-transparent to-transparent animate-ping" />
          </div>
        </div>

        <div className="relative w-full h-full z-10 flex items-center justify-center">
          <div className="transform transition-all duration-500 group-hover:scale-110 will-change-transform">
            <Image
              src={imageUrl}
              alt={`${name} pokemon`}
              width={300}
              height={300}
              className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] motion-safe:animate-float"
              priority={idPokemonSprite <= 12}
              quality={90}
            />
          </div>
        </div>

        <div className="absolute bottom-3 right-4 text-white/20 font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 group-hover:text-white/30">
          #{idPokemonSprite.toString().padStart(3, "0")}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
};
