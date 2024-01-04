import { Outlet } from 'react-router-dom';
import Layout from './layout/NoAuth';
import ScrollToTop from './utils/scrollToTop';

const App = () => {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Outlet />
      </Layout>
    </>
  );
};

export default App;
