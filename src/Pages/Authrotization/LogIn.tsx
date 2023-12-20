import { TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton';

const Login = () => (
    <>
        <TextField label="Ел. пошта" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
        <TextField label="Пароль" type="password" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
        <Link to={'#'} style={{ alignSelf: 'flex-start', }}>
            Forgot password?
        </Link>
        <PrimaryButton variant="contained" color="primary" style={{ margin: '20px 0', padding: '20px 50px' }}>
            Log in
        </PrimaryButton>
        <Typography variant="body1" style={{ margin: '20px 0' }}>
            Or login via:
        </Typography>
        {/* Icons or buttons for Google, Facebook, Apple login would go here */}
        <div style={{ display: 'flex', gap: '40px' }}>
            <Link to={''}><i className="ri-google-fill" /></Link>
            <Link to={''}><i className="ri-facebook-fill" /></Link>
            <Link to={''}><i className="ri-apple-fill" /></Link>
        </div>
    </>
)

export default Login;
