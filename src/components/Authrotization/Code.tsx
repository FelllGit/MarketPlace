import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

function Code() {
    return (
        <Box sx={{ border: 'solid 1px #000', padding: '80px 90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: { sm: '80vw', md: '40vw' }, gap: '30px' }}>
            <Typography>Confirm the code</Typography>
            <Typography>We need to make sure it`s really you. Enter the verification code we sent you to C***@i***.</Typography>
            <TextField label="Verefication code" type="password" variant="outlined" margin="normal" fullWidth style={{ marginBottom: '30px' }} />
            <Button>Send new code</Button>
            <Button>Confirm</Button>
        </Box >
    );
}

export default Code;
