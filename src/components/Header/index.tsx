import { useCallback, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { SearchProps } from "../../types/PokemonTypes";

import SearchInput from "../SearchInput";

import { MdArrowBack } from "react-icons/md";

import { HeaderContainer } from "./styles";

const Header: NextPage = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();
  const [back, setBack] = useState(false);

  const handleSubmit = useCallback(async (input: SearchProps) => {
    try {
      const slug = input.nomePokemon.toLowerCase();

      router.push(`/pokemon/${slug}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      return setBack(true);
    }
  }, []);

  return (
    <HeaderContainer>
      <section>
        {back && (
          <div onClick={() => router.push("/")}>
            <MdArrowBack size={40} />
            <p>Voltar</p>
          </div>
        )}
        <img src="/logo.svg" alt="Logo" srcSet="/logo.svg" />
      </section>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <SearchInput name="nomePokemon" />
      </Form>
    </HeaderContainer>
  );
};

export default Header;
