import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import Header from '../Header';
import Footer from '../Footer';

const SharedLayout = () => (
		<Stack direction={'column'}>
			<ThemeProvider theme={theme}>
				<Header />
				<Outlet />
				<Footer />
			</ThemeProvider>
		</Stack>
);

export default SharedLayout;
