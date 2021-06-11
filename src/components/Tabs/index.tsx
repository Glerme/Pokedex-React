import { NextPage } from "next";
import { useCallback, useState } from "react";

import * as Styled from "../../styles/Tabs";

import { Status } from "../../types/PokemonTypes";
import AlolaContainer from "../AlolaContainer";

import EvolucoesContainer from "../EvolucoesContainer";
import GalarianContainer from "../GalarianContainer";
import GigantamaxContainer from "../GigantamaxContainer";
import MegaEvolucaoContainer from "../MegaEvolucaoContainer";
import ProgressBar from "../ProgressBar";

const Tabs: NextPage<Status> = ({
  pokemonAbilities,
  pokemonStatus,
  pokemonData,
  isAlola,
  isGmax,
  isMega,
  isGalarian,
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
    <>
      <Styled.ContainerStatus>
        <Styled.ButtonGroup>
          {types.map((type) => (
            <Styled.Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Styled.Tab>
          ))}
        </Styled.ButtonGroup>

        {active === types[0] && (
          <Styled.Content>
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
          </Styled.Content>
        )}

        {active === types[1] && (
          <Styled.Content>
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
          </Styled.Content>
        )}

        {active === types[2] && (
          <EvolucoesContainer pokemonData={pokemonData} />
        )}

        {active === types[3] && (
          <MegaEvolucaoContainer
            id={pokemonData.id.toString()}
            name={pokemonData.name}
            isMega={isMega}
          />
        )}

        {active === types[4] && (
          <GigantamaxContainer
            isGmax={isGmax}
            id={pokemonData.id.toString()}
            name={pokemonData.name}
          />
        )}

        {active === types[5] && (
          <AlolaContainer
            id={pokemonData.id.toString()}
            name={pokemonData.name}
            isAlola={isAlola}
          />
        )}

        {active === types[6] && (
          <GalarianContainer
            id={pokemonData.id.toString()}
            name={pokemonData.name}
            isGalar={isGalarian}
          />
        )}
      </Styled.ContainerStatus>
    </>
  );
};

export default Tabs;
