import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPokemonImage } from "../../utils/pokemonImageUtils";

interface Card {
  poke: {
    id: string;
    name: string;
    types: string[];
  };
}

export const HomeCards = forwardRef<HTMLDivElement, Card>(({ poke }, ref) => {
  const getTypeColor = (type: string) => {
    return `bg-${type.toLowerCase()}`;
  };

  return (
    <div ref={ref}>
      <Link href={`/pokemon/${poke.id}`}>
        <div
          className={`rounded-2xl p-4 shadow-md transition-transform hover:scale-105 ${getTypeColor(
            poke.types[0]
          )}`}
        >
          <header className="flex justify-between items-center mb-4">
            <h3 className="text-white text-xl font-bold capitalize">
              {poke.name}
            </h3>
            <p className="text-white/80 text-lg">
              #{poke.id.toString().padStart(3, "0")}
            </p>
          </header>
          <main className="relative w-full aspect-square">
            <Image
              src={getPokemonImage({
                name: poke.name,
                fallback: "/images/pokemon-placeholder.png",
              })}
              alt={poke.name}
              width={400}
              height={400}
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={parseInt(poke.id) <= 12}
            />
          </main>
          <footer className="flex gap-2 mt-4">
            {poke.types.map((type, index) => (
              <div
                key={index}
                className={`px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm`}
              >
                <div className="flex items-center gap-1">
                  <img
                    src={`/pokemonTypes/${type}.svg`}
                    alt={type}
                    className="w-4 h-4"
                  />
                  <span className="text-white text-sm capitalize">{type}</span>
                </div>
              </div>
            ))}
          </footer>
        </div>
      </Link>
    </div>
  );
});
