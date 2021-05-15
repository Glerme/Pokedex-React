import styled from "styled-components";

export const ContainerCardEvolution = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: left;

    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (min-width: 801px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  & > div {
    justify-content: center;

    margin: 1rem;

    & > header {
      margin-top: 3rem;
      & > img {
        margin: 1rem;

        max-width: 286px;
        max-height: 286px;

        @media (max-width: 799px) {
          width: 180px;
          height: 180px;
        }

        @media (min-width: 800px) {
          width: 230px;
          height: 230px;
        }
      }
    }

    & > footer {
      margin-top: 1rem;

      @media (max-width: 715px) {
        justify-content: left;
        flex-direction: column;
      }

      & > p {
        font-size: 1.5rem;
        text-transform: capitalize;

        margin-bottom: 0.2rem;
        color: var(--text-third);
      }

      & > span {
        font-size: 1.1rem;
        color: var(--text-secondary);
      }
    }
  }
`;
