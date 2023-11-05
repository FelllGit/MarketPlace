import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';

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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
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

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div">
                Logo
            </Typography>

            <Search>
                <SearchWrapper>
                    <SearchIconWrapper>
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
                    sx={{ borderRadius: '0 4px 4px 0' }}>
                    Search
                </FindButton>
            </Search>

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
        </Toolbar>
    </AppBar>
);

export default Header;
