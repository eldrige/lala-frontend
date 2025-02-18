import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { ImageMosaic } from '@/components/image-mosaic';
import Navbar from '@/components/navbar';
import { PropertyCard } from '@/components/property-card';
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';

const CATEGORIES = ['All', 'Flat', 'Villa', 'Apartment'];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-white z-50">
        <Container classNames="bg-gray-100 rounded-b-2xl px-10 sm:px-0 relative overflow-hidden">
          <div className="hidden sm:block">
            <ImageMosaic />
          </div>
          <div className="w-full h-[60vh] md:h-[50vh]  rounded-lg  text-black">
            <h1 className="text-3xl text-center md:text-left w-full md:text-4xl md:max-w-[60%] font-bold pt-16  mb-4">
              Find Your Perfect Apartment or Let Yours Stress-Free – All in One
              Place<span className="text-pink-500 text-4xl md:text-6xl">.</span>
            </h1>
            <div className="flex items-center gap-4 md:gap-2 mb-4">
              {CATEGORIES.map((category, index) => (
                <div
                  key={category}
                  className="text-gray-800 p-2 cursor-pointer flex flex-col items-center gap-1"
                >
                  <div
                    className={classNames(
                      'rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 bg-white size-12 mb-1.5 flex items-center justify-center',
                      index === 0 && 'bg-pink-500 text-white'
                    )}
                  >
                    <HomeIcon
                      className={classNames(
                        'h-6 w-6 text-black',
                        index === 0 && 'text-white'
                      )}
                    />
                  </div>
                  <p className="text-sm">{category}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg w-full md:w-[30rem]">
              <input
                type="text"
                className="bg-white rounded-lg py-2 px-4 outline-none"
              />
              <div className="rounded-lg bg-pink-500 p-2">
                <MagnifyingGlassIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Container>
        <Container classNames="py-8 px-10 md:px-0">
          <h2 className="text-2xl text-black font-bold my-4">
            Your recent searches
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <PropertyCard />
            <PropertyCard />
          </div>
          <h2 className="text-2xl text-black font-bold my-8">Popular around</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <PropertyCard key={i} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="text-black flex items-center justify-center gap-4 flex-col">
              <p className="font-semibold">Continue exploring design homes</p>
              <button className="bg-black text-white rounded-lg py-2 px-4 capitalize">
                show more
              </button>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
