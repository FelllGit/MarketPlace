import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { Theme } from '@mui/material/styles';

// Extend the ButtonProps type to include the 'active' prop
interface SecondaryButtonProps extends ButtonProps {
    active?: boolean;
}

// Define the PrimaryButton component
const SecondaryButton: React.FC<SecondaryButtonProps> = ({ active, children, ...otherProps }) => (
    <Button
        sx={(theme: Theme) => ({
            background: '0',
            boxShadow: 'none',
            padding: '20px 50px',
            color: theme.palette.primary.main,
            borderWidth: '1px',
            borderColor: theme.palette.primary.main,
            '&:hover': {
                background: '0',
                color: theme.palette.primary.light,
                borderColor: theme.palette.primary.light,
            },
            '&.Mui-disabled': {
                background: '0',
                borderColor: theme.palette.action.disabledBackground,
                color: theme.palette.primary.dark,
            },
        })}
        {...otherProps}
    >
        {children}
    </Button >
);

export default SecondaryButton;
