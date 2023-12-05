import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CheckMail() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <EmailOutlinedIcon />
                <Typography>Check mail</Typography>
            </div>
            <Typography>It remains to confirm your profile on the marketplace. To do this, follow the link we sent you to the email C***@i***.</Typography>
            <Link to={''}>Enter the verification code</Link>
        </ >
    );
}

export default CheckMail;
