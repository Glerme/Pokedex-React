import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { MdArrowBack } from "react-icons/md";

import { SearchInput } from "../SearchInput";

interface SearchProps {
  nomePokemon: string;
}

export const Header: NextPage = () => {
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
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <section className="flex items-center gap-8">
          {back ? (
            <div
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors"
            >
              <MdArrowBack size={40} />
              <p className="text-lg">Go back</p>
            </div>
          ) : (
            <img
              src="/logo.svg"
              alt="Logo"
              srcSet="/logo.svg"
              className="h-12 w-auto"
            />
          )}
        </section>

        <Form ref={formRef} onSubmit={handleSubmit} className="w-full md:w-96">
          <SearchInput name="nomePokemon" />
        </Form>
      </div>
    </header>
  );
};
