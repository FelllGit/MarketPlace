import { Avatar, Button, TextField, Typography } from "@mui/material";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

function CompleteProfile() {
    return (
        <>
            <Typography sx={{ marginBottom: '40px' }}>Complete your profile</Typography>
            <Avatar sx={{ width: '300px', height: '300px', background: 'none', color: '#868686', border: 'solid 1px #868686' }}><PhotoCameraOutlinedIcon sx={{ transform: 'scale(3.0)' }} /></Avatar>
            <div>
                <TextField label="Name" variant="outlined" margin="normal" fullWidth />
                <TextField label="Surname" type="password" variant="outlined" margin="normal" fullWidth />
                <TextField label="Phone number" type="password" variant="outlined" margin="normal" fullWidth />
            </div>
            <Button variant="contained" sx={{ padding: '20px 50px', color: '#FFF', background: '#0098C6', border: '0', boxShadow: '0', width: 'fit-content' }}>
                Save
            </Button>
        </ >
    );
}

export default CompleteProfile;
