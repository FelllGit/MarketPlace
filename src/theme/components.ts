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
  MuiOutlinedInput: {
    styleOverrides: {
      root: () => ({
        paddingRight: '0',
        paddingLeft: '20px'
      })
    }
  }
};

export default components;
