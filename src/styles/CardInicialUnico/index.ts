import styled from "styled-components";

interface ColorPropsPrimary {
  tipo1: string;
  tipo2?: string;
}

export const ContainerCard = styled.div<ColorPropsPrimary>`
  padding: 1rem;
  margin: 1rem;

  background-color: #f2f2f2;
  box-shadow: 3px 2px 4px var(--shadow);

  width: 250px;

  border-radius: 10px;

  & > a {
    & > header {
      display: flex;
      justify-content: center;
      align-items: center;

      & > h3 {
        text-transform: capitalize;
        line-height: 1.4;
        color: var(--text-third);

        margin-bottom: 1rem;
        padding-bottom: 0.3rem;

        width: 100%;
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
      padding-top: 0.3rem;

      & > p {
        font-size: 1.2rem;

        color: var(--text-primary);
      }
    }
  }
`;

export const Tipos = styled.div<ColorPropsPrimary>`
  display: flex;
  justify-content: center;

  padding: 3px;

  border-radius: 5px;

  margin: 0.3rem;

  width: 5rem;
  height: 2.5rem;
  background-color: ${(props) => `var(--${props.tipo1})`};
`;
