import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import Tags from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/Tags';
import TagsQuery from '../components/tags-query';

const useStyles = makeStyles((theme) => ({
    root: {},
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homepageImage: {
        borderRadius: '2px',
        maxHeight: '600px',
        maxWidth: '100%',
    },
    noPadding: {
        padding: '0px',
    },
}));

export default () => {
    const classes = useStyles();
    const tags = TagsQuery();

    return (
        <>
            <Grid container direction="row" alignContent="center" alignItems="center" justify="space-evenly" spacing={0}>
                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.flexCenter}>
                    <img src={'../../lestley.jpg'} alt="lestley" className={classes.homepageImage} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.flexCenter}>
                    <Grid container direction="column" alignContent="center" alignItems="center" justify="space-evenly" spacing={0}>
                        <Grid item>
                            <Typography variant="h3">Software Developer</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">(Looking For Work)</Typography>
                        </Grid>
                        <Grid item>
                            <Tags list={tags} hero={true} className={classes.noPadding} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
