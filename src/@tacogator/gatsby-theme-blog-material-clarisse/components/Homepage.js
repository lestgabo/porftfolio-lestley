import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

import SEO from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/seo';
import Listing from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/listing';
import Link from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/Link';
import { SectionDivider, useUtilStyles } from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/utils';
import Hero from '@tacogator/gatsby-theme-blog-material-clarisse/src/shadow/hero';

export default function Homepage({ posts }) {
    return (
        <>
            <SEO />
            <Container maxWidth="lg" className={useUtilStyles().topSpacer}>
                <section>
                    <Hero posts={posts} />
                </section>
                <section className={useUtilStyles().topSpacer}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h3" component="h2" gutterBottom>
                            Projects
                        </Typography>
                        <Link to="blog">View all</Link>
                    </Box>
                    <SectionDivider />
                    <Listing posts={posts} />
                </section>
            </Container>
        </>
    );
}
