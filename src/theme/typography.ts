import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        paragraph: {
            small: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            medium: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            base: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            large: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
        },
        heading: {
            xl2: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl3: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl4: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl5: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl6: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
        }
    }

    interface TypographyVariantsOptions {
        paragraph: {
            small: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            medium: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            base: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            large: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
        },
        heading: {
            xl2: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl3: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl4: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl5: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
            xl6: {
                regular: React.CSSProperties;
                medium: React.CSSProperties;
                bold: React.CSSProperties;
            },
        }
    }
}

const typography = {
    paragraph: {
        small: {
            regular: {
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
        medium: {
            regular: {
                fontSize: '1.0rem',
                lineHeight: '1.375rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '1.0rem',
                lineHeight: '1.375rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '1.0rem',
                lineHeight: '1.375rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
        base: {
            regular: {
                fontSize: '1.125rem',
                lineHeight: '1.625rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '1.125rem',
                lineHeight: '1.625rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '1.125rem',
                lineHeight: '1.625rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
        large: {
            regular: {
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
    },
    heading: {
        xl2: {
            regular: {
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
        xl3: {
            regular: {
                fontSize: '1.5rem',
                lineHeight: '2.0rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '1.5rem',
                lineHeight: '2.0rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '1.5rem',
                lineHeight: '2.0rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
        xl4: {
            regular: {
                fontSize: '1.75rem',
                lineHeight: '2.375rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '1.75rem',
                lineHeight: '2.375rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '1.75rem',
                lineHeight: '2.375rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
        xl5: {
            regular: {
                fontSize: '2.0rem',
                lineHeight: '2.75rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '2.0rem',
                lineHeight: '2.75rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '2.0rem',
                lineHeight: '2.75rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
        xl6: {
            regular: {
                fontSize: '2.25rem',
                lineHeight: '3.125rem',
                fontStyle: 'normal',
                fontWeight: '400',
            },
            medium: {
                fontSize: '2.25rem',
                lineHeight: '3.125rem',
                fontStyle: 'normal',
                fontWeight: '500',
            },
            bold: {
                fontSize: '2.25rem',
                lineHeight: '3.125rem',
                fontStyle: 'normal',
                fontWeight: '700',
            },
        },
    }
};

export default typography;
