import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Star from './common/Star';
import Button from './common/Button';

const SmallCard = (props) => {
  const { title, author, rating, image_url, id } = props;
  return (
    <div className="w-[263px] max-h-[551px] flex flex-col justify-between">
      <div className="w-full h-[340px] rounded-lg mb-[10px]">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <h1 className="h-[70px] text-2xl font-semibold line-clamp-2">{title}</h1>
      <p className="text-xl pb-2 h-auto truncate">by {author?.name}</p>
      <Star rating={rating} style={'scale-50'} />
      <Link className="mt-2" to={`/books/${id}`}>
        <Button text="Read Book" />
      </Link>
    </div>
  );
};

SmallCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.object,
  rating: PropTypes.number,
  image_url: PropTypes.string,
  id: PropTypes.number,
};

export default SmallCard;
