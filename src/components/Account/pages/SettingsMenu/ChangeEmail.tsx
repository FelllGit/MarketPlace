import { Box, Button, TextField } from "@mui/material";

const ChangeEmail = () => (
    <Box component="form" onSubmit={() => { }} noValidate sx={{ mt: 1, paddingX: '80px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <TextField label="New E-mail" variant="outlined" />
            <Button type="submit" variant="contained" sx={{ padding: '20px 50px', color: '#FFF', background: '#0098C6', border: '0', boxShadow: '0', width: 'fit-content' }}>
                Save
            </Button>
        </div>
    </Box>
);

export default ChangeEmail;
