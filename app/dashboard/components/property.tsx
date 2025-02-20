import { TProperty } from '@/types/property';
import {
  EllipsisVerticalIcon,
  PencilIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { TrashIcon } from '@heroicons/react/20/solid';
import { useDeleteProperty } from '@/features/property';

export const PropertyCard = ({ property }: { property: TProperty }) => {
  const { mutate, isPending } = useDeleteProperty();
  return (
    <div className="w-full md:max-w-72 cursor-pointer mb-4">
      <div className="h-72 rounded-lg relative md:max-w-72 mb-3.5">
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
        <Popover className="group">
          <PopoverButton className="flex items-center gap-2">
            <EllipsisVerticalIcon className="size-6 text-white cursor-pointer absolute top-4 right-4" />
          </PopoverButton>
          <PopoverPanel
            anchor="right"
            className="flex flex-col bg-white rouned-lg  text-gray-800 ml-[17rem] mt-16 divide-y-2 divide-gray-200 w-36 shadow-lg"
          >
            <button className="flex hover:bg-gray-200 items-center py-2 px-4 gap-x-2">
              <PencilIcon className="h-6 w-6 text-gray-800 cursor-pointer" />
              <p>Edit</p>
            </button>
            <button
              onClick={() => mutate(property.id)}
              className="flex hover:bg-gray-200 items-center py-2 px-4 gap-x-2"
            >
              <TrashIcon className="h-6 w-6 text-gray-800 cursor-pointer" />
              <p>{isPending ? 'Deleting...' : 'Delete'}</p>
            </button>
          </PopoverPanel>
        </Popover>
        {/* <HeartIcon className="h-6 w-6 text-white cursor-pointer absolute top-4 right-4" /> */}
      </div>
      <div className="w-full text-gray-800 font-semibold flex items-center justify-between">
        <p>{property.location}</p>
        <div className="flex items-center gap-1">
          <StarIcon className="size-4 text-gray-500" />
          <p>4.6</p>
        </div>
      </div>
      <p className="text-gray-700">{property.description}</p>
      <p className="text-gray-700">
        <span className="font-semibold">${property.pricePerNight} </span>
        night
      </p>
    </div>
  );
};
