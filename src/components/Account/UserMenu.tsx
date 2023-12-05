import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserMenu() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '5px 20px' }}>
            <Link to={''} style={{ display: 'flex', alignItems: 'center', height: '50px', marginBottom: '30px' }}><AccountCircle /> Andriy Chernenko</Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '80px' }}>
                <Link to={'account/advertisement/active'}>Advertisement</Link>
                <Link to={'account/messages'}>Messages</Link>
                <Link to={'account/settings'}>Settings</Link>
                <Link to={'createad'}>Add an ad</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '60px' }}>
                <Typography>Your profile</Typography>
                <Typography>Advertisement : 0</Typography>
                <Typography>Search : 0</Typography>
            </div>
            <Button>Log out</Button>
        </div >
    );
}
