import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '@/components/Loader';

//variants
const buttonVariants = {
  hover: {
    scale: 1.1 as const,
    textShadow: '0px 0px 8px rgb(255,255,255)' as const,
    boxShadow: '0px 0px 8px rgb(255,255,255)' as const,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse' as const,
      duration: 0.4,
    },
  },
} as const;

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Pizza = () => {
  return (
    <>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-center max-w-3xl mx-auto pt-20"
      >
        <h2 className="text-3xl mb-8">Welcome to Pizza Joint</h2>
        <Link to="/pizza/base">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="border-white border-2 rounded-full text-2xl py-4 px-8 my-8 mx-5 cursor-pointer"
          >
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader />
      </motion.div>
      <Outlet />
    </>
  );
};

export default Pizza;
