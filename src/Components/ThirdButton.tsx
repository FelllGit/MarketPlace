import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { Theme } from '@mui/material/styles';

interface ThirdButtonProps extends ButtonProps {
    active?: boolean;
    selected?: boolean
}

const ThirdButton: React.FC<ThirdButtonProps> = ({ active, selected = false, children, ...otherProps }) => (
    <Button
        sx={(theme: Theme) => ({

            ...(selected ? {
                color: theme.palette.black,
                borderWidth: '1px',
                borderColor: theme.palette.black,
                minWidth: 'fit-content',
                '&:hover': {
                    background: '0',
                    color: theme.palette.black,
                    borderColor: theme.palette.black,
                },
                '&.Mui-disabled': {
                    background: '0',
                    borderColor: theme.palette.action.disabledBackground,
                    color: theme.palette.primary.dark,
                },
            } : {
                background: '0',
                boxShadow: 'none',
                border: '0',
                transitionDuration: '0s',
                minWidth: 'fit-content',
                '&:hover': {
                    background: '0',
                    color: theme.palette.gray,
                    border: 'solid 1px',
                    borderColor: theme.palette.gray,
                },
            }),

        })}
        {...otherProps}
    >
        {children}
    </Button >
);

export default ThirdButton;
