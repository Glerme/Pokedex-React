import { NextPage } from "next";

import { Progress, ProgressContainer } from "./styles";

interface ProgressBarProps {
  valueStatus: number;
  color: string;
}

export const ProgressBar: NextPage<ProgressBarProps> = ({
  valueStatus,
  color,
}) => {
  return (
    <ProgressContainer>
      <Progress width={valueStatus} color={color} />
    </ProgressContainer>
  );
};
