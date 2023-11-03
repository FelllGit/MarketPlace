import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => (
		<Stack direction={'row'}>
			<Outlet />
		</Stack>
);

export default SharedLayout;
