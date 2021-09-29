import { NextPage } from "next";
import { useCallback, useState } from "react";

import { Status } from "../../types/PokemonTypes";

import { AlolaTab } from "../AlolaTab";
import { ProgressBar } from "../ProgressBar";
import { GalarianTab } from "../GalarianTab";
import { EvolutionsTab } from "../EvolutionsTab";
import { GigantamaxTab } from "../GigantamaxTab";
import { MegaEvolutionsTab } from "../MegaEvolutionsTab";

import { ButtonGroup, ContainerStatus, Content, Tab } from "./styles";

export const TabContainer: NextPage<Status> = ({
  idPokemon,
  pokemonAbilities,
  pokemonStatus,
  pokemonData,
  isAlola,
  isGmax,
  isGalarian,
  isMega,
}) => {
  const types = [
    "Abilities",
    "Status",
    "Evolutions",
    "Mega-Evolution",
    "Gigantamax",
    "Alolan",
    "Galarian",
  ];

  const [active, setActive] = useState(types[0]);

  const getProgressColor = useCallback((value: number) => {
    if (value <= 25) {
      return "#ff0202";
    } else if (value <= 50) {
      return "#d84545";
    } else if (value <= 75) {
      return "#eb6913";
    } else if (value <= 100) {
      return "#fac002";
    } else if (value <= 125) {
      return "#f7df0f";
    } else if (value <= 150) {
      return "#aae762";
    } else if (value <= 175) {
      return "#62da33";
    } else if (value <= 200) {
      return "#1fbd00";
    }
  }, []);

  return (
    <ContainerStatus>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>

      {active === types[0] && (
        <Content>
          {pokemonAbilities &&
            pokemonAbilities.map(({ key, abilities }) => (
              <div key={key}>
                {key}
                {abilities.map((ability, index) => (
                  <p key={index}>
                    <br />
                    <span>{ability}</span>
                  </p>
                ))}
              </div>
            ))}
        </Content>
      )}

      {active === types[1] && (
        <Content>
          {pokemonStatus &&
            pokemonStatus.map((status, index) => (
              <div key={index}>
                {status.key} <br />
                <ProgressBar
                  valueStatus={status.value}
                  color={getProgressColor(status.value)}
                />
                <p>
                  <span>{status.value}</span>
                </p>
              </div>
            ))}
        </Content>
      )}

      {active === types[2] && <EvolutionsTab pokemonData={pokemonData} />}

      {active === types[3] && (
        <MegaEvolutionsTab
          id={pokemonData.id.toString()}
          name={pokemonData.name}
          isMega={isMega}
        />
      )}

      {active === types[4] && (
        <GigantamaxTab
          isGmax={isGmax}
          id={pokemonData.id.toString()}
          name={pokemonData.name}
        />
      )}

      {active === types[5] && (
        <AlolaTab
          id={pokemonData.id.toString()}
          name={pokemonData.name}
          isAlola={isAlola}
        />
      )}

      {active === types[6] && (
        <GalarianTab
          id={pokemonData.id.toString()}
          name={pokemonData.name}
          isGalar={isGalarian}
        />
      )}
    </ContainerStatus>
  );
};
