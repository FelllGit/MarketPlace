import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Icon from '../../icons/image.svg';

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '300px',
  height: '440px',
  padding: '1rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
});

const ContentWrapper = styled('div')({
  width: '100%',
  padding: '0.5rem',
  textAlign: 'center',
});

const LikeButton = styled(FavoriteBorderIcon)({
  cursor: 'pointer',
});

const CardComponent = () => (
    <Card>
        <ContentWrapper>
            <Box
                component="img"
                src={Icon}
                sx={{ height: 100 }}
                color={'#868686'}
                alt="Description"
            />
            <Typography variant='h4'>Lorem ipsum</Typography>
            <Grid container spacing={1}>
                <Grid item xs={10} textAlign={'left'}>
                    <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ratione doloribus quo! Eius, nostrum? Quis modi eligendi dicta perferendis quia quo omnis deleniti optio adipisci. Libero reiciendis provident laboriosam. Harum?</Typography>
                </Grid>
                <Grid item xs={2}>
                    <LikeButton />
                </Grid>
            </Grid>
        </ContentWrapper>
        <Typography variant='h5'>Price 5.99$</Typography>
    </Card>
);

export default CardComponent;
