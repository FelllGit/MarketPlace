import { Avatar, TextField, Typography } from "@mui/material";
import PrimaryButton from "../../Components/PrimaryButton";

function CompleteProfile() {
    return (
        <>
            <Typography sx={{ marginBottom: '40px' }}>Complete your profile</Typography>
            <Avatar sx={{ width: '300px', height: '300px', background: 'none', color: '#868686', border: 'solid 1px #868686' }}>< i className="ri-camera-line" style={{ transform: 'scale(3.0)' }} /></Avatar>
            <div>
                <TextField label="Name" variant="outlined" margin="normal" fullWidth />
                <TextField label="Surname" variant="outlined" margin="normal" fullWidth />
                <TextField label="Phone number" variant="outlined" margin="normal" fullWidth />
            </div>
            <PrimaryButton>
                Save
            </PrimaryButton>
        </ >
    );
}

export default CompleteProfile;
