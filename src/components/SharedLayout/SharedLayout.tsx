import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
	return (
		<Stack direction={'row'}>
			<Outlet />
		</Stack>
	)
}
