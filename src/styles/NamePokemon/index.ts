import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`
  from{
    transform: translateX(-100%);
    opacity: .0;
  }
  to: {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ContainerPokemon = styled.header`
  margin-top: 3rem;

  animation: ${FadeInAnimation} 0.5s ease-in-out;

  & > h3 {
    color: var(--text-third);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
    text-transform: capitalize;
  }
  & > span {
    color: var(--text-secondary);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;
