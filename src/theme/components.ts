import { Components } from '@mui/material';
import { Theme } from '@mui/material/styles';

const components: Components<Theme> = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        color: '#000',
        marginTop: '30px',
        marginBottom: '98px',
        boxShadow: 'none',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: () => ({
        display: 'flex',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '3px',
        border: '1px solid #C7C7C7',
        color: '#000000',
      }),
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: () => ({
        padding: '0px',
      }),
      item: () => ({
        margin: 'auto',
        padding: '4px',
      }),
    },
  },
};

export default components;
