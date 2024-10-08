import { motion } from 'framer-motion';
import { useEffect } from 'react';

type OrderTypes = {
  pizza: { base: string; toppings: string[] };
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// variant
const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }: OrderTypes) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-center max-w-3xl mx-auto pt-20 text-xl"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariant} className="my-5 mx-auto">
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map(topping => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
