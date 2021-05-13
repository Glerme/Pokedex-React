import { useCallback, useRef } from "react";
import { NextPage } from "next";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { SearchProps } from "../../types/PokemonTypes";

import SearchInput from "../SearchInput";
import { useRouter } from "next/router";

import * as Styled from "../../styles/Header";

const Header: NextPage = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const handleSubmit = useCallback(async (input: SearchProps) => {
    try {
      const slug = input.nomePokemon.toLowerCase();
      router.push(`/pokemon/${slug}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const logo = require("../../assets/pokedex.png");

  return (
    <Styled.Header>
      {/* <img src={logo} alt="" /> */}
      <h1>Pokédex</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <SearchInput name="nomePokemon" />
      </Form>
    </Styled.Header>
  );
};

export default Header;
