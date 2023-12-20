import { Button, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import styles from "../styles/UserMenu.module.scss";

export default function UserMenu() {
    const theme = useTheme();

    return (
        <div className={styles.userMenuContainer}>
            <Link to={''} className={styles.userLink}>
                <i className="ri-user-line"></i> <Typography sx={{ ...theme.typography.paragraph.large.bold }}>Andriy Chernenko</Typography>
            </Link>
            <div className={styles.linksContainer}>
                <Link className={styles.link} to={'account/advertisement/active'}><Typography sx={{ ...theme.typography.heading.xl2.regular }}>Advertisement</Typography></Link>
                <Link className={styles.link} to={'account/messages'}><Typography sx={{ ...theme.typography.heading.xl2.regular }}>Messages</Typography></Link>
                <Link className={styles.link} to={'account/settings'}><Typography sx={{ ...theme.typography.heading.xl2.regular }}>Settings</Typography></Link>
                <Link to={'/createad'} id={styles.button}>
                    <PrimaryButton>Add an ad</PrimaryButton>
                </Link>
            </div>
            <div className={styles.profileInfo}>
                <Typography sx={{ ...theme.typography.heading.xl2.bold }}>Your profile</Typography>
                <Typography sx={{ ...theme.typography.heading.xl2.regular }}>Advertisement : 0</Typography>
                <Typography sx={{ ...theme.typography.heading.xl2.regular }}>Search : 0</Typography>
            </div>
            <Button id={styles.logOutButton}><Typography sx={{ ...theme.typography.heading.xl3.bold }}>Log out</Typography></Button>
        </div >
    );
}
