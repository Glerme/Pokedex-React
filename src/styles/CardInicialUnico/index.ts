import styled from "styled-components";

interface ColorPropsPrimary {
  tipo1: string;
  tipo2?: string;
}

export const ContainerCard = styled.a<ColorPropsPrimary>`
  padding: 1rem;

  background-color: #f2f2f2;
  box-shadow: 3px 2px 4px var(--shadow);

  width: 100%;

  cursor: pointer;

  border-radius: 10px;

  &:hover {
    background-color: ${(props) => `var(--${props.tipo1})`};

    transition: all 0.5s;

    & > header {
      & > h3 {
        color: white;
      }
      p {
        color: white;
      }
    }
  }

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    width: 100%;
    & > h3 {
      text-transform: capitalize;
      line-height: 1.4;
      color: var(--text-third);
    }
    p {
      color: var(--text-secondary);
    }
  }

  & > main {
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 200px;
      height: 200px;
    }
  }

  & > footer {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.875rem;

    & > main > img {
      width: 150px;
      height: 150px;
    }

    & > footer {
      margin-top: 0.7rem;
    }
  }

  @media (max-width: 420px) {
    & > main > img {
      width: 220px;
      height: 220px;
    }
  }
`;

export const Tipos = styled.div<ColorPropsPrimary>`
  display: flex;
  justify-content: center;

  padding: 3px;

  border-radius: 5px;
  border: 1px solid ${(props) => `var(--${props.tipo1})`};

  margin: 0.3rem;

  width: 5rem;
  height: 2.5rem;
  background-color: ${(props) => `var(--${props.tipo1})`};

  @media (max-width: 420px) {
    width: inherit;
    height: 3rem;
  }
`;
