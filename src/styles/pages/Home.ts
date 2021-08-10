import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  place-content: center;
  grid-gap: 1.5rem;
  padding: 0 3rem;

  margin-top: 3rem;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 250px);
    grid-gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 220px);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 220px);
  }

  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
