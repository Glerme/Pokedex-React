import { NextPage } from "next";

import { Progress, ProgressContainer } from "./styles";

interface ProgressBarProps {
  valueStatus: number;
  color: string;
}

const ProgressBar: NextPage<ProgressBarProps> = ({ valueStatus, color }) => {
  return (
    <ProgressContainer>
      <Progress width={valueStatus} color={color} />
    </ProgressContainer>
  );
};

export default ProgressBar;
