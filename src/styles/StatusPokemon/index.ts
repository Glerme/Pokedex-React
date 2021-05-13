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

export const ContainerStatus = styled.div`
  border-radius: 15px;

  margin: 2rem auto;
  width: 80%;

  background-color: white;
  box-shadow: 3px 2px 4px #c2c2c2;

  padding: 3rem;

  min-height: 50%;

  animation: ${FadeInAnimation} 0.5s ease-in-out;
`;
