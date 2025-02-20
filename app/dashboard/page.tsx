'use client';
import { NoContent } from './components/no-listings';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useState } from 'react';
import CreateListingForm from './components/create-listing';
import { useGetMyProperties } from '@/features/property';
import { PropertyCard } from './components/property';
// import { PropertyCard } from '@/components/property-card';

const Page = () => {
  const { data, isPending } = useGetMyProperties();
  const [isOpen, setIsOpen] = useState(false);
  const closeForm = () => setIsOpen(false);

  return (
    <div className="p-6 md:p-10 md:pt-8 max-md:pb-40">
      <div className="w-full flex items-center justify-between py-4 border-b border-[#0000001A]">
        <h1 className="text-2xl font-semibold">Properties</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 capitalize mt-2"
        >
          + New Listing
        </button>
      </div>
      {data?.length === 0 && !isPending ? <NoContent /> : null}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 my-12">
        {data?.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* <div className="fixed overflow-y-auto max-h-[500px] flex w-screen items-center justify-center p-4"> */}
        <DialogPanel className="max-w-3xl shadow-lg rouned-lg max-h-[80vh] overflow-y-auto my-12 mx-auto space-y-4 border bg-white p-12">
          <DialogTitle className="font-bold">New Listing</DialogTitle>
          <Description>
            This will create a new listing visible to all lala users
          </Description>
          <CreateListingForm closeForm={closeForm} />
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Page;
