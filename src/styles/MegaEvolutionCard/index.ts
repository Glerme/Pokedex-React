import styled, { keyframes } from "styled-components";

const TranslateX = keyframes`
  from{
    transform: translateX(-100%);
    opacity: .0;
  }
  to: {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MegaEvolutionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  min-height: 50%;
  animation: ${TranslateX} 0.5s ease-in-out;

  & > p {
    font-size: 3rem;
    color: var(--text-primary);
    margin-top: 2.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 801px) {
    justify-content: center;
  }

  & > div {
    & > span {
      width: 30rem;

      margin: 1rem;

      @media (max-width: 799px) {
        width: 30rem;
        height: 30rem;
      }
    }
    & > p {
      font-size: 1.5rem;
      text-transform: capitalize;

      margin-bottom: 0.2rem;
      color: var(--text-third);

      @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    & > span {
      font-size: 1.1rem;
      color: var(--text-secondary);

      @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
