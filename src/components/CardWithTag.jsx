import PropTypes from 'prop-types';

const CardWithTag = ({ Card, tag, ...props }) => {
  return (
    <div className="relative flex justify-stretch">
      <div className="min-w-[80px] h-[41px] p-[5px] absolute left-0 top-[5%] flex justify-end items-center bg-accent rounded-e-full">
        {tag}
      </div>
      <Card {...props} />
    </div>
  );
};

CardWithTag.propTypes = {
  Card: PropTypes.func.isRequired,
  tag: PropTypes.any,
};

export default CardWithTag;
