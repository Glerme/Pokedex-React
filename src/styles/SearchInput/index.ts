import styled from "styled-components";

export const InputSearchContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  position: relative;

  margin: 1rem auto;
  width: 50%;
  padding: 0.5rem;

  & > input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #bebebe;
    outline: 0;
    font-size: 1rem;
    color: var(--text-third);
    padding: 1rem 0 0.5rem 0;
    background: transparent;

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px var(--background-primary) inset;
    }

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ label {
      cursor: text;
      top: 1.175rem;
    }

    &:focus {
      padding-bottom: 6px;
      border-width: 3px;
      border-image: linear-gradient(
        to right,
        var(--text-third),
        var(--text-primary)
      );
      border-image-slice: 1;
    }

    &:focus ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1.075rem;
      font-weight: 600;
      color: #4d4b46;
    }
  }

  & > label {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: left;
    transition: 0.2s;
    font-size: 1.175rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  & > button {
    font-size: 0;
    background: transparent;
    border: 0;
    padding: 0 0.5rem;

    & > svg {
      fill: #a6a6a6;
      transition: fill 0.5s;

      &:hover {
        fill: var(--text-third);
      }
    }
  }
`;
