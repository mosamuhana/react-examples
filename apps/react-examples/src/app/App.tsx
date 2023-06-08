import { RouterProvider } from 'react-router-dom';

import { router } from './router';

const Fallback = () => <p>Performing initial data load</p>;

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
