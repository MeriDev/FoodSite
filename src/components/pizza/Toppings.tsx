import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ToppingsProps = {
  pizza: { toppings: string[] };
  addTopping: (topping: string) => void;
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
    transition: { type: 'spring', delay: 0.5 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const nextVariants = {
  hidden: { x: '-100vw' },

  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120, delay: 1.5 },
  },
};

const Toppings = ({ addTopping, pizza }: ToppingsProps) => {
  const toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          const spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.toppings[0] && (
        <motion.div variants={nextVariants}>
          <Link to="/pizza/order">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btn next"
            >
              Order
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Toppings;
