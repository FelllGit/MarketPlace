import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home/Home';
import SharedLayout from './Pages/SharedLayout/SharedLayout';
import CreateAdPage from './Pages/CreateAdPage/CreateAdPage';
import Account from './Pages/Account/Account';
import Advertisement from './Pages/Account/Advertisement';
import Messages from './Pages/Account/Messages';
import Active from './Pages/Account/AdvertisementPages/Active';
import Waiting from './Pages/Account/AdvertisementPages/Waiting';
import Unpaid from './Pages/Account/AdvertisementPages/Unpaid';
import Inactive from './Pages/Account/AdvertisementPages/Inactive';
import Rejected from './Pages/Account/AdvertisementPages/Rejected';
import Settings from './Pages/Account/Settings';
import Login from './Pages/Authrotization/LogIn';
import Signup from './Pages/Authrotization/SingUp';
import CheckMail from './Pages/Authrotization/CheckMail';
import Code from './Pages/Authrotization/Code';
import CompleteProfile from './Pages/Authrotization/CompleteProfile';
import AuthrotizationLayout from './Pages/Authrotization/AuthorizationLayout';

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
          {
            path: 'settings',
            element: <Settings />
          }
        ],
      },
      {
        path: 'auth',
        element: <AuthrotizationLayout />,
        children: [
          {
            index: true,
            element: <Login />
          },
          {
            path: 'signup',
            element: <Signup />
          },
          {
            path: 'checkmail',
            element: <CheckMail />
          },
          {
            path: 'confirmcode',
            element: <Code />
          },
          {
            path: 'completeprofile',
            element: <CompleteProfile />,
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
