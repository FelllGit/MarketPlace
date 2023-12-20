import { TextField } from "@mui/material";
import PrimaryButton from "../../../Components/PrimaryButton";

const ChangePassword = () => (
    <>
        <TextField label="Current password" variant="outlined" />
        <TextField label="New password" variant="outlined" />
        <TextField label="Confirm new password" variant="outlined" />
        <PrimaryButton type="submit" >
            Save
        </PrimaryButton>
    </>
);

export default ChangePassword;
