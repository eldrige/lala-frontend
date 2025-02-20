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

const Page = () => {
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
      <NoContent />
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
          {/* <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div> */}
        </DialogPanel>
        {/* </div> */}
      </Dialog>
    </div>
  );
};

export default Page;
