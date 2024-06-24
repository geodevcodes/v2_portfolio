export const Skeleton = () => {
  return (
    <div className="w-full rounded  shadow-sm m-2 mb-12">
      <div className="flex items-center space-x-4 w-full">
        <div className="rounded text-xl mb-2  h-[220px] w-full bg-gray-300 animate-pulse"></div>
      </div>
      <div className="w-full h-[80px] mb-2 bg-gray-300 animate-pulse rounded"></div>
      <div className="flex space-x-4 mb-1.5">
        <div className="w-20 h-5  bg-gray-200 animate-pulse rounded"></div>
        <div className="w-20 h-5  bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="w-full h-10 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};
