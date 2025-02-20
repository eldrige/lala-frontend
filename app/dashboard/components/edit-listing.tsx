'use client';
import { useEditProperty } from '@/features/property';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { TProperty } from '@/types/property';

export const EditListing = ({
  isOpen,
  setIsOpen,
  property,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  property: TProperty;
}) => {
  console.log('property', property);
  const { mutate, isPending, isSuccess } = useEditProperty();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: property.title,
      description: property.description,
      pricePerNight: property.pricePerNight,
      location: property.location,
      id: property.id,
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* <div className="fixed overflow-y-auto max-h-[500px] flex w-screen items-center justify-center p-4"> */}
      <DialogPanel className="max-w-3xl shadow-lg rouned-lg max-h-[80vh] overflow-y-auto my-12 mx-auto space-y-4 border bg-white p-12">
        <DialogTitle className="font-bold">Edit Listing</DialogTitle>
        <Description>This will modify your listing</Description>
        <form
          onSubmit={handleSubmit((data) =>
            mutate({
              ...data,
              pricePerNight: +data.pricePerNight,
              id: property.id,
            })
          )}
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="Title"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      {...register('title', {
                        required: 'This field is required',
                      })}
                      type="text"
                      placeholder=""
                      className={clsx(
                        'flex h-9 w-full rounded-md border focus:outline-none border-input focus-visible:ring-none bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                        errors.title &&
                          'outline-2 outline-offset-1 outline-red-500'
                      )}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="description"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <input
                      {...register('description', {
                        required: 'This field is required',
                      })}
                      type="text"
                      placeholder=""
                      className={clsx(
                        'flex h-9 w-full rounded-md border focus:outline-none border-input focus-visible:ring-none bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                        errors.description &&
                          'outline-2 outline-offset-1 outline-red-500'
                      )}
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="pricePerNight"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Price per night
                  </label>
                  <div className="mt-2">
                    <input
                      {...register('pricePerNight', {
                        required: 'This field is required',
                      })}
                      type="number"
                      placeholder=""
                      className={clsx(
                        'flex h-9 w-full rounded-md border focus:outline-none border-input focus-visible:ring-none bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                        errors.pricePerNight &&
                          'outline-2 outline-offset-1 outline-red-500'
                      )}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="Location"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Location
                  </label>
                  <div className="mt-2">
                    <input
                      {...register('location', {
                        required: 'This field is required',
                      })}
                      type="text"
                      placeholder=""
                      className={clsx(
                        'flex h-9 w-full rounded-md border focus:outline-none border-input focus-visible:ring-none bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                        errors.location &&
                          'outline-2 outline-offset-1 outline-red-500'
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-sm/6 py-2 px-4 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 capitalize"
            >
              {isPending ? 'Loading...' : 'Edit Listing'}
            </button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
};
