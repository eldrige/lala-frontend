'use client';
import { HomeIcon } from '@heroicons/react/24/outline';
export const NoContent = () => {
  return (
    <div
      data-cy="no-content"
      style={{
        height:
          window.innerWidth > 640
            ? 'calc(100vh - 280px)'
            : 'calc(100vh - 200px)',
      }}
      className="rounded-[10px] p-4 mt-6 border border-[#0000001A] flex items-center justify-center flex-col"
    >
      <span className="bg-[#F7F8F9] p-4 rounded-[20px] mb-4">
        <HomeIcon className="size-20 text-[#0000001A]" />
      </span>
      <h3 className="font-medium text-black text-2xl text-center mb-2">
        No Listings
      </h3>
      <p className="text-lg text-black text-center max-w-[500px]">
        No Listings yet. Once you create your listings, you will see them here
      </p>
    </div>
  );
};
