export const PokemonCardSkeleton = () => {
  return (
    <div className="w-full max-w-[300px] m-4">
      <div className="bg-gray-100 rounded-2xl p-4 shadow-sm">
        <header className="flex justify-between items-center mb-4">
          <div className="w-3/5 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
          <div className="w-1/5 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
        </header>
        <div className="w-full h-[200px] my-4 flex justify-center items-center">
          <div className="w-[180px] h-[180px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full" />
        </div>
        <div className="flex gap-4 mt-4">
          <div className="w-20 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
          <div className="w-20 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
        </div>
      </div>
    </div>
  );
};
