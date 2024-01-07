import PropTypes from 'prop-types';

import Navbar from '../components/layouts/Navbar';
import FooterCTA from '../components/layouts/FooterCTA';
import Footer from '../components/layouts/Footer';
import BackToTopButton from '../components/layouts/BackToTopButton';
import { useEffect, useState } from 'react';

const NoAuth = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
      if (scroll > 30) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  const onBackToTopHandle = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="max-w-screen min-h-screen px-[100px] grid-flow-row">
      <Navbar scrolled={show} />
      <main className="w-full min-h-screen my-[160px] isolate">{children}</main>
      <FooterCTA />
      <Footer />
      {show && <BackToTopButton onClick={onBackToTopHandle} />}
    </div>
  );
};

NoAuth.propTypes = {
  children: PropTypes.node,
};

export default NoAuth;
