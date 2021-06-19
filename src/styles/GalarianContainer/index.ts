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

export const GalarianContainer = styled.div`
  min-height: 50%;
  animation: ${TranslateX} 0.5s ease-in-out;
`;
