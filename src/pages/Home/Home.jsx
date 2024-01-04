// import PropTypes from 'prop-types';

import Booklists from './Booklists';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="max-w-full min-h-screen">
      <Hero />
      <Booklists />
    </div>
  );
};

Home.propTypes = {};

export default Home;
