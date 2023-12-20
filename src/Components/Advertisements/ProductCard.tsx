import { Box, Divider, Grid, Typography } from "@mui/material";
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import React from "react";
import Icon from '../../images/svg/image.svg';
import SecondaryButton from "../SecondaryButton";
import ThirdButton from "../ThirdButton";

import styles from '../../styles/SettingsCard.module.scss'

type TextWithIconProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    sx?: SxProps<Theme>;
};

const TextWithIcon: React.FC<TextWithIconProps> = ({ children, icon: IconComponent, sx }) => (
    <Grid item className={styles.textWithIcon} sx={{ ...sx }}>
        {IconComponent && ''}
        {children}
    </Grid>
);

const ProductCard = () => {
    const typographyTheme = useTheme();

    return (
        <Grid container className={styles.cardContainer}>
            <Grid item sm={3} textAlign={'center'}>
                <Box
                    component="img"
                    src={Icon}
                    sx={{ height: '187px' }}
                    color={'#868686'}
                    alt="Description"
                />
            </Grid>
            <Grid item sm={4}>
                <div className={styles.information}>
                    <TextWithIcon sx={{ ...typographyTheme.typography.paragraph.medium.bold }}>Men`s sports sneakers `Nike` in dark gray color</TextWithIcon>
                    <TextWithIcon sx={{ ...typographyTheme.typography.paragraph.medium.regular }}>Clothes and shoes</TextWithIcon>
                    <TextWithIcon sx={{ ...typographyTheme.typography.paragraph.medium.regular }} icon={<i className="ri-map-pin-line" />} >Kyiv, Darnytskyi</TextWithIcon>
                    <TextWithIcon sx={{ ...typographyTheme.typography.paragraph.medium.regular, marginBottom: '0' }} icon={<i className="ri-calendar-line" />}>16.11.2023-16.12.2023</TextWithIcon>
                </div>
            </Grid>
            <Grid item sm={5} className={styles.statisticsBarContainer}>
                <Typography sx={{ ...typographyTheme.typography.paragraph.base.bold }}>3000 UAH</Typography>
                <div className={styles.statisticsBar}>
                    <div>
                        <i className="ri-eye-line" />
                        <Typography style={{ ...typographyTheme.typography.paragraph.medium.regular }}>22</Typography>
                    </div>
                    <div>
                        <i className="ri-heart-line" />
                        <Typography style={{ ...typographyTheme.typography.paragraph.medium.regular }}>14</Typography>
                    </div>
                    <SecondaryButton>See statistics</SecondaryButton>
                    <ThirdButton selected><i className="ri-chat-1-line" /> 0</ThirdButton>
                </div>
            </Grid>
            <div className={styles.interact}>
                <Divider orientation="horizontal" variant="fullWidth" sx={{ marginBottom: '16px' }} />
                <div>
                    <SecondaryButton>Edit</SecondaryButton>
                    <ThirdButton style={{ ...typographyTheme.typography.paragraph.base.bold, textDecoration: 'underline 1px #000' }}>Finish</ThirdButton>
                </div>
            </div>
        </Grid>
    );
};

export default ProductCard;
