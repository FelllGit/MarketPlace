import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { styled } from '@mui/material/styles';
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
                <Grid container spacing={2} direction={'column'} >
                    <Grid sx={{ margin: '0', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal', display: 'flex', alignItems: 'center', marginBottom: '25px' }} item>Men`s sports sneakers `Nike` in dark gray color</Grid>
                    <Grid sx={{ margin: '0', fontSize: '15px', fontStyle: 'normal', fontWeight: '300', lineHeight: 'normal', display: 'flex', alignItems: 'center', marginBottom: '25px' }} item>Clothes and shoes</Grid>
                    <Grid sx={{ margin: '0', fontSize: '15px', fontStyle: 'normal', fontWeight: '300', lineHeight: 'normal', display: 'flex', alignItems: 'center', marginBottom: '25px' }} item><RoomOutlinedIcon /> Kyiv, Darnytskyi</Grid>
                    <Grid sx={{ margin: '0', fontSize: '15px', fontStyle: 'normal', fontWeight: '300', lineHeight: 'normal', display: 'flex', alignItems: 'center' }} item><CalendarMonthOutlinedIcon />16.11.2023-16.12.2023</Grid>
                </Grid>
            </Grid>
            <Grid item sm={5} sx={{ margin: '0', height: 'inherit', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textAlign: 'end' }}>
                <Typography sx={{ fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal' }}>3000 UAH</Typography>
                <StatisticsBar>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <VisibilityOutlinedIcon fontSize='small' />
                        <Typography sx={{ fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>22</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FavoriteBorderOutlinedIcon fontSize='small' />
                        <Typography sx={{ fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>14</Typography>
                    </div>
                    <StyledButton>See statistics</StyledButton>
                    <CommentsButton><ChatBubbleOutlineOutlinedIcon /> 0</CommentsButton>
                </StatisticsBar>
            </Grid>
            <div style={{ width: '80%', marginLeft: 'auto', marginTop: '16px' }}>
                <Divider orientation="horizontal" variant="fullWidth" sx={{ marginBottom: '16px' }} />
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                    <StyledButton>Edit</StyledButton>
                    <Button sx={{ border: 'none', textDecorationLine: 'underline', fontSize: '18px', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal' }}>Finish</Button>
                </div>
            </div>
        </Grid >
    );
}

export default ProductCard;
