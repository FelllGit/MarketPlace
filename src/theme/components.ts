import { Components } from '@mui/material';
import { Theme } from '@mui/material/styles';

const components: Components<Theme> = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        color: '#000',
        marginTop: '30px',
        boxShadow: 'none',
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',
        gap: '8rem',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: () => ({ // Make sure to pass the theme as a parameter
      }),
    },
  },
};

export default components;
