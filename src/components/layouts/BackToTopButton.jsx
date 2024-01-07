import PropTypes from 'prop-types';

const BackToTopButton = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-4">
      <button
        onClick={onClick}
        className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-accent text-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400"
      >
        ^
      </button>
    </div>
  );
};

BackToTopButton.propTypes = {
  onClick: PropTypes.func,
};

export default BackToTopButton;
