import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

const AuthrotizationLayout = () => (
    <Box sx={{ border: 'solid 1px #000', padding: '80px 90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: { sm: '80vw', md: '40vw' }, gap: '30px' }}>
        <Outlet></Outlet>
    </Box>
)

export default AuthrotizationLayout;