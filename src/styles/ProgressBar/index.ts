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

// & > progress[value] {
//   /* Reset the default appearance */
//   -webkit-appearance: none;
//   appearance: none;

//   width: 250px;
//   height: 20px;
// }

// progress[value]::-webkit-progress-bar {
//   background-color: #eee;
//   border-radius: 5px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
// }

// progress[value]::-webkit-progress-value {
//   background-image: -webkit-linear-gradient(
//       -45deg,
//       transparent 100%,
//       rgba(0, 0, 0, 0.2) 100%,
//       rgba(0, 0, 0, 0.1) 100%,
//       transparent 100%
//     ),
//     -webkit-linear-gradient(left, #b90047, #d81862, #e15656, #eb7153, #f18c54, #f4a65a, #f5bf66, #efcb66, #e6d669, #dce26f, #c6e466, #aae762, #88e963, #58eb6a);

//   border-radius: 5px;
//   background-size: 35px 20px, 100% 100%, 100% 100%;
// }
