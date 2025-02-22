import { motion } from 'framer-motion';
// import { PropertyCard } from './PropertyCard';
import { TProperty } from '@/types/property';
import { PropertyCard } from '@/components/property-card';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const IMAGES = [
  '/images/house.jpg',
  '/images/house-one.jpg',
  '/images/house-two.jpg',
  '/images/house-three.jpg',
  '/images/house-four.jpg',
  '/images/house-five.jpg',
  '/images/house-six.jpg',
  '/images/house-seven.jpg',
  '/images/house-eight.jpg',
  '/images/house-nine.jpg',
  '/images/house-ten.jpg',
];

export const PropertyList = ({ properties }: { properties: TProperty[] }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {properties.map((property, index) => (
        <PropertyCard
          key={property.id}
          property={property}
          image={IMAGES[index]}
        />
      ))}
    </motion.div>
  );
};
