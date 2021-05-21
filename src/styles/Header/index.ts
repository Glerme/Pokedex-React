import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(5, 5, 5, 0.5);
  box-shadow: 3px 2px 4px var(--shadow);
  padding: 1rem 0.5rem;
  width: 100%;
  position: relative;

  & > section {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > img {
      width: 5rem;
    }

    & > div > svg:hover {
    }

    & > div {
      position: absolute;
      left: 50px;
      display: flex;
      align-items: center;

      cursor: pointer;

      color: white;

      &:hover {
        color: var(--text-third);
        font-weight: bold;
        transition: all 250ms ease-in-out;
      }

      & > section > p {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    & > section p {
      display: none;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
