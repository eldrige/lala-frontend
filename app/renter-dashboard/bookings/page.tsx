// import { NoContent } from './components/no-listings';
'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useGetMyBookingsAsRenter,
  useUpdateBookingStatus,
} from '@/features/bookings';
import { formatISODate } from '@/utils';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import TableLoader from './components/loader';

const Page = () => {
  const { data, isLoading } = useGetMyBookingsAsRenter();
  const { mutate, isPending: isUpdating } = useUpdateBookingStatus();
  if (isLoading) {
    return <TableLoader />;
  }

  return (
    <div className="p-6 md:p-10 md:pt-8 max-md:pb-40">
      <div className="w-full flex items-center justify-between py-4 border-b border-[#0000001A]">
        <h1 className="text-2xl font-semibold">Bookings</h1>
        <Link
          href="/"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 capitalize mt-2"
        >
          + New booking
        </Link>
      </div>
      <Table className="mt-8">
        <TableCaption>A list of bookings for your properties.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Host Name</TableHead>
            <TableHead>Property Name</TableHead>
            <TableHead>Date Requested</TableHead>
            <TableHead>Check In Date</TableHead>
            <TableHead>Check Out Date</TableHead>
            <TableHead>Price per night ($)</TableHead>
            <TableHead>Status</TableHead>
            {/* <TableHead className="text-right">Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((booking, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {booking.property.host.name}
              </TableCell>
              <TableCell>{booking.property.title}</TableCell>
              <TableCell>{formatISODate(booking.createdAt)}</TableCell>
              <TableCell>{formatISODate(booking.checkIn)}</TableCell>
              <TableCell>{formatISODate(booking.checkOut)}</TableCell>
              <TableCell className="text-center font-medium">
                {booking.property.pricePerNight}
              </TableCell>

              <TableCell>
                <span
                  className={clsx(
                    'text-sm capitalize font-semibold text-gray-900 py-2 px-3 rounded-md',
                    booking.status === 'PENDING'
                      ? 'text-yellow-500 bg-yellow-100'
                      : booking.status === 'CONFIRMED'
                      ? 'text-green-500 bg-green-100'
                      : 'text-red-500 bg-red-100'
                  )}
                >
                  {booking.status}
                </span>
              </TableCell>
              <TableCell className="text-right flex gap-x-2 justify-end">
                {/* <button
                  onClick={() =>
                    mutate({ id: booking.id, status: 'CONFIRMED' })
                  }
                  className="disabled:cursor-not-allowed"
                  disabled={booking.status === 'CONFIRMED' || isUpdating}
                >
                  <CheckIcon className="h-6 w-6 text-green-500 " />
                </button> */}
                <button
                  onClick={() => mutate({ id: booking.id, status: 'CANCELED' })}
                  className="disabled:cursor-not-allowed"
                  disabled={booking.status === 'CANCELED' || isUpdating}
                >
                  <XMarkIcon className="h-6 w-6 text-red-500" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default Page;
