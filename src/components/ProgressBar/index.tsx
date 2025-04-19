import { NextPage } from "next";

interface ProgressBarProps {
  valueStatus: number;
  color: string;
}

export const ProgressBar: NextPage<ProgressBarProps> = ({
  valueStatus,
  color,
}) => {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
      <div
        className="h-full transition-all duration-700 ease-out rounded-full"
        style={{
          width: `${Math.min(valueStatus, 200)}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};
