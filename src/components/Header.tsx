import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { durartion: 2, delay: 2 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { durartion: 5, delay: 1, ease: 'easeInOut' },
  },
};

const Header = () => {
  return (
    <motion.header
      className="flex items-center justify-between p-8 pb-5 border-b border-current/30"
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ stiffness: 120, type: 'spring' }}
    >
      <Link to="/" className="flex items-center">
        <motion.div
          className="logo"
          drag
          dragElastic={0.7}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <motion.svg
            className="pizza-svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </motion.svg>
        </motion.div>
        <div>
          <h1 className="pb-1 text-3xl font-normal ml-5">Food Joint</h1>
        </div>
      </Link>
      <motion.nav
        whileHover={{
          scale: 1.1,
        }}
        transition={{ stiffness: 120, type: 'spring' }}
      >
        <Link className="btn" to="/pizza">
          Customize Pizza
        </Link>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
