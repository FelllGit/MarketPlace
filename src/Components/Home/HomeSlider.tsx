import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box, Theme } from "@mui/system";

import ThirdButton from "../ThirdButton";

import cat1 from "../../images/rastre/cat1.jpg";
import cat2 from "../../images/rastre/cat2.jpg";
import cat3 from "../../images/rastre/cat3.jpg";

const slides = [
    {
        label: 'First slide label',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        imgPath: cat1,
    },
    {
        label: 'Second slide label',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgPath: cat2,
    },
    {
        label: 'Third slide label',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        imgPath: cat3,
    },
];

const HomeSlider = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = slides.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + maxSteps - 1) % maxSteps);
    };

    return (
        <Box sx={{
            width: '100%',
            height: '320px',
            marginBottom: '38px',
            flexGrow: 1,
            position: 'relative',
            backgroundImage: `url(${slides[activeStep].imgPath})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
            <Grid container
                sx={{
                    width: '100%',
                    height: 'inherit',
                    overflow: 'hidden',
                }}
                alignItems={'center'}
            >
                <Grid item xs={1}>
                    <ThirdButton size="small" onClick={handleBack} disabled={activeStep === 0} sx={(theme: Theme) => ({
                        border: 'none',
                        '&:hover': {
                            color: theme.palette.black,
                            background: '0',
                            border: 'none',
                        }
                    })}>
                        <i className="ri-arrow-left-s-line" />
                    </ThirdButton>
                </Grid>
                <Grid item xs>
                    <Paper square elevation={0} sx={{ p: 2 }}>
                        <Typography>{slides[activeStep].description}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>

                    <ThirdButton size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={(theme: Theme) => ({
                        border: 'none',
                        '&:hover': {
                            color: theme.palette.black,
                            background: '0',
                            border: 'none',
                        },
                    })}>
                        <i className="ri-arrow-right-s-line" />
                    </ThirdButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeSlider;