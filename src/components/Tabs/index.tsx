import { NextPage } from "next";
import { useState } from "react";

import * as Styled from "../../styles/Tabs";

import { Status } from "../../types/PokemonTypes";

import Evolutions from "../Evolutions";
import MegaEvolution from "../MegaEvolution";

const Tabs: NextPage<Status> = ({
  pokemonAbilities,
  pokemonStatus,
  pokemonData,
}) => {
  const types = ["Abilities", "Status", "Evolutions", "Mega-Evolution"];
  const [active, setActive] = useState(types[0]);

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
                  <p>
                    <span>{status.value}</span>
                  </p>
                </div>
              ))}
          </Styled.Content>
        )}

        {active === types[2] && <Evolutions pokemonData={pokemonData} />}

        {active === types[3] && (
          <MegaEvolution
            id={pokemonData.id.toString()}
            name={pokemonData.name}
          />
        )}
      </Styled.ContainerStatus>
    </>
  );
};

export default Tabs;
