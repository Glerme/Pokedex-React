import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { useField } from "@unform/core";

import { ImSearch } from "react-icons/im";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const SearchInput: NextPage<SearchInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className="relative w-full">
      <input
        name={name}
        placeholder="Buscar"
        ref={inputRef}
        defaultValue={defaultValue}
        className="w-full h-12 pl-4 pr-12 rounded-lg bg-gray-100 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-gray-400"
        {...rest}
      />
      <label htmlFor={name} className="sr-only">
        Buscar
      </label>
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
      >
        <ImSearch size={24} />
      </button>
    </div>
  );
};
