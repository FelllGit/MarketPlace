import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Messages from './pages/Messages';

const Ul = styled('ul')({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    textAlign: 'center',
});

const Li = styled('li')({
    borderBottom: 'solid 1px #000',
    width: '100%',
    paddingBottom: '14px',
    '&:hover': {
        borderBottom: 'solid 3px #000',
        fontWeight: 'bold',

    },
});

const StyledNavLink = styled(Link)({
    textDecoration: 'none',
    color: 'black',
})

const Account = () => (
    <div>
        <Ul>
            <Li><StyledNavLink to={''}>Advertisement</StyledNavLink></Li>
            <Li><StyledNavLink to={'messages'}>Messages</StyledNavLink></Li>
            <Li><StyledNavLink to={'payment-and-account'}>Payment and account</StyledNavLink></Li>
            <Li><StyledNavLink to={'settings'}>Settings</StyledNavLink></Li>
        </Ul>
        <Outlet />
        <Messages />
    </div>

);

export default Account;
