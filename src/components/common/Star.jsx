import PropTypes from 'prop-types';
import '../../styles/star.css';

const Star = ({ rating, style }) => {
  const star = rating?.toFixed(1);
  return <i className={style} data-star={star} title={star}></i>;
};

Star.propTypes = {
  rating: PropTypes.number,
  style: PropTypes.string,
};

export default Star;
