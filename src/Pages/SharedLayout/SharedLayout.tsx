import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import Header from '../Header';
import Footer from '../Footer';

const SharedLayout = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Stack
      direction="column"
      sx={{
        flex: '1',
        paddingLeft: {
          lg: '8rem', // 8rem padding for large screens
          md: '8.438rem', // Adjust this value as needed for medium screens
          sm: '2rem', // Adjust this value as needed for extra small screens
        },
        paddingRight: {
          lg: '8rem', // 8rem padding for large screens
          md: '8.438rem', // Adjust this value as needed for medium screens
          sm: '2rem', // Adjust this value as needed for extra small screens
        },
        paddingY: '2rem',
      }}
    >
      <Outlet />
    </Stack>
    <Footer />
  </ThemeProvider>
);

export default SharedLayout;
