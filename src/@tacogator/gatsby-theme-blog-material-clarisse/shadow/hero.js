import React from 'react';
import { Grid, makeStyles, Box } from '@material-ui/core';

import Tags from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/Tags';

const useStyles = makeStyles((theme) => ({
    root: {},
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    homepageImage: {
        borderRadius: '5px',
    },
}));

export default ({ posts }) => {
    const classes = useStyles();
    // const { tags } = posts;
    // console.log('tags ->', tags);
    // console.log('posts ->', posts);
    // console.log('posts ->', posts.allPost);
    return (
        <>
            {/* <Grid direction="row" alignContent="center" alignItems="center" justify="center" spacing={0}>
                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.flexCenter}>
                    <img src={'../../lestley.jpg'} alt="lestley" className={classes.homepageImage} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.flexCenter}>
                    Tags
                    <Box paddingTop={2}><Tags list={posts.group} /></Box>
                </Grid>
            </Grid> */}
        </>
    );
};

// export default ({ posts }) => {
//     if (!(Array.isArray(posts) && posts.length > 0)) {
//         return null;
//     }
//     const firstPost = posts[0];
//     const { title, banner, slug } = firstPost;
//     const theme = useTheme();
//     const bannerFluid = banner ? banner.childImageSharp.fluid : null;

//     return (
//         <div
//             style={{
//                 height: '600px',
//                 background: banner ? `url(${banner.childImageSharp.fluid.src})` : 'none',
//                 backgroundSize: 'cover',
//                 borderRadius: '10px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 flexWrap: 'wrap',
//                 justifyContent: 'flex-end',
//                 cursor: 'pointer',
//             }}
//             onClick={() => {
//                 navigate(slug);
//             }}
//         >
//             <div
//                 style={{
//                     width: '100%',
//                     backgroundColor: 'rgba(250, 250, 250, 0.90)',
//                     borderRadius: '0 0 10px 10px',
//                     padding: theme.spacing(1, 2),
//                     display: 'flex',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Typography variant="h6" component="h3" color="textSecondary" display="inline">
//                     <Link to={slug}>{title}</Link>
//                 </Typography>

//                 <IconButton color="secondary" component={Link} to={slug}>
//                     <ArrowRightAlt />
//                 </IconButton>
//             </div>
//         </div>
//     );
// };
