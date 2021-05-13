import styled, { keyframes } from "styled-components";

interface ColorPropsPrimary {
  tipo1: string;
}

interface ColorPropsSecondary {
  tipo2: string;
}

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

export const ContainerTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.5rem;

  animation: ${FadeInAnimation} 0.5s ease-in-out;
`;

export const TypeOne = styled.p<ColorPropsPrimary>`
  margin: 0 1rem;
  padding: 1.5rem 5rem;

  border: 1px solid ${(props) => `var(--${props.tipo1})`};
  border-radius: 1rem;

  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;

  width: 100%;

  background-color: ${(props) => `var(--${props.tipo1})`};
  color: white;
`;

export const TypeTwo = styled.p<ColorPropsSecondary>`
  margin: 0 1rem;
  padding: 1.5rem 5rem;

  border: 1px solid ${(props) => `var(--${props.tipo2})`};
  border-radius: 1rem;

  font-size: 1.5rem;
  font-weight: 700;

  text-transform: capitalize;

  width: 100%;

  background-color: ${(props) => `var(--${props.tipo2})`};
  color: white;
`;
