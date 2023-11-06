import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import Header from '../Header';
import Footer from '../Footer';

const SharedLayout = () => (
  <ThemeProvider theme={theme}>
    <Stack
      direction="column"
      sx={{
        paddingLeft: {
          lg: '8rem', // 8rem padding for large screens
          md: '6rem', // Adjust this value as needed for medium screens
          sm: '2rem', // Adjust this value as needed for extra small screens
        },
        paddingRight: {
          lg: '8rem', // 8rem padding for large screens
          md: '6rem', // Adjust this value as needed for medium screens
          sm: '2rem', // Adjust this value as needed for extra small screens
        },
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  </ThemeProvider>
);

export default SharedLayout;
