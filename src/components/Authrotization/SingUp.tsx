import { TextField, Button, Grid, Typography, Checkbox, FormControlLabel } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { useLocation, Link } from 'react-router-dom';

function Signup() {
    const location = useLocation();

    return (
        <>
            <Grid container sx={{ textAlign: 'center', marginBottom: '45px' }}>
                <Grid xs sx={{ borderBottom: 'solid 1px #000', paddingBottom: '10px' }}>
                    <Link to={'/login'} style={{ textDecoration: 'none', color: '#000' }}>Log in</Link>
                </Grid>
                <Grid xs sx={location.pathname.startsWith('/signup') ? { fontWeight: '700', borderBottom: 'solid 2px #000' } : { borderBottom: 'solid 1px #000', paddingBottom: '10px' }}>
                    <Typography style={{ textDecoration: 'none', color: '#000' }}>Sign up</Typography>
                </Grid>
            </Grid>
            <TextField label="Ел. пошта" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <TextField label="Пароль" type="password" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <FormControlLabel sx={{ alignSelf: 'flex-start' }} control={<Checkbox defaultChecked />} label={<Typography>I agree to the <Link to={''}>user agreement</Link> and <Link to={''}>privacy policy</Link></Typography>} />
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
        </ >
    );
}

export default Signup;
