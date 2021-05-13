import styled from "styled-components";

export const ContainerCardEvolution = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: left;

    flex-direction: column;
  }

  & > div {
    justify-content: center;

    margin: 1rem;

    & > header {
      margin-top: 3rem;
      & > img {
        margin: 1rem;

        width: 286px;
        height: 286px;
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

  /* & > header {
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    @media (max-width: 800px) {
      justify-content: left;

      flex-direction: column;
    }

    & > div {
      margin: 1rem;
      & > img {
        width: 100%;
        justify-content: center;
        padding: 1rem;
      }
    }
  }

  & > footer {
    display: flex;
    justify-content: space-around;

    & > div {
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

    @media (max-width: 715px) {
      justify-content: left;
      flex-direction: column;
    }
  } */
`;
