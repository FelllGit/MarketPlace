declare module '@mui/material/styles' {
    interface Palette {
        black?: string;
        gray?: string;
        whiteText?: string;
    }
    interface PaletteOptions {
        black?: string;
        gray?: string;
        whiteText?: string;
    }
}

const palette = {
    primary: {
        main: '#0098C6',
        light: '#8CC0DE',
        dark: '#007294',
        contrastText: '#ffffff',
    },
    error: {
        main: '#F00',
        light: '#FF9494',
        dark: '#C70000',
    },
    black: '#000',
    gray: '#C7C7C7',
    hover: '#c7c7c7',
    whiteText: '#FFFFFF',
};

export default palette;
