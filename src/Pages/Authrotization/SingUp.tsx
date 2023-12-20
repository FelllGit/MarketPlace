import { TextField, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton';

const Signup = () => {
    const navigate = useNavigate();

    return (
        <>
            <TextField label="Ел. пошта" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <TextField label="Пароль" type="password" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <FormControlLabel sx={{ alignSelf: 'flex-start' }} control={<Checkbox defaultChecked />} label={<Typography>I agree to the <Link to={''}>user agreement</Link> and <Link to={''}>privacy policy</Link></Typography>} />
            <PrimaryButton onClick={() => { navigate('/auth/checkmail') }} variant="contained" color="primary" style={{ margin: '20px 0', padding: '20px 50px' }}>
                Sign up
            </PrimaryButton>
            <Typography variant="body1" style={{ margin: '20px 0' }}>
                Or login via:
            </Typography>
            <div style={{ display: 'flex', gap: '40px' }}>
                <Link to={''}><i className="ri-google-fill" /></Link>
                <Link to={''}><i className="ri-facebook-fill" /></Link>
                <Link to={''}><i className="ri-apple-fill" /></Link>
            </div>
        </>
    );
};


export default Signup;
