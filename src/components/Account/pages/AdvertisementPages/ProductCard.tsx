import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { SxProps, Theme, styled } from '@mui/material/styles';
import { SvgIconComponent } from "@mui/icons-material";
import React from "react";
import Icon from '../../../../icons/image.svg';

const StatisticsBar = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '20px',

});

const StyledButton = styled(Button)({
    padding: '20px 40px',
    border: '1px solid #0098C6',
    color: '#0098C6',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
});

const CommentsButton = styled(Button)({
    display: 'flex',
    width: '74px',
    height: '45px',
    padding: '10.16px 19px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
});

type TextWithIconProps = {
    children: React.ReactNode;
    icon?: SvgIconComponent;
    sx?: SxProps<Theme>;
};

const TextWithIcon: React.FC<TextWithIconProps> = ({ children, icon: IconComponent, sx }) => (
    <Grid item sx={{ display: 'flex', alignItems: 'center', marginBottom: '25px', marginLeft: 0, fontSize: '15px', fontWeight: '300', ...sx }}>
        {IconComponent && <IconComponent />}
        {children}
    </Grid>
);

function ProductCard() {
    return (
        <Grid container direction={'row'} sx={{ border: 'solid 1px black', padding: '42px 27px' }}>
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
                <Grid container spacing={2} direction={'column'}>
                    <TextWithIcon sx={{ fontSize: '16px', fontWeight: '700' }}>Men`s sports sneakers `Nike` in dark gray color</TextWithIcon>
                    <TextWithIcon >Clothes and shoes</TextWithIcon>
                    <TextWithIcon icon={RoomOutlinedIcon} >Kyiv, Darnytskyi</TextWithIcon>
                    <TextWithIcon icon={CalendarMonthOutlinedIcon} sx={{ marginBottom: '0' }}>16.11.2023-16.12.2023</TextWithIcon>
                </Grid>
            </Grid>
            <Grid item sm={5} sx={{ height: 'inherit', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textAlign: 'end', margin: 0, }}>
                <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>3000 UAH</Typography>
                <StatisticsBar>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <VisibilityOutlinedIcon fontSize='small' />
                        <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>22</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FavoriteBorderOutlinedIcon fontSize='small' />
                        <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>14</Typography>
                    </div>
                    <StyledButton>See statistics</StyledButton>
                    <CommentsButton><ChatBubbleOutlineOutlinedIcon /> 0</CommentsButton>
                </StatisticsBar>
            </Grid>
            <div style={{ width: '80%', marginLeft: 'auto', marginTop: '16px' }}>
                <Divider orientation="horizontal" variant="fullWidth" sx={{ marginBottom: '16px' }} />
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                    <StyledButton>Edit</StyledButton>
                    <Button sx={{ border: 'none', textDecorationLine: 'underline', fontSize: '18px', fontWeight: '700', lineHeight: 'normal' }}>Finish</Button>
                </div>
            </div>
        </Grid>
    );
}

export default ProductCard;
