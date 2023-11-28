import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';
import SharedLayout from './components/SharedLayout/SharedLayout';
import CreateAdPage from './components/CreateAdPage/CreateAdPage';
import Account from './components/Account/Account';
import Advertisement from './components/Account/pages/Advertisement';
import Messages from './components/Account/pages/Messages';
import Active from './components/Account/pages/AdvertisementPages/Active';
import Waiting from './components/Account/pages/AdvertisementPages/Waiting';
import Unpaid from './components/Account/pages/AdvertisementPages/Unpaid';
import Inactive from './components/Account/pages/AdvertisementPages/Inactive';
import Rejected from './components/Account/pages/AdvertisementPages/Rejected';

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
        path: 'createad',
        element: <CreateAdPage />,
      },
      {
        path: 'account',
        element: <Account />,
        children: [
          {
            path: 'advertisement',
            element: <Advertisement />,
            children: [
              {
                path: 'active',
                element: <Active />,
              },
              {
                path: 'waiting',
                element: <Waiting />,
              },
              {
                path: 'unpaid',
                element: <Unpaid />,
              },
              {
                path: 'inactive',
                element: <Inactive />,
              },
              {
                path: 'rejected',
                element: <Rejected />
              },
            ],
          },
          {
            path: 'messages',
            element: <Messages />
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
