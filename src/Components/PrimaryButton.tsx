import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { Theme, useTheme } from '@mui/material/styles';

// Extend the ButtonProps type to include the 'active' prop
interface PrimaryButtonProps extends ButtonProps {
    active?: boolean;
}

// Define the PrimaryButton component
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ active, children, ...otherProps }) => {
    const typographyTheme = useTheme();
    return (
        <Button
            sx={(theme: Theme) => ({
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                width: 'fit-content',
                padding: '20px 40px',
                ...typographyTheme.typography.paragraph.base.bold,
                ...(active && {
                    boxShadow: 'none',
                    backgroundColor: theme.palette.primary.main,
                }),
                '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                },
                '&.Mui-disabled': {
                    backgroundColor: theme.palette.action.disabledBackground,
                    color: theme.palette.primary.dark,
                },
            })}
            {...otherProps}
        >
            {children}
        </Button>
    );
}

export default PrimaryButton;
