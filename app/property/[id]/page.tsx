// import { useRouter } from 'next/router';
'use client';
import { useState } from 'react';
import { differenceInDays } from 'date-fns';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { StarIcon } from '@heroicons/react/16/solid';
import { ShareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useGetProperty } from '@/features/property';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useCreateBooking } from '@/features/bookings';

export default function Page() {
  const { id } = useParams();
  const [date, setDate] = useState<Date>();
  const [checkoutDate, setCheckoutDate] = useState<Date>();
  const { data, isLoading } = useGetProperty(id);
  const { mutate, isPending } = useCreateBooking();

  const getTotal = () => {
    if (date && checkoutDate && data?.pricePerNight) {
      const checkIn = new Date(date);
      const checkOut = new Date(checkoutDate);
      const nights = differenceInDays(checkOut, checkIn);
      return nights * data?.pricePerNight;
    }
    return 0;
  };

  const total = getTotal();

  // Calculate difference in days
  // const propertyId = router.query.id;
  return (
    <>
      <Navbar />
      <Container classNames="px-10 md:px-20 pb-20 text-gray-800">
        <div className="w-full flex items-center justify-between pt-8 pb-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {data?.title}
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-black text-sm">
              <ShareIcon className="size-4" />
              <p className="text-gray-600 underline cursor-pointer">Share</p>
            </div>
            <div className="flex items-center gap-1 text-black text-sm">
              <HeartIcon className="size-4" />
              <p className="text-gray-600 underline cursor-pointer">Save</p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-2 py-4">
          <div className="relative w-1/2 min-h-[400px] rounded-l-2xl ">
            <Image
              src={`/images/house.jpg`}
              alt="pretty house"
              className="rounded-lg"
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="w-1/2 min-h-[400px] grid grid-cols-2 gap-2">
            <div className="w-full relative">
              <Image
                src={`/images/house-two.jpg`}
                alt="pretty house"
                className="rounded-lg"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="w-full relative rounded-tr-2xl">
              <Image
                src={`/images/house-four.jpg`}
                alt="pretty house"
                className="rounded-lg"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={`/images/house-five.jpg`}
                alt="pretty house"
                className="rounded-lg"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="w-full relative rounded-br-2xl">
              <Image
                src={`/images/house-seven.jpg`}
                alt="pretty house"
                className="rounded-lg"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between mt-4 gap-4">
          <div className="w-2/3 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800">
              {data?.description}
            </h2>
            <div className="flex items-center text-gray-600 gap-2">
              <span>4 guests</span>
              <span>2 bedrooms</span>
              <span>3 beds</span>
              <span>2 baths</span>
            </div>
            <div className="shadow-lg max-w-[90%]  mt-2 font-semibold text-gray-800 bg-white border-2 border-gray-100 px-6 py-4 rounded-2xl flex justify-between">
              <div className="flex gap-1">
                <p>Guest Favorite</p>
                <p>One of the most loved homes on LaLa, according to guests</p>
              </div>
              <div className="text-gray-800 flex gap-4 divide-x-2 divide-gray-100 items-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold text-lg">4.6</span>
                  <div className="flex items-center gap-[2px]">
                    <StarIcon className="size-3 text-black" />
                    <StarIcon className="size-3 text-black" />
                    <StarIcon className="size-3 text-black" />
                    <StarIcon className="size-3 text-black" />
                    <StarIcon className="size-3 text-black" />
                  </div>
                </div>
                <div className="flex flex-col gap-[1px] items-center mt-1 pl-4">
                  <span className="font-semibold text-lg">130</span>
                  <span className="text-sm text-black underline">Reviews</span>
                </div>
              </div>
            </div>
            <div className="w-full py-6 ">
              <div className="flex gap-2 items-center">
                {/* <span className="size-12 rounded-full bg-pink-500"></span> */}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-12 rounded-full"
                />
                <h3 className="text-gray-600 text-lg">
                  Hosted by {data?.host?.name}
                </h3>
              </div>
            </div>
            <div className="w-full py-6 border-y-2 border-gray-100">
              Amara Camps Bay Penthouse: Slowly exhale at the end of a day and
              watch the sun set into the sea. Arise in the morning with 360
              degrees views of the mountains and coastline. Walk to Camps Bay
              beach with all the top restaurants and outdoor bars. Stay and work
              with a view or just relax around the pool or in the sauna, this
              penthouse offers it all.. The dedicated workspace refers to the
              desks in each bedrooms
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 pt-8 mb-4">
                What this place offers
              </h2>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-2">
                  <p>Mountain view</p>
                  <p>Ocean view</p>
                  <p>Kitchen </p>
                  <p>Fast wifi</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Residential garage</p>
                  <p>Private sauna</p>
                  <p>Carbon monoxide alarm </p>
                  <p>Smoke alarm</p>
                </div>
                <div className="invisible">
                  <p>Residential garage</p>
                  <p>Private sauna</p>
                  <p>Carbon monoxide alarm </p>
                  <p>Smoke alarm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 sticky top-1">
            <div className="w-full shadow-lg bg-white px-4 py-6 rounded-2xl flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-800">
                Add dates for prices
              </h2>
              <div className="w-full font-semibold rounded-t-2xl border flex flex-col  border-gray-200 divide-y-2 divide-gray-100">
                <div className="p-2">
                  <p>Check In</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full mt-1 justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="p-2">
                  <p>Check Out</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-left font-normal mt-1',
                          !checkoutDate && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkoutDate ? (
                          format(checkoutDate, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkoutDate}
                        onSelect={setCheckoutDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="p-2 flex gap-2">
                  <p>Total:</p>{' '}
                  <span className="font-normal">
                    ${total} (${data?.pricePerNight} per night)
                  </span>
                </div>
              </div>
              <button
                disabled={!date || !checkoutDate || isPending}
                onClick={() => {
                  mutate({
                    propertyId: data.id,
                    checkIn: date,
                    checkOut: checkoutDate,
                  });
                }}
                className="bg-gradient-to-r disabled:cursor-not-allowed from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 capitalize mt-2"
              >
                {isPending ? 'Booking....' : 'Book now'}
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
