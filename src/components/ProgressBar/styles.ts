import styled from "styled-components";

interface ProgressProps {
  width: number;
  color: string;
}

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 4px;
  background: #eee;
  border-radius: 6px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
`;

export const Progress = styled.div<ProgressProps>`
  width: ${(props) => `${props.width / 2}%`};
  height: 16px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;
