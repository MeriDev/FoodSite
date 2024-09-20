import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';

import Header from './components/Header';
import Pizza from './pages/pizza';
import Base from './components/pizza/Base';
import Toppings from './components/pizza/Toppings';
import Order from './components/pizza/Order';
import Modal from './components/Modal';

interface PizzaType {
  base: string;
  toppings: string[];
}

function App() {
  const [pizza, setPizza] = useState<PizzaType>({ base: '', toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const { pathname } = useLocation();
  const pizzaStyles =
    location.pathname === '/pizza' || location.pathname.startsWith('/pizza/');

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

  const resetPizza = () => {
    setPizza({ base: '', toppings: [] });
  };

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
      <Header />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        resetPizza={resetPizza}
      />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="pizza/*">
            <Route index element={<Pizza />} />
            <Route
              path="base"
              element={<Base addBase={addBase} pizza={pizza} />}
            />
            <Route
              path="topping"
              element={<Toppings addTopping={addTopping} pizza={pizza} />}
            />
            <Route
              path="order"
              element={<Order pizza={pizza} setShowModal={setShowModal} />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
