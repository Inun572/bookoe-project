import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home';
import Latest from './pages/Latest/index';
import Recommendation from './pages/Recommendation/index';
import BookDetails from './pages/Home/BookDetails';
import Search from './pages/Search/index';
import NotFound from './pages/NotFound/NotFound';
const Router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: Home,
      },
      {
        path: 'latest',
        Component: Latest,
      },
      {
        path: 'top-picks',
        Component: Recommendation,
      },
      {
        path: 'books/search/:keyword',
        Component: Search,
      },
      {
        path: 'books/:bookId',
        Component: BookDetails,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default Router;
