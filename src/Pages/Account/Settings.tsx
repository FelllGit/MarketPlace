import ContactDetails from './SettingsMenu/ContactDetails';
import ChangePassword from './SettingsMenu/ChangePassword';
import ChangeEmail from './SettingsMenu/ChangeEmail';
import Notifications from './SettingsMenu/Notifications';
import DeleteButton from '../../Components/DeleteButton';
import CustomAccordion from '../../Components/CustomAccordion';

const Settings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '60px' }}>
        <CustomAccordion name="Change contact details" component={<ContactDetails />} />
        <CustomAccordion name="Change password" component={<ChangePassword />} />
        <CustomAccordion name="Change E-mail" component={<ChangeEmail />} />
        <CustomAccordion name="Notifications" component={<Notifications />} />
        <CustomAccordion name="Props" component={<ContactDetails />} />
        <DeleteButton >Delete account</DeleteButton>
    </div>
);

export default Settings;
