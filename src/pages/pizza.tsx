import { Link } from 'react-router-dom';

const Pizza = () => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto pt-11">
        <h2 className="text-3xl mb-8">Welcome to Pizza Joint</h2>
        <Link to="/pizza/base">
          <button className="border-white border-2 rounded-full text-2xl py-4 px-8 my-8 mx-5 cursor-pointer">
            Create Your Pizza
          </button>
        </Link>
      </div>
    </>
  );
};

export default Pizza;
