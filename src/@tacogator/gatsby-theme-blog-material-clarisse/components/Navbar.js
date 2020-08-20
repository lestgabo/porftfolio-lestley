import React, { useState } from 'react';
import { IconButton, Hidden, Box, Container, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import BearAppBar from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/bear/BearAppBar';
import { SideMenu, DesktopMenu } from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/Menus';
import SocialLinks from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/social-links';
import CtaOne from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/cta-one';
import Branding from '@tacogator/gatsby-theme-blog-material-clarisse/src/shadow/branding';

export default function ({ location }) {
    const [open, setMenuState] = useState(false);

    // optional var to handle non-home page rendering
    // const isHome = location.pathname === "/" || false
    const classes = useStyles();

    return (
        <>
            <Hidden mdDown>
                <Container maxWidth="xl" className={classes.navbar}>
                    <div>
                        <Hidden only={['xs', 'sm', 'md']}>
                            <Box color="text.secondary" display="flex: 1 0 calc(25% - 10px)">
                                <SocialLinks iconSize="small" />
                            </Box>
                        </Hidden>
                    </div>
                    <div className={classes.center}>
                        <Branding />
                    </div>
                    <div>
                        <CtaOne />
                    </div>
                </Container>
            </Hidden>
            <BearAppBar
                position="sticky"
                mobileBranding={<Branding mobile={true} />}
                desktopCenter={<DesktopMenu />}
                mobileMenu={
                    <IconButton edge="start" color="secondary" onClick={() => setMenuState(true)}>
                        <Menu />
                    </IconButton>
                }
            />
            <SideMenu open={open} onClose={() => setMenuState(false)} />
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    navbar: {
        padding: theme.spacing(3, 2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > div': {
            flex: '1 0 0',
        },
        '& > :last-child': {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}));
