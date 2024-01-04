import { Link } from 'react-router-dom';
import books from '../../assets/Books.png';

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <img src={books} alt="books" className="w-1/2 h-1/3" />
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-[147px] text-accent font-medium">404</h1>
        <h1 className="text-[23px]">Looks like you’ve got lost...</h1>
        <h1 className="text-light-gray">
          The page you’re looking for doesn’t exist or has been moved.
        </h1>
        <button className="text-accent text-lg border border-accent rounded-lg px-[30px] py-[10px] hover:text-white hover:bg-accent">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
