// components/Loader.tsx
import { Skeleton } from '@/components/ui/skeleton';

const Loader = () => {
  return (
    <div className="px-10 md:px-20 pb-20 text-gray-800">
      {/* Header Section */}
      <div className="w-full flex items-center justify-between pt-8 pb-2">
        <Skeleton className="w-1/2 h-6" />
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-black text-sm">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
          <div className="flex items-center gap-1 text-black text-sm">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full flex gap-2 py-4">
        <div className="relative w-1/2 min-h-[400px] rounded-l-2xl">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
        <div className="w-1/2 min-h-[400px] grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full relative">
              <Skeleton className="w-full h-40 rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Description & Details */}
      <div className="w-full flex justify-between mt-4 gap-4">
        <div className="w-2/3 flex flex-col">
          <Skeleton className="w-1/2 h-6 mb-2" />
          <Skeleton className="w-full h-20" />

          {/* Booking Card */}
          <div className="w-1/3 sticky top-1">
            <div className="w-full shadow-lg bg-white px-4 py-6 rounded-2xl flex flex-col gap-2">
              <Skeleton className="w-1/2 h-6" />
              <Skeleton className="w-full h-40" />
              <Skeleton className="w-24 h-8 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
