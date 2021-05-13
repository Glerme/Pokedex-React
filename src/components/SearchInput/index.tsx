import { InputHTMLAttributes, useEffect, useRef } from "react";
import { NextPage } from "next";

import { useField } from "@unform/core";

import { ImSearch } from "react-icons/im";

import * as Styled from "../../styles/SearchInput";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const SearchInput: NextPage<SearchInputProps> = ({ name, ...rest }) => {
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
    <Styled.InputSearchContainer>
      <input
        name={name}
        placeholder="Buscar"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      <label htmlFor={name}>Buscar</label>
      <button type="submit">
        <ImSearch size={24} />
      </button>
    </Styled.InputSearchContainer>
  );
};

export default SearchInput;
