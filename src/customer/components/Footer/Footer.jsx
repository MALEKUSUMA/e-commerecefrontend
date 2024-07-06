import { Grid, Typography, Link } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <div>
            <Grid
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
                className="text-center mt-10"
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">About</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Blog</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Press</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Jobs</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Partners</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Marketing</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Analytics</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Commerce</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Insights</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Support</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Guides</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">API Status</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Claim</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Privacy</Button></div>
                    <div><Button sx={{ color: "white" }} className="pb-5" variant="text">Terms</Button></div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center" sx={{ color: "white" }}>
                        &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center" sx={{ color: "white" }}>
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center" sx={{ color: "white" }}>
                        Icons made by{' '}
                        <Link href="http://www.freepik.com" color="inherit" underline="always">Freepik</Link>{' '} from{' '}
                        <Link href="http://www.flaticon.com/" color="inherit" underline="always">www.flaticon.com</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
