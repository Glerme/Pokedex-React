import styled, { keyframes } from "styled-components";

interface ContainerImageProps {
  bgColor: string;
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

export const ContainerImage = styled.div<ContainerImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${(props) => `var(--${props.bgColor})`};

  margin-top: 2rem;
  border-radius: 15px;

  width: 35rem;
  height: 35rem;

  animation: ${FadeInAnimation} 0.5s ease-in-out;

  box-shadow: 1px 2px 8px black;

  & div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div > div {
    position: absolute;

    width: 80%;
    height: 80%;

    border-radius: 100%;
    background-color: white;
    opacity: 0.5;
  }

  & div > img {
    width: 100%;
    margin: 0.1rem;
    padding: 0.5rem;
    z-index: 50;

    animation: ${FadeInAnimation} 0.5s ease-in-out;
  }
`;
