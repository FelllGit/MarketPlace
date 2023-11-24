import { Box, Typography, Paper } from '@mui/material';
import Icon from '../../icons/image.svg';

const BannerAd = () => (
  <Paper elevation={3} sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    maxwidth: 370,
    height: 263,
    paddingInline: 2,
    backgroundColor: '#C7C7C7',
  }}>
    <Box
      component="img"
      src={Icon}
      height={100}
      color={'#868686'}
      alt="Description"
    />
    <Box>
      <Typography variant="h6" component="h3">
        Title
      </Typography>
      <Typography variant="body1">
        This is a description text that goes alongside the image.
      </Typography>
    </Box>
  </Paper>
);

export default BannerAd;
