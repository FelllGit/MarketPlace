import { Button, styled } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const StyledBUtton = styled(Button)({
    height: '85px',
    justifyContent: 'space-between',
    padding: '30px 40px',
    borderColor: '#C7C7C7',
});

const Settings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <StyledBUtton fullWidth>Change contact details <KeyboardArrowDownOutlinedIcon /></StyledBUtton>
        <StyledBUtton fullWidth>Change password <KeyboardArrowDownOutlinedIcon /></StyledBUtton>
        <StyledBUtton fullWidth>Change email <KeyboardArrowDownOutlinedIcon /></StyledBUtton>
        <StyledBUtton fullWidth>Notifications <KeyboardArrowDownOutlinedIcon /></StyledBUtton>
        <StyledBUtton fullWidth>Delete account <KeyboardArrowDownOutlinedIcon /></StyledBUtton>
    </div>
);

export default Settings;
