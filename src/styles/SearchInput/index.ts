import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  position: relative;

  & > label {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: left;
    transition: 0.2s;
    font-size: 1.175rem;
    font-weight: 600;
    color: #c3c3c3;
  }

  & > input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid white;
    outline: 0;
    font-size: 1.6rem;
    color: white;
    padding: 1rem 0 0.5rem 0;
    background: transparent;

    display: flex;
    justify-content: center;

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px var(--background-primary) inset;
    }

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ label {
      cursor: text;
      top: 1.175rem;
      color: #dbdbdb;
    }

    &:focus {
      padding-bottom: 6px;
      border-width: 2px;
      border-image: red;
      border-image-slice: 1;
    }

    &:focus ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1.075rem;
      font-weight: 600;
      color: white;
    }
  }

  & > button {
    font-size: 0;
    background: transparent;
    border: 0;
    padding: 0 0.5rem;

    & > svg {
      fill: white;
      transition: fill 0.5s;

      &:hover {
        fill: var(--text-third);
      }
    }
  }
`;
