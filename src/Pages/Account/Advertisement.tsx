import { styled } from '@mui/material/styles';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import styles from '../../styles/Advertisement.module.scss'

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
        <Box>
            <div className={styles.navigation}>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/active') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'active'}>Active</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/waiting') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'waiting'}>Waiting</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/unpaid') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'unpaid'}>Unpaid</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/inactive') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'inactive'}>Inactive</StyledNavLink>
                <StyledNavLink sx={location.pathname.startsWith('/account/advertisement/rejected') ? { fontWeight: '700', borderBottom: 'solid 2px #000', } : {}} to={'rejected'}>Rejected</StyledNavLink>
            </div>
            <Grid container className={styles.filters}>
                <Grid item sm={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"><div style={{ display: 'flex', alignItems: 'center' }}><i className="ri-filter-3-line" /> Add filter</div></InputLabel>
                        <Select
                            value={age}
                            label={<><i className="ri-filter-3-line" />Add filter</>}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={3}><TextField id="outlined-basic" label={<div style={{ display: 'flex', alignItems: 'center' }}><i className="ri-search-line" /> Search by title</div>} variant="outlined" fullWidth /></Grid>
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
        </Box>
    );
}

export default Advertisement;
