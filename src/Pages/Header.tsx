import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { Grid, Menu } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import UserMenu from '../Components/UserMenu';

import { ReactComponent as Logo } from "../images/svg/smartmartlogo.svg";

import styles from "../styles/Header.module.scss"
import SecondaryButton from '../Components/SecondaryButton';

const Header = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Open menu function
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu function
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, width: '100vw', padding: '2rem 8.438rem', marginTop: '0', color: theme.palette.whiteText }}>
      <Grid container maxWidth="lg" alignSelf={'center'} display={'flex'} alignItems={'center'}>
        <Grid item xs={2}>
          <Link to={'/'}>
            <Logo height={'45px'} />
          </Link>
        </Grid>

        <Grid item xs={10} display={'flex'} justifyContent={'end'} gap={2}>
          <SecondaryButton textColor='#FFFFFF' hoverColor='#8CC0DE' style={{ ...theme.typography.paragraph.base.bold, borderWidth: '3px', padding: '15px 40px', textTransform: 'none' }}>Add an ad</SecondaryButton>
          <Box className={styles.accountButtons} sx={{ borderRadius: theme.shape.borderRadius }}>
            <IconButton aria-label="show favorites" color="inherit">
              <i className="ri-heart-fill" />
            </IconButton>
            <IconButton aria-label="show cart" color="inherit">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <i className="ri-user-line" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <UserMenu />
              </Menu>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </AppBar >
  );
};

export default Header;
