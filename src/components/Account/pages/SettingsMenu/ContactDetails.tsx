import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";

const ContactDetails = () => (
    <Box component="form" onSubmit={() => { }} noValidate sx={{ mt: 1, paddingX: '80px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <TextField label="Choose a city" variant="outlined" />
            <TextField label="Contact person" variant="outlined" />
            <TextField label="Phone number" variant="outlined" />
            <Button type="submit" variant="contained" sx={{ padding: '20px 50px', color: '#FFF', background: '#0098C6', border: '0', boxShadow: '0', width: 'fit-content' }}>
                Save
            </Button>
        </div>
    </Box>
);

export default ContactDetails;
