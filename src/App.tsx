import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';
import SharedLayout from './components/SharedLayout/SharedLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
