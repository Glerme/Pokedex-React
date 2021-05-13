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
  box-shadow: 3px 2px 4px #c2c2c2;

  animation: ${FadeInAnimation} 0.5s ease-in-out;
`;

export const Tab = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  font-size: 1rem;
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

  @media (max-width: 715px) {
    justify-content: left;

    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  margin: 5rem auto;

  & > p {
    margin: 0.8rem 2rem;
    padding: 0.4rem;
    text-transform: capitalize;
    text-align: center;
    line-height: 1.4;
    color: #4b0082;
    font-size: 1.8rem;
    animation: ${FadeInAnimation} 0.5s;
    & > div {
      & > span {
        color: var(--text-primary);
      }
    }
  }
`;
