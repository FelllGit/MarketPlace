// SettingsComponent.tsx

import React from 'react';
import { Checkbox, Grid, Box, Typography } from '@mui/material';
import PrimaryButton from '../../../Components/PrimaryButton';

type NotificationType = 'tips' | 'actions' | 'messages' | 'announcements' | 'productDiscount';

interface NotificationSettings {
    [key: string]: {
        label: string;
        description: string;
        phone: boolean;
        email: boolean;
    };
}

const defaultSettings: NotificationSettings = {
    tips: {
        label: 'Tips from SmartMart',
        description: 'Useful tips, interesting offers, recommendations and novelties',
        phone: false,
        email: false,
    },
    actions: {
        label: 'Actions.',
        description: 'Personal discounts and special offers',
        phone: true,
        email: false,
    },
    messages: {
        label: 'Messages',
        description: 'New responses to ads',
        phone: false,
        email: false,
    },
    announcements: {
        label: 'New announcements.',
        description: 'New offers in Favorite searches',
        phone: false,
        email: false,
    },
    productDiscount: {
        label: 'Product discount.',
        description: 'Price reduction in an ad saved in Favorites',
        phone: true,
        email: false,
    },
};

const SettingsComponent: React.FC = () => {
    const [settings, setSettings] = React.useState(defaultSettings);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        type: NotificationType,
        medium: 'phone' | 'email'
    ) => {
        setSettings({
            ...settings,
            [type]: { ...settings[type], [medium]: event.target.checked },
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the settings submission, e.g., update user preferences in the database
        console.log(settings);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, paddingLeft: '80px', paddingRight: '20px', paddingBottom: '60px' }}>
            <Grid container spacing={2} sx={{ marginBottom: '30px' }}>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">E-mail</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Phone</Typography>
                </Grid>
            </Grid>
            {Object.entries(settings).map(([key, value]) => (
                <Grid container spacing={2} key={key} alignItems="center" sx={{ marginBottom: '30px' }}>
                    <Grid item xs={8}>
                        <Typography variant="body1">{value.label}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {value.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            checked={value.phone}
                            onChange={(e) => handleChange(e, key as NotificationType, 'phone')}
                            name={`${key}-phone`}
                            sx={{
                                padding: 0, // Removes default padding
                                margin: '8px', // You can adjust this as needed
                                color: '#0098C6',
                                '&.Mui-checked': {
                                    color: '#0098C6'
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            checked={value.email}
                            onChange={(e) => handleChange(e, key as NotificationType, 'email')}
                            name={`${key}-email`}
                            sx={{
                                padding: 0, // Removes default padding
                                margin: '8px', // You can adjust this as needed
                                color: '#0098C6',
                                '&.Mui-checked': {
                                    color: '#0098C6'
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            ))}
            <PrimaryButton type="submit">
                Save
            </PrimaryButton>
        </Box>
    );
};

export default SettingsComponent;
