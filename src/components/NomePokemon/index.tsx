import { NextPage } from "next";

interface NamePokemonProps {
  name: string;
  id: number;
}

export const NomePokemon: NextPage<NamePokemonProps> = ({ id, name }) => {
  const formatId = (id: number) => {
    return id.toString().padStart(3, "0");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center bg-gray-100 px-3 py-1.5 rounded-lg text-lg sm:text-xl font-bold text-gray-600">
          #{formatId(id)}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize text-gray-900">
          {name}
        </h1>
      </div>
    </div>
  );
};
