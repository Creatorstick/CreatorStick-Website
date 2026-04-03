'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8, 
  className = '',
  once = true,
  amount = 0.3
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  // Smaller offsets keep painting within a tighter area — critical for mobile perf.
  // We read matchMedia directly (no hook needed — value only needed at render time).
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;
  const offset = isMobile ? 30 : 60;

  const directions = {
    up:    { y: offset, x: 0 },
    down:  { y: -offset, x: 0 },
    left:  { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
    none:  { x: 0, y: 0 },
  };

  const { x, y } = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      // Hint the browser to create a GPU compositing layer for this element
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
