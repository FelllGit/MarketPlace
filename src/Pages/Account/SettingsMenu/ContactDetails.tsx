import { TextField } from "@mui/material";
import PrimaryButton from "../../../Components/PrimaryButton";

const ContactDetails = () => (
    <>
        <TextField label="Choose a city" variant="outlined" />
        <TextField label="Contact person" variant="outlined" />
        <TextField label="Phone number" variant="outlined" />
        <PrimaryButton type="submit">
            Save
        </PrimaryButton>
    </>
);

export default ContactDetails;
