import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type BaseProps = {
  pizza: { base: string };
  addBase: (base: string) => void;
};

//  variants
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
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const nextVariants = {
  hidden: { x: '-100vw' },

  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};

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

const Base = ({ addBase, pizza }: BaseProps) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          const spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextVariants}>
          <Link to="/pizza/topping">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btn next"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
