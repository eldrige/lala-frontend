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
import { TProperty } from '@/types/property';
import { EditListing } from './components/edit-listing';
import { Skeleton } from '@/components/ui/skeleton';
// import { PropertyCard } from '@/components/property-card';

const Loader = () => {
  return (
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
  );
};

const Page = () => {
  const { data, isPending } = useGetMyProperties();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState<TProperty | undefined>(
    undefined
  );

  const closeForm = () => setIsOpen(false);

  if (isPending) {
    return <Loader />;
  }

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
          <div
            key={index}
            onClick={() => {
              setCurrentProperty(property);
            }}
          >
            <PropertyCard
              key={index}
              property={property}
              setIsEditOpen={setIsEditOpen}
            />
          </div>
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
      {currentProperty ? (
        <EditListing
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          property={currentProperty}
        />
      ) : null}
    </div>
  );
};

export default Page;
