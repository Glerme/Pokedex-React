import { NextPage } from "next";

import * as Styled from "../../styles/ProgressBar";

interface ProgressBarProps {
  valueStatus: number;
  color: string;
}

const ProgressBar: NextPage<ProgressBarProps> = ({ valueStatus, color }) => {
  return (
    <Styled.ProgressContainer>
      <Styled.Progress width={valueStatus} color={color} />
    </Styled.ProgressContainer>
  );
};

export default ProgressBar;
