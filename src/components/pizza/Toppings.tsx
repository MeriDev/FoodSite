import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ToppingsProps = {
  pizza: { toppings: string[] };
  addTopping: (topping: string) => void;
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
    <div className="toppings container">
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

      <Link to="/pizza/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
          className="btn next"
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
