import styled, { keyframes, css } from "styled-components";

const FadeInAnimation = keyframes`
  from{
    transform: translateY(-100%);
    opacity: .0;
  }
  to: {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ContainerStatus = styled.div`
  border-radius: 15px;

  margin: 2rem auto;
  padding: 3rem;

  width: 80%;
  min-height: 50%;

  background-color: white;
  box-shadow: 3px 2px 4px var(--shadow);

  animation: ${FadeInAnimation} 0.5s ease-in-out;
`;

export const Tab = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  font-size: 1rem;
  font-weight: 600;
  padding: 10px 50px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid var(--text-third);
      opacity: 1;
      transform: translateX(90deg);
    `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: left;

    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  flex-wrap: wrap;

  margin: 5rem auto;

  @media (max-width: 730px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 731px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  & > p {
    margin: 0.8rem 2rem;
    padding: 0.4rem;
    text-transform: capitalize;
    text-align: center;
    line-height: 1.4;
    color: var(--text-third);
    font-size: 1.8rem;
    animation: ${FadeInAnimation} 0.5s;
    & > div {
      & > span {
        color: var(--text-primary);
      }
    }
  }
`;
