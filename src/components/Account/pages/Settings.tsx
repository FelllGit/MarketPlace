import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, styled } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ContactDetails from './SettingsMenu/ContactDetails';
import ChangePassword from './SettingsMenu/ChangePassword';
import ChangeEmail from './SettingsMenu/ChangeEmail';
import Notifications from './SettingsMenu/Notifications';

const StyledButton = styled('div')({
    height: '85px',
    display: 'flex',
    width: '100%',
    maxHeight: 'fit-content',
    justifyContent: 'space-between',
    padding: '30px 40px',
    borderColor: '#C7C7C7',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
});

type CustomAccordionProps = {
    name: React.ReactNode;
    component: React.ReactNode;
};

const CustomAccordion: React.FC<CustomAccordionProps> = ({ name, component }) => (
    <Accordion sx={{ border: '1px solid #C7C7C7', borderRadius: '3px', boxShadow: 'none' }}>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <StyledButton>
                {name} <KeyboardArrowDownOutlinedIcon />
            </StyledButton>
        </AccordionSummary>
        <AccordionDetails>
            {component}
        </AccordionDetails>
    </Accordion>
);


const Settings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '60px' }}>
        <CustomAccordion name="Change contact details" component={<ContactDetails />} />
        <CustomAccordion name="Change password" component={<ChangePassword />} />
        <CustomAccordion name="Change E-mail" component={<ChangeEmail />} />
        <CustomAccordion name="Notifications" component={<Notifications />} />
        <CustomAccordion name="Props" component={<ContactDetails />} />
        <Button sx={{ padding: '20px 50px', background: '#F00', width: 'fit-content', color: '#FFF', fontSize: '18px', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal' }}>Delete account</Button>
    </div>
);

export default Settings;
