import { NextPage } from "next";
import { useCallback, useState } from "react";

import { Status } from "../../types/PokemonTypes";

import { ProgressBar } from "../ProgressBar";
import { EvolutionsTab } from "../EvolutionsTab";

export const TabContainer: NextPage<Status> = ({
  pokemonAbilities,
  pokemonStatus,
  pokemonData,
}) => {
  const types = ["Abilities", "Status", "Evolutions"];

  const [active, setActive] = useState(types[0]);

  const getProgressColor = useCallback((value: number) => {
    if (value <= 25) return "var(--fire)";
    if (value <= 50) return "var(--fighting)";
    if (value <= 75) return "var(--ground)";
    if (value <= 100) return "var(--electric)";
    if (value <= 125) return "var(--normal)";
    if (value <= 150) return "var(--grass)";
    if (value <= 175) return "var(--bug)";
    return "var(--dragon)";
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap sm:flex-wrap gap-2 p-4 sm:p-6 min-w-max sm:min-w-0 bg-gradient-to-r from-gray-50 via-white to-gray-50">
          {types.map((type) => (
            <button
              key={type}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 transform
                ${
                  active === type
                    ? "bg-gray-900 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              onClick={() => setActive(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6 animate-fadeIn">
        {active === types[0] && (
          <div className="grid gap-4 sm:gap-6">
            {pokemonAbilities?.map(({ key, abilities }) => (
              <div
                key={key}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {key}
                    </h3>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                </div>
                <div className="space-y-4">
                  {abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-white/50 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <div className="relative space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900">
                            Ability {index + 1}
                          </h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-3.5 whitespace-pre-wrap">
                          {ability}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {active === types[1] && (
          <div className="grid gap-4 sm:gap-6">
            {pokemonStatus?.map((status, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: getProgressColor(status.value),
                      }}
                    />
                    <h3 className="text-lg font-bold text-gray-900">
                      {status.key}
                    </h3>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-4" />
                </div>
                <ProgressBar
                  valueStatus={status.value}
                  color={getProgressColor(status.value)}
                />
              </div>
            ))}
          </div>
        )}

        {active === types[2] && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5">
            <EvolutionsTab idPokemon={pokemonData.id} />
          </div>
        )}
      </div>
    </div>
  );
};
