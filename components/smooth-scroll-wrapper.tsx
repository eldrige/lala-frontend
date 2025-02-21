'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

export const SmoothScrollWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  // Smooth scrolling effect
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div ref={scrollRef} style={{ y: smoothScroll }}>
      {children}
    </motion.div>
  );
};
