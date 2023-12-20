import { Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import ThirdButton from "../../Components/ThirdButton";

import styles from "../../styles/Messages.module.scss"

const Messages = () => {
    const toolbar = useRef<HTMLDivElement>(null);
    const messageType = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div1Height = toolbar.current ? toolbar.current.offsetHeight : 0;
        const div2Height = messageType.current ? messageType.current.offsetHeight : 0;

        const remainingHeight = `calc(${div1Height + div2Height}px)`;
        document.documentElement.style.setProperty('--dynamic-padding', remainingHeight);
    }, []);

    return (
        <Grid className={styles.messagesContainer} container direction={'row'} gap={2}>
            <Grid className={styles.leftSideContainer} item sm={5}>
                <div className={styles.topToolbar} ref={toolbar} >
                    <Typography><i className="ri-bookmark-line" />Saved</Typography>
                    <Typography><i className="ri-delete-bin-line" />Basket</Typography>
                </div>
                <div className={styles.tradeOptions} ref={messageType} >
                    <ThirdButton selected>Sell</ThirdButton>
                    <ThirdButton>Buy</ThirdButton>
                </div>
                <div className={styles.noMessages}>
                    <Typography variant="h4" > There are no messages yet</Typography>
                    <Typography variant="subtitle1">As soon as you receive a message, it will appear here.</Typography>
                </div>
            </Grid >
            <Grid className={styles.rightSideContainer} item sm sx={{}}>
                <i className="ri-message-3-line" style={{ transform: 'scale(2.0)' }} />
                <Typography variant="h4">Select a message to read it</Typography>
            </Grid>
        </Grid >
    );
};

export default Messages;
