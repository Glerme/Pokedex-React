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

export const Container = styled.div`
  min-height: 50%;
  animation: ${TranslateX} 0.5s ease-in-out;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 2rem;

  min-height: 50%;
  animation: ${TranslateX} 0.5s ease-in-out;

  & > img {
    @media (min-width: 1200px) {
      width: 35rem;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 801px) {
    justify-content: center;
  }

  & > p {
    font-size: 2rem;
    text-transform: capitalize;

    margin-bottom: 0.2rem;
    color: var(--text-third);

    @media (max-width: 800px) {
      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;
    }
  }

  & > p {
    font-size: 2rem;
    text-transform: capitalize;

    margin-bottom: 0.2rem;
    color: var(--text-third);

    @media (max-width: 800px) {
      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;
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
`;
