import { NextPage } from "next";
import { useState } from "react";

import * as Styled from "../../styles/Tabs";
import { Status } from "../../types/PokemonTypes";

import Evolutions from "../Evolutions";

const Tabs: NextPage<Status> = ({
  pokemonAbilities,
  pokemonStatus,
  pokemonData,
}) => {
  const types = ["Abilities", "Status", "Evolutions"];
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
                <p key={key}>
                  {key}
                  {abilities.map((ability) => (
                    <>
                      <br />
                      <span>{ability}</span>
                    </>
                  ))}
                </p>
              ))}
          </Styled.Content>
        )}

        {active === types[1] && (
          <Styled.Content>
            {pokemonStatus &&
              pokemonStatus.map((status, index) => (
                <p key={index}>
                  {status.key} <br />
                  <span>{status.value}</span>
                </p>
              ))}
          </Styled.Content>
        )}

        {active === types[2] && <Evolutions pokemonData={pokemonData} />}
      </Styled.ContainerStatus>
    </>
  );
};

export default Tabs;