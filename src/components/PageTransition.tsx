import { motion } from 'motion/react';
import { useLocation, Outlet } from 'react-router-dom';
import { pageTransition, transitionFast } from '../lib/motion';

export default function PageTransition() {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transitionFast}
    >
      <Outlet />
    </motion.div>
  );
}
