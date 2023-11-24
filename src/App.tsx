import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';
import SharedLayout from './components/SharedLayout/SharedLayout';
import CreateAdPage from './components/CreateAdPage/CreateAdPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/createad',
        element: <CreateAdPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
