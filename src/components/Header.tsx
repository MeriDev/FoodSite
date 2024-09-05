import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto p-6 border-b border-current/30">
      <Link to="/" className="flex items-center ">
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
        <div className="font-quicksand flex">
          <h1 className="pb-1 text-3xl font-normal  ml-5 ">Food Joint</h1>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="btn" to="/pizza">
              Customize Pizza
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
