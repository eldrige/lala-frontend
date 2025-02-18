import { TProperty } from '@/types/property';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export const PropertyCard = () => {
  return (
    <Link href="/property/1" className="w-full md:max-w-72 cursor-pointer mb-4">
      <div className="h-72 rounded-lg relative md:max-w-72 mb-3.5">
        <div className="absolute top-4 z-30 px-1.5 py-1 left-4 bg-white text-black rounded-lg">
          Guest Favorite
        </div>
        <Image
          src="/images/house.jpg"
          alt="pretty house"
          className="rounded-lg"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <HeartIcon className="h-6 w-6 text-white cursor-pointer absolute top-4 right-4" />
      </div>
      <div className="w-full text-gray-800 font-semibold flex items-center justify-between">
        <p>Mikonos, Greece</p>
        <div className="flex items-center gap-1">
          <StarIcon className="size-4 text-gray-500" />
          <p>4.6</p>
        </div>
      </div>
      <p className="text-gray-700">Mountain and beach views</p>
      <p className="text-gray-700">
        <span className="font-semibold">$256 </span>
        night
      </p>
    </Link>
  );
};
