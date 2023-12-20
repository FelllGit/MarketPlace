declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
  }
}

const breakpoints = {
  values: {
    xxs: 320,
    xs: 720,
    sm: 1025,
    md: 1440,
    lg: 2560,
    xl: 3656,
  },
};

export default breakpoints;
