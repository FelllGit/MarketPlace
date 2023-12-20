import {
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import SecondaryButton from '../../Components/SecondaryButton';
import PrimaryButton from '../../Components/PrimaryButton';
import CategorySelect from '../../Components/CreateAdPage/CategorySelect';
import AddPhotos from '../../Components/CreateAdPage/AddPhotos';
import styles from '../../styles/CreateAdPage.module.scss';

const CreateAdPage = () => {
  const typographyTheme = useTheme();

  return (
    <div className={styles.createAdContainer}>
      <Typography className={styles.title} style={{ ...typographyTheme.typography.heading.xl6.bold }}>Create an ad</Typography>
      <Typography className={styles.subTitle} style={{ ...typographyTheme.typography.heading.xl3.medium }}>Describe in details</Typography>
      <form>
        <div className={styles.input}>
          <Typography style={{ ...typographyTheme.typography.paragraph.base.regular }}>Enter name</Typography>
          <TextField
            id='name'
            placeholder='For example, a Lenovo laptop with a warranty'
            variant='outlined'
            sx={{ width: '60%' }}
          ></TextField>
        </div>

        <div className={styles.input}>
          <Typography style={{ ...typographyTheme.typography.paragraph.base.regular }}>Category</Typography>
          <CategorySelect />
        </div>

        <div className={styles.input}>
          <Typography style={{ ...typographyTheme.typography.paragraph.base.regular }}>Price</Typography>
          <TextField
            id='name'
            placeholder='For example, a Lenovo laptop with a warranty'
            variant='outlined'
            sx={{ width: '60%' }}
          ></TextField>
        </div>

        <div className={styles.input} style={{ margin: '90px 0' }}>
          <Typography style={{ ...typographyTheme.typography.heading.xl3.medium }}>Photo</Typography>
          <Typography style={{ ...typographyTheme.typography.paragraph.base.regular }}>The first photo will be on the cover of the ad. Drag to reorder photos.</Typography>
          <AddPhotos />
        </div>

        <div className={styles.input}>
          <Typography style={{ ...typographyTheme.typography.heading.xl3.medium }}>Description</Typography>
          <TextField fullWidth multiline placeholder='Add a detailed product description...'></TextField>
          <Typography style={{ ...typographyTheme.typography.paragraph.small.regular }}>Write another 40 characters</Typography>
        </div>

        <div className={styles.input}>
          <Typography style={{ ...typographyTheme.typography.heading.xl3.medium }} marginTop={'15px'}>Location</Typography>
          <TextField placeholder='City name and index'></TextField>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '40px', }}>
          <SecondaryButton>Preview</SecondaryButton>
          <PrimaryButton>Publish</PrimaryButton>
        </div>
      </form>
    </div >
  );
};

export default CreateAdPage;
