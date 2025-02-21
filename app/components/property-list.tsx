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

export const PropertyList = ({ properties }: { properties: TProperty[] }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </motion.div>
  );
};
