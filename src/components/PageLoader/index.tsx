import { NextComponentType } from "next";

export const PageLoader: NextComponentType = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="w-16 h-16 border-8 border-gray-200 border-t-primary rounded-full animate-spin" />
    </div>
  );
};
