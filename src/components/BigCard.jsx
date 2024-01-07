import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Star from './common/Star';
import Button from './common/Button';

const BigCard = ({ title, author, description, rating, cover, id }) => {
  return (
    <div className="w-[564px] h-[346px] flex justify-center gap-4">
      <div className="w-1/2 max-h-full object-cover rounded-lg">
        <img src={cover} alt={title} className="w-full h-full rounded-lg" />
      </div>
      <div className="w-1/2 max-h-full flex flex-col justify-between">
        <h1 className="h-[80px] mb-4 text-2xl font-semibold line-clamp-2">
          {title}
        </h1>
        <p className="text-xl w-full h-auto">by {author}</p>
        <div className="my-4 max-h-[41px] flex justify-start items-center gap-4">
          <div className="min-w-[41px] h-[41px] rounded-full text-white bg-rating flex justify-center items-center">
            {rating.toFixed(1)}
          </div>
          <Star rating={rating} />
        </div>
        <p className="h-[100px] line-clamp-4 mb-[30px]">{description}</p>
        <Link className="mt-4" to={`/books/${id}`}>
          <Button text="Read Book" />
        </Link>
      </div>
    </div>
  );
};

BigCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  cover: PropTypes.string,
  id: PropTypes.number,
};

export default BigCard;
