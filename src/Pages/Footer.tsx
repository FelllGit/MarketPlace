import {
  Box, Container, Grid, Typography,
} from '@mui/material';
import { Theme } from '@mui/system';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../images/svg/smartmartlogo.svg";

import styles from "../styles/Footer.module.scss"

const Footer = () => (
  <Box
    component="footer"
    sx={(theme: Theme) => ({
      backgroundColor: theme.palette.primary.main,
      padding: '2rem 8.438rem',
      flexShrink: '0',
    })}
  >
    <Container maxWidth="lg" sx={(theme) => ({ marginTop: '50px', color: theme.palette.common.white, "& a": { color: theme.palette.common.white, textDecoration: 'none', ":hover": { textDecoration: 'underline' } } })}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={2} margin={0}>
          <Logo />
        </Grid>
        <Grid item xs sm>
          <div className={styles.column}>
            <Typography variant="subtitle1" gutterBottom>
              To buyers
            </Typography>
            <Link to={''}><Typography>Product search</Typography></Link>
            <Link to={''}>Payment and delivery</Link>
            <Link to={''}>Reviews</Link>
            <Link to={''}>Returns and Exchanges</Link>
            <Link to={''}>Protection program</Link>
          </div>
        </Grid>
        <Grid item xs sm justifyItems={'flex-start'}>
          <div className={styles.column}>
            <Typography variant="subtitle1" gutterBottom>
              To sellers
            </Typography>
            <Link to={''}>Help for sellers</Link>
            <Link to={''}>How to start selling on SmartMart</Link>
            <Link to={''}>Tariffs</Link>
            <Link to={''}>User agreement</Link>
            <Link to={''}>Privacy Policy</Link>
            <Link to={''}>Rules of work on the marketplace</Link>
          </div>
        </Grid>
        <Grid item xs sm>
          <div className={styles.column}>
            <Typography variant="subtitle1" gutterBottom>
              About us
            </Typography>
            <Link to={''}>About SmartMart</Link>
            <Link to={''}>Work at SmartMart</Link>
            <Link to={''}>Contact Information</Link>
            <Link to={''}>Protection of content legality</Link>
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
          <div className={styles.column}>
            <Typography variant="subtitle1" gutterBottom>
              Partners
            </Typography>
            <Link to={''}>Amazon</Link>
            <Link to={''}>Google</Link>
            <Link to={''}>Kyrylo Budanov</Link>
            <Link to={''}>Rozetka</Link>
            <Link to={''}>NASA</Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box display="flex" justifyContent="flex-end" gap={'19px'}>
            <Link to={''} color="inherit" className={styles.link}>
              <i className="ri-facebook-fill" />
            </Link>
            <Link to={''} color="inherit">
              <i className="ri-instagram-line" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
