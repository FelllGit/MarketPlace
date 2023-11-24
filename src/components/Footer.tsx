import {
  Box, Container, Grid, Typography, Link,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: 'background.paper',
      py: 6, // padding top and bottom
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={2} margin={0}>
          <Typography variant="h6">Logo</Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography variant="subtitle1" gutterBottom>
            Покупцям
          </Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolor voluptatum.
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography variant="subtitle1" gutterBottom>
            Продавцям
          </Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus.
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography variant="subtitle1" gutterBottom>
            Про нас
          </Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi molestias.
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography variant="subtitle1" gutterBottom>
            Партнери
          </Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic non sunt.
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="#" color="inherit">
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit" sx={{ ml: 2 }}>
              <InstagramIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
