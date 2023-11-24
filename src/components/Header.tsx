import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Grid, useMediaQuery } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex', // Add this line to make Search a flex container
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  alignItems: 'center',
  border: '1px solid',
  borderColor: theme.palette.divider,
}));

const SearchWrapper = styled('div')(() => ({
  color: 'inherit',
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1), // Default padding
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1rem', // Padding left to accommodate the search icon
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Padding left to accommodate the search icon
    },
  },
}));

const FindButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#000',
  boxShadow: 'none',
  borderLeft: '1px solid',
  borderColor: theme.palette.divider,
}));

const AccountButtons = styled('div')(({ theme }) => ({
  display: 'inline-flex', // Display children in a row
  alignItems: 'center', // Center children vertically
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1), // Or any desired value
  marginRight: theme.spacing(1), // Or any desired value
  width: 'fit-content', // Width equal to the width of the child elements
}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <AppBar position="static">
      <Grid container width={'100%'}>
        <Grid item xs={1}>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Grid>

        <Grid item xs={1} />

        <Grid item xs={7}>
          <Search>
            <SearchWrapper>
              <SearchIconWrapper
                sx={{
                  visibility: { xs: 'hidden', md: 'visible' },
                  marginTop: '-4px',
                }}>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchInputBase
                placeholder="Пошук…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: '100%' }}
              />
            </SearchWrapper>
            <FindButton
              variant="contained"
              sx={{
                borderRadius: '0 4px 4px 0',
              }}>
              {matches ? 'Пошук' : <SearchIcon />}
            </FindButton>
          </Search>
        </Grid>

        <Grid item xs={1} />

        <Grid item xs={2} display={'flex'} justifyContent={'end'}>
          <AccountButtons>
            <IconButton aria-label="show favorites" color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="show cart" color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton aria-label="show cart" color="inherit">
              <PersonIcon />
            </IconButton>
          </AccountButtons>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
