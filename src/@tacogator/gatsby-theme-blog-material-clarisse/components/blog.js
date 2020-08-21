import React from 'react';
import { Typography, Container } from '@material-ui/core';

import Listing from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/listing';
import useMinimalBlogConfig from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/use-minimal-blog-config';
import SEO from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/seo';
import { SectionDivider, useUtilStyles } from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/utils';

export default function ({ posts }) {
    return (
        <>
            <SEO title="Blog" />
            <section>
                <Container maxWidth="md" className={useUtilStyles().topSpacer}>
                    <Typography variant="h3" component="h2" gutterBottom>
                        Projects
                    </Typography>
                    <SectionDivider />
                    <Listing posts={posts} />
                </Container>
            </section>
        </>
    );
}
