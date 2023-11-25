import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';
import SharedLayout from './components/SharedLayout/SharedLayout';
import CreateAdPage from './components/CreateAdPage/CreateAdPage';
import Account from './components/Account/Account';
import Advertisement from './components/Account/pages/Advertisement';
import Messages from './components/Account/pages/Messages';

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
            index: true,
            element: <Advertisement />,
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
