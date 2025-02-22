'use client';
import { useState, createElement } from 'react';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { ImageMosaic } from '@/components/image-mosaic';
import Navbar from '@/components/navbar';
import { PropertyCard } from '@/components/property-card';
import {
  HomeIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useGetAllProperties } from '@/features/property';
import { Loader } from './components/loader';
import { SmoothScrollWrapper } from '@/components/smooth-scroll-wrapper';
import { PropertyList } from './components/property-list';
import clsx from 'clsx';

const CATEGORIES = [
  { label: 'All', active: true, icon: HomeModernIcon },
  { label: 'Flat', active: false, icon: HomeIcon },
  { label: 'Villa', active: false, icon: HomeModernIcon },
  { label: 'Apartment', active: false, icon: HomeIcon },
];

export default function Home() {
  const { data, isLoading } = useGetAllProperties();
  const [showMore, setShowMore] = useState(false);
  const firstPropertyList = data?.slice(0, 8);
  const secondPropertyList = data?.slice(8);
  const [categories, setCategories] = useState(CATEGORIES);
  const activeCategory = categories.find((category) => category.active);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SmoothScrollWrapper>
      <Navbar />
      <div className="w-full bg-white z-50">
        <Container classNames="bg-gray-100 shadow-lg rounded-b-2xl px-10 sm:px-0 relative overflow-hidden">
          <div className="hidden sm:block">
            <ImageMosaic />
          </div>
          <div className="w-full h-[60vh] md:h-[50vh]  rounded-lg  text-black">
            <h1 className="text-3xl text-center md:text-left w-full md:text-4xl md:max-w-[60%] font-bold pt-16  mb-4">
              Find Your Perfect Apartment or Let Yours Stress-Free – All in One
              Place<span className="text-pink-500 text-4xl md:text-6xl">.</span>
            </h1>
            <div className="flex items-center gap-4 md:gap-2 mb-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="text-gray-600 p-2 cursor-pointer   flex flex-col items-center gap-1"
                >
                  <button
                    className={clsx(
                      'rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300  size-12 mb-1.5 flex items-center justify-center',
                      activeCategory?.label === category.label
                        ? 'bg-pink-500 text-white'
                        : 'bg-white text-black'
                    )}
                    onClick={() => {
                      setCategories(
                        categories.map((cat) => ({
                          ...cat,
                          active: cat.label === category.label,
                        }))
                      );
                    }}
                  >
                    <HomeModernIcon
                      className={classNames(
                        'h-6 w-6 text-black',
                        activeCategory?.label === category.label && 'text-white'
                      )}
                    />
                  </button>
                  <p className="text-sm">{category.label}</p>
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
            {data?.slice(0, 2).map((property, i) => (
              <PropertyCard key={i} property={property} />
            ))}
          </div>
          <h2 className="text-2xl text-black font-bold my-8">Popular around</h2>
          {data !== undefined && data.length > 0 ? (
            <PropertyList properties={firstPropertyList} />
          ) : null}
          {showMore && <PropertyList properties={secondPropertyList} />}
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="text-black flex items-center justify-center gap-4 flex-col">
              <p className="font-semibold">Continue exploring design homes</p>
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-black text-white rounded-lg py-2 px-4 capitalize"
              >
                show {showMore ? 'less' : 'more'}
              </button>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
}
