import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { Theme } from '@mui/material/styles';

// Extend the ButtonProps type to include the 'active' prop
interface SecondaryButtonProps extends ButtonProps {
    textColor?: string;
    hoverColor?: string;
    disableColor?: string;
    active?: boolean;
}

// Define the PrimaryButton component
const SecondaryButton: React.FC<SecondaryButtonProps> = ({ textColor, hoverColor, disableColor, active, children, ...otherProps }) => (
    <Button
        sx={(theme: Theme) => ({
            background: '0',
            boxShadow: 'none',
            padding: '20px 50px',
            color: textColor || theme.palette.primary.main,
            borderWidth: '1px',
            borderColor: textColor || theme.palette.primary.main,
            '&:hover': {
                background: '0',
                color: hoverColor || theme.palette.primary.light,
                borderColor: hoverColor || theme.palette.primary.light,
            },
            '&.Mui-disabled': {
                background: '0',
                borderColor: disableColor || theme.palette.action.disabledBackground,
                color: disableColor || theme.palette.primary.dark,
            },
        })}
        {...otherProps}
    >
        {children}
    </Button >
);

export default SecondaryButton;
