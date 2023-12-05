import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { useLocation, Link } from 'react-router-dom';


const Login = () => {
    const location = useLocation();

    return (
        <Box sx={{ border: 'solid 1px #000', padding: '80px 90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: { sm: '80vw', md: '40vw' }, gap: '30px' }}>
            <Grid container sx={{ textAlign: 'center', marginBottom: '45px' }}>
                <Grid xs sx={location.pathname.startsWith('/login') ? { fontWeight: '700', borderBottom: 'solid 2px #000' } : { borderBottom: 'solid 1px #000', paddingBottom: '10px' }}>
                    <Typography style={{ textDecoration: 'none', color: '#000' }}>Log in</Typography>
                </Grid>
                <Grid xs sx={{ borderBottom: 'solid 1px #000', paddingBottom: '10px' }}>
                    <Link to={'/signup'} style={{ textDecoration: 'none', color: '#000' }}>Sign up</Link>
                </Grid>
            </Grid>
            <TextField label="Ел. пошта" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <TextField label="Пароль" type="password" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <Link to={'#'} style={{ alignSelf: 'flex-start', }}>
                Forgot password?
            </Link>
            <Button variant="contained" color="primary" style={{ margin: '20px 0', padding: '20px 50px' }}>
                Log in
            </Button>
            <Typography variant="body1" style={{ margin: '20px 0' }}>
                Or login via:
            </Typography>
            {/* Icons or buttons for Google, Facebook, Apple login would go here */}
            <div style={{ display: 'flex', gap: '40px' }}>
                <Link to={''}><GoogleIcon /></Link>
                <Link to={''}><FacebookIcon /></Link>
                <Link to={''}><AppleIcon /></Link>
            </div>
        </Box >
    );
}

export default Login;
