import { Button, Grid, Typography } from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MessageIcon from '@mui/icons-material/Message';
import { useEffect, useRef, useState } from "react";

const Messages = () => {
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const [bottomPadding, setBottomPadding] = useState('0px');

    useEffect(() => {
        const div1Height = div1Ref.current ? div1Ref.current.offsetHeight : 0;
        const div2Height = div2Ref.current ? div2Ref.current.offsetHeight : 0;

        const remainingHeight = `calc(${div1Height + div2Height}px)`;
        setBottomPadding(remainingHeight);
    }, []);

    return (
        <Grid container gap={2} sx={{ height: '100vh' }}>
            <Grid item sm={5} sx={{
                display: 'flex',
                flexDirection: 'column',
                border: 'solid 1px #868686',
                height: '100vh'
            }}>
                <div ref={div1Ref} style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'flex-end',
                    padding: '36px 30px',
                    borderBottom: 'solid 1px #868686'
                }}>
                    <Typography sx={{ display: 'flex', justifyItems: 'center' }}><BookmarkBorderOutlinedIcon />Saved</Typography>
                    <Typography sx={{ display: 'flex', justifyItems: 'center' }}><DeleteOutlineOutlinedIcon />Basket</Typography>
                </div>
                <div ref={div2Ref} style={{
                    display: 'flex',
                    gap: '30px',
                    padding: '20px 16px'
                }}>
                    <Button sx={{ padding: '10px 50px', borderColor: '#000000', fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal' }}>Sell</Button>
                    <Button sx={{ border: '0', fontSize: '20px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>Buy</Button>
                </div>
                <div style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    paddingBottom: bottomPadding,
                    gap: '20px',
                }}>
                    < Typography variant="h4" > There are no messages yet</Typography>
                    <Typography variant="subtitle1">As soon as you receive a message, it will appear here.</Typography>
                </div>
            </Grid >
            <Grid item sm sx={{ border: 'solid 1px #868686', height: '100vh' }}>
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '20px',
                }}>
                    <MessageIcon sx={{ transform: 'scale(2.0)' }} />
                    <Typography variant="h4">Select a message to read it</Typography>
                </div>
            </Grid>

        </Grid >
    );
};

export default Messages;
