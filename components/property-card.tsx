import { TProperty } from '@/types/property';
import { getRandomImage } from '@/utils';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
// import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const PropertyCard = ({ property }: { property: TProperty }) => {
  console.log(property, 'From card');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  // const image = getRandomImage();
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full md:max-w-72 cursor-pointer mb-4 group"
    >
      <Link
        href={`/property/${property.id}`}
        className="w-full md:max-w-72 cursor-pointer mb-4 group"
      >
        <div className="h-72 rounded-lg relative md:max-w-72 mb-3.5">
          <div className="absolute top-4 z-30 px-1.5 py-1 left-4 bg-white text-black rounded-lg">
            Guest Favorite
          </div>
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
          <HeartIcon className="h-6 w-6 text-white cursor-pointer absolute top-4 right-4 z-30" />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
        </div>
        <div className="w-full text-gray-800 font-semibold flex items-center justify-between">
          <p>{property.title}</p>
          <div className="flex items-center gap-1">
            <StarIcon className="size-4 text-gray-500" />
            <p>4.6</p>
          </div>
        </div>
        <p className="text-gray-700 line-clamp-1">{property.description}</p>
        <p className="text-gray-700">
          <span className="font-semibold">${property.pricePerNight} </span>
          night
        </p>
      </Link>
    </motion.div>
  );
};
