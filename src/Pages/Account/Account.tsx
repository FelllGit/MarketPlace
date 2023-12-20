import { styled } from '@mui/material/styles';
import { useLocation, Outlet, Link } from 'react-router-dom';

const Container = styled('ul')({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    textAlign: 'center',
});

const StyledNavLink = styled(Link)({
    borderBottom: 'solid 1px #000',
    width: '100%',
    paddingBottom: '14px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    '&:hover': {
        borderBottom: 'solid 2px #000',
        fontWeight: '700',
    },
})

const Account = () => {
    const location = useLocation();
    return (
        <>
            <Container>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'advertisement/active'}>Advertisement</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/messages') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'messages'}>Messages</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/settings') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'settings'}>Settings</StyledNavLink>
            </Container>
            <Outlet />
        </>

    );
};

export default Account;
