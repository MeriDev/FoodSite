import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Pizza = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="text-center max-w-3xl mx-auto pt-11"
      >
        <h2 className="text-3xl mb-8">Welcome to Pizza Joint</h2>
        <Link to="/pizza/base">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            className="border-white border-2 rounded-full text-2xl py-4 px-8 my-8 mx-5 cursor-pointer"
          >
            Create Your Pizza
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Pizza;
