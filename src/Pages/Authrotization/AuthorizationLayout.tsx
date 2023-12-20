import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from '../../styles/Auth.module.scss'

const AuthrotizationLayout = () => {
    const location = useLocation();
    console.log(location);

    return (
        <Box
            className={styles.authContainer}
            sx={{
                width: { sm: "80vw", md: "40vw" }
            }}
        >

            {(location.pathname.endsWith('/auth') || location.pathname.endsWith('/auth/signup')) ?
                <Grid container sx={{ textAlign: 'center', marginBottom: '45px' }}>
                    <Grid xs sx={location.pathname.endsWith('/auth') ? { fontWeight: '700', borderBottom: 'solid 2px #000' } : { borderBottom: 'solid 1px #000', paddingBottom: '10px' }}>
                        <Link to={''} style={{ textDecoration: 'none', color: '#000' }}>Log in</Link>
                    </Grid>
                    <Grid xs sx={location.pathname.startsWith('/auth/signup') ? { fontWeight: '700', borderBottom: 'solid 2px #000' } : { borderBottom: 'solid 1px #000', paddingBottom: '10px' }}>
                        <Link to={'signup'} style={{ textDecoration: 'none', color: '#000' }}>Sign up</Link>
                    </Grid>
                </Grid>
                : <></>}
            <Outlet></Outlet>
        </Box>
    );
};

export default AuthrotizationLayout;
