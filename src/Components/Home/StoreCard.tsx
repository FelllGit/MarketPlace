import { Theme, useTheme } from '@mui/material/styles';
import {
    Box, Grid, IconButton, Typography,
} from '@mui/material';

import Icon from '../../images/svg/image.svg';
import PrimaryButton from '../PrimaryButton';
import styles from '../../styles/StoreCard.module.scss';

const CardComponent = () => {
    const typographyTheme = useTheme();

    return (
        <Box className={styles.cardContainer}>
            <Box className={styles.contentWrapper}>
                <Grid container direction={'column'}>
                    <Grid item width={'inherit'}>
                        <Box
                            component="img"
                            src={Icon}
                            sx={{ height: '187px' }}
                            color={'#868686'}
                            alt="Description"
                        />
                    </Grid>
                    <Typography sx={{ ...typographyTheme.typography.paragraph.medium.regular, textAlign: 'start' }}>Men`s sports sneakers `Nike` in dark gray color</Typography>
                </Grid>
            </Box>
            <div className={styles.info}>
                <Typography textAlign={'start'} sx={{ ...typographyTheme.typography.paragraph.medium.bold }}>
                    26999 UAH
                </Typography>
                <Grid container alignItems={'center'}>
                    <Grid item xs={10}>
                        <PrimaryButton fullWidth>More details</PrimaryButton>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton sx={(theme: Theme) => ({ scale: '1.3', color: theme.palette.primary.main })}>
                            <i className="ri-heart-line" />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};

export default CardComponent;
