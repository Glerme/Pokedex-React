import { NextPage } from "next";

interface ProgressBarProps {
  valueStatus: number;
  color: string;
}

export const ProgressBar: NextPage<ProgressBarProps> = ({
  valueStatus,
  color,
}) => {
  const percentage = Math.min(valueStatus / 2, 100);

  return (
    <div className="relative w-full h-8 flex items-center">
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
        <div
          className="h-full transition-all duration-700 ease-out rounded-full"
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 ml-3 bg-white px-2.5 py-1 rounded-lg shadow-sm border border-gray-100">
        <span className="text-xs font-semibold" style={{ color }}>
          {valueStatus}
        </span>
      </div>
    </div>
  );
};
