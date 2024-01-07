import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, style } = props;
  return (
    <button
      className={`text-accent font-medium text-xl w-full border border-accent rounded-lg py-[10px] px-auto hover:text-white hover:bg-accent outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent`}
      style={style}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  props: PropTypes.object,
  style: PropTypes.object,
};

export default Button;
