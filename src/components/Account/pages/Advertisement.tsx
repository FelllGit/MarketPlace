import { styled } from '@mui/material/styles';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Navigation = styled('div')({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    textAlign: 'center',
    marginBottom: '10px',
});

const StyledNavLink = styled(Link)({
    borderBottom: 'solid 1px #000',
    width: '100%',
    paddingBottom: '14px',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
        borderBottom: 'solid 2px #000',
        fontWeight: 'bold',
    },
    maxHeight: '33px',
})

const Advertisement = () => {
    const location = useLocation();

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <Navigation sx={{ marginBottom: '56px', marginTop: '50px' }}>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/active') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'active'}>Active</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/waiting') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'waiting'}>Waiting</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/unpaid') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'unpaid'}>Unpaid</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/inactive') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'inactive'}>Inactive</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/rejected') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'rejected'}>Rejected</StyledNavLink>
            </Navigation>
            <Grid container sx={{ marginBottom: '56px' }}>
                <Grid item sm={3}><FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><div style={{ display: 'flex', alignItems: 'center' }}><TuneIcon />Add filter</div></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label={<><TuneIcon />Add filter</>}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl></Grid>
                <Grid item sm={3}><TextField id="outlined-basic" label={<div style={{ display: 'flex', alignItems: 'center' }}><SearchIcon />Search by title</div>} variant="outlined" fullWidth /></Grid>
                <Grid item sm={3}><FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Any category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Any category"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl></Grid>
                <Grid item sm={3}><FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl></Grid>
            </Grid >
            <Outlet />
        </>
    );
}

export default Advertisement;
