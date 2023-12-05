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
import Settings from './components/Account/pages/Settings';
import Login from './components/Authrotization/LogIn';
import Signup from './components/Authrotization/SingUp';
import CheckMail from './components/Authrotization/CheckMail';
import Code from './components/Authrotization/Code';
import CompleteProfile from './components/Authrotization/CompleteProfile';
import AuthrotizationLayout from './components/Authrotization/AuthorizationLayout';

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
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <AuthrotizationLayout />,
        children: [
          {
            index: true,
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
