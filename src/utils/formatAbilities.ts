import { Abilities, PokemonAbilitiesProps } from "../types/PokemonTypes";

export const formatAbilities = (
  abilities: Abilities[]
): PokemonAbilitiesProps[] => {
  let normalAbilities = [];
  let ocultAbilities = [];

  abilities.forEach((ability) => {
    if (ability.is_hidden) {
      ocultAbilities = [...ocultAbilities, ability.ability.name];
    } else {
      normalAbilities = [...normalAbilities, ability.ability.name];
    }
  });

  const parsedAbilities = [
    {
      key: "ABILITIES",
      abilities: normalAbilities,
    },
    {
      key: "HIDDEN ABILITIES",
      abilities: ocultAbilities,
    },
  ];

  return parsedAbilities;
};
