import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Code = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ border: 'solid 1px #000', padding: '80px 90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: { sm: '80vw', md: '40vw' }, gap: '30px' }}>
            <Typography>Confirm the code</Typography>
            <Typography>We need to make sure it`s really you. Enter the verification code we sent you to C***@i***.</Typography>
            <TextField label="Verefication code" type="password" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <Button>Send new code</Button>
            <Button onClick={() => { navigate('/auth/completeprofile') }}>Confirm</Button>
        </Box >
    );
}

export default Code;
