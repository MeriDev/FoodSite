import { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Base from '@/components/pizza/Base';
import Toppings from '@/components/pizza/Toppings';
import Order from '@/components/pizza/Order';

interface PizzaType {
  base: string;
  toppings: string[];
}

const Pizza = () => {
  const [pizza, setPizza] = useState<PizzaType>({ base: '', toppings: [] });

  const { pathname } = useLocation();
  const pizzaStyles = location.pathname === '/pizza';

  useEffect(() => {
    if (pizzaStyles) {
      document.body.classList.add('pizza-body');
    } else {
      document.body.classList.remove('pizza-body');
    }

    return () => {
      document.body.classList.remove('pizza-body');
    };
  }, [pathname, pizzaStyles]);

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <div className="text-center max-w-3xl mx-auto pt-11">
        <h2 className="text-3xl mb-8">Welcome to Pizza Joint</h2>
        <Link to="/base">
          <button className="border-white border-2 rounded-full text-2xl py-4 px-8 my-8 mx-5 cursor-pointer">
            Create Your Pizza
          </button>
        </Link>
      </div>
      <Routes>
        <Route
          path="/base"
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
      </Routes>
    </>
  );
};

export default Pizza;
