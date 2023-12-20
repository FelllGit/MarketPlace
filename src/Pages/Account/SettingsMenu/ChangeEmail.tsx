import { TextField } from "@mui/material";
import PrimaryButton from "../../../Components/PrimaryButton";

const ChangeEmail = () => (
    <>
        <TextField label="New E-mail" variant="outlined" />
        <PrimaryButton type="submit">
            Save
        </PrimaryButton>
    </>
);

export default ChangeEmail;
