type Pizza = {
  pizza: { base: string; toppings: string[] };
};
const Order = ({ pizza }: Pizza) => {
  return (
    <div className="text-center max-w-3xl mx-auto pt-20 text-xl">
      <h2>Thank you for your order :)</h2>
      <p className="my-5 mx-auto">You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
