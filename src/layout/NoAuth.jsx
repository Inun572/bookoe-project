import PropTypes from 'prop-types';

import Navbar from '../components/layouts/Navbar';
import FooterCTA from '../components/layouts/FooterCTA';
import Footer from '../components/layouts/Footer';

const NoAuth = ({ children }) => {
  return (
    <div className="max-w-screen min-h-screen px-[100px] grid-flow-row">
      <Navbar />
      <div className="w-full min-h-screen">{children}</div>
      <FooterCTA />
      <Footer />
    </div>
  );
};

NoAuth.propTypes = {
  children: PropTypes.node,
};

export default NoAuth;
