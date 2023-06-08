import { Link, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components';

import { routes } from './examples/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/examples',
        children: routes,
      },
      {
        path: '*',
        Component: NoMatch,
      }
    ]
  }
]);

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
