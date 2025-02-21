import { Skeleton } from '@/components/ui/skeleton';
// import {Container} from "@components/container";

export const Loader = () => {
  return (
    <div className="mx-auto max-w-7xl py-8 px-10 md:px-0">
      <h2 className="text-2xl text-black font-bold my-4">
        Your recent searches
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-full md:max-w-72 mb-4">
            <div className="h-72 rounded-lg relative md:max-w-72 mb-3.5 overflow-hidden">
              <Skeleton className="h-full w-full rounded-lg" />
            </div>
            <div className="w-full flex justify-between items-center">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-5 w-10" />
            </div>
            <Skeleton className="h-4 w-full mt-1" />
            <Skeleton className="h-4 w-20 mt-1" />
          </div>
        ))}
      </div>
      <h2 className="text-2xl text-black font-bold my-8">Popular around</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-full md:max-w-72 mb-4">
            <div className="h-72 rounded-lg relative md:max-w-72 mb-3.5 overflow-hidden">
              <Skeleton className="h-full w-full rounded-lg" />
            </div>
            <div className="w-full flex justify-between items-center">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-5 w-10" />
            </div>
            <Skeleton className="h-4 w-full mt-1" />
            <Skeleton className="h-4 w-20 mt-1" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 mb-4">
        <div className="text-black flex items-center justify-center gap-4 flex-col">
          <p className="font-semibold">Continue exploring design homes</p>
          <button className="bg-black text-white rounded-lg py-2 px-4 capitalize">
            show more
          </button>
        </div>
      </div>
    </div>
  );
};
