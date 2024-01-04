import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useSearch } from '../../store/store';
import { useState } from 'react';

const routes = [
  {
    path: '/',
    name: 'All',
  },
  {
    path: '/latest',
    name: 'Latest',
  },
  {
    path: '/top-picks',
    name: 'Top Picks',
  },
];

const Navbar = () => {
  const [search, setSearch] = useState('');
  const setKeyword = useSearch((state) => state.setKeyword);

  const location = useLocation();
  const navigate = useNavigate();

  const onSearchHandle = (e) => {
    if (e.target.value === '') {
      return;
    }

    if (e.key === 'Enter') {
      setKeyword(e.target.value);
      navigate(`books/search/${e.target.value}`);
    }
  };
  return (
    <header className="flex justify-between items-center my-[33px]">
      <Logo />
      <div className="flex justify-between items-center">
        <div className="min-w-[226px] flex justify-between items-center gap-6 text-xl">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className={
                location.pathname === route.path ? 'font-semibold' : ''
              }
            >
              {route.name}
            </NavLink>
          ))}
        </div>
        <div className="relative">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-14 -translate-y-1/2"
          >
            <path
              d="M8.45276 16.9146C10.5811 16.9146 12.5882 16.1326 14.1499 14.7069L19.4039 19.9609C19.4719 20.0289 19.5614 20.0629 19.6509 20.0629C19.7405 20.0629 19.83 20.0289 19.898 19.9609C20.034 19.8249 20.034 19.6039 19.898 19.4679L14.6406 14.2105C17.7209 10.8979 17.6586 5.70166 14.4343 2.47741C12.8364 0.879445 10.7126 0 8.45389 0C6.19521 0 4.0714 0.879445 2.47344 2.47741C-0.824479 5.77532 -0.824479 11.1404 2.47344 14.4383C4.07027 16.0351 6.19408 16.9146 8.45276 16.9146ZM2.96643 2.97039C4.43179 1.50503 6.38107 0.698116 8.45389 0.698116C10.5256 0.698116 12.4749 1.50503 13.9414 2.97039C16.9661 5.99632 16.9661 10.9194 13.9414 13.9442C12.4749 15.4095 10.5267 16.2165 8.45389 16.2165C6.38107 16.2165 4.43292 15.4095 2.96643 13.9442C-0.0594985 10.9183 -0.0594985 5.99518 2.96643 2.97039Z"
              fill="#A4A4A4"
            />
          </svg>
          <input
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={onSearchHandle}
            placeholder="Search by title or authors..."
            className="min-w-[402px] h-[50px] py-[10px] pl-14 pr-4 ml-9 mr-4 rounded-lg ring-1 ring-[#DDD] placeholder:font-light placeholder:text-light-gray placeholder:text-xl outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent"
          />
        </div>
        <button className="text-accent font-medium text-xl w-full border border-accent rounded-lg px-[30px] py-[10px] hover:text-white hover:bg-accent">
          Edit List
        </button>
      </div>
    </header>
  );
};

export default Navbar;
