import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { Theme } from '@mui/material/styles';

// Extend the ButtonProps type to include the 'active' prop
interface DeleteButtonProps extends ButtonProps {
    active?: boolean;
}

// Define the PrimaryButton component
const DeleteButton: React.FC<DeleteButtonProps> = ({ active, children, ...otherProps }) => (
    <Button
        sx={(theme: Theme) => ({
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            width: 'fit-content',
            padding: '20px 50px',
            ...(active && {
                boxShadow: 'none',
                backgroundColor: theme.palette.error.main,
            }),
            '&:hover': {
                backgroundColor: theme.palette.error.light,
            },
            '&.Mui-disabled': {
                backgroundColor: theme.palette.action.disabledBackground,
                color: theme.palette.error.dark,
            },
        })}
        {...otherProps}
    >
        {children}
    </Button>
);

export default DeleteButton;
