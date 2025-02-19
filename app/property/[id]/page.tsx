// import { useRouter } from 'next/router';

import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { StarIcon } from '@heroicons/react/16/solid';
import { ShareIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Page() {
  // const router = useRouter();
  return (
    <>
      <Navbar />
      <Container classNames="px-10 md:px-20 pb-20 text-gray-800">
        <div className="w-full flex items-center justify-between pt-8 pb-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Penthouse 100m from beachfront with pool and sauna
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
          <div className="w-1/2 min-h-[400px] rounded-l-2xl bg-gray-300">1</div>
          <div className="w-1/2 min-h-[400px] grid grid-cols-2 gap-2">
            <div className="w-full bg-red-500">1</div>
            <div className="w-full bg-blue-500 rounded-tr-2xl">2</div>
            <div className="w-full bg-orange-500">3</div>
            <div className="w-full bg-green-500 rounded-br-2xl">4</div>
          </div>
        </div>
        <div className="w-full flex justify-between mt-4 gap-4">
          <div className="w-2/3 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800">
              Entire rental unit in Cape Town, South Africa.
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
                <span className="size-12 rounded-full bg-pink-500"></span>
                <h3 className="text-gray-600 text-lg">Hosted by Gavin</h3>
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
              <div className="w-full font-semibold rounded-t-2xl border flex  border-gray-200 divide-x-2 divide-gray-100">
                <div className="p-2">
                  <p>Check In</p>
                  <input type="date" className="w-full" value="" />
                </div>
                <div className="p-2">
                  <p>Check Out</p>
                  <input type="date" className="w-full" />
                </div>
              </div>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 capitalize mt-2">
                Book
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
