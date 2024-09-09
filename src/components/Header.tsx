import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="flex items-center justify-between p-8 pb-5 border-b border-current/30"
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.2, stiffness: 120, type: 'spring' }}
    >
      <Link to="/" className="flex items-center">
        <div className="logo">
          <svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
          </svg>
        </div>
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
