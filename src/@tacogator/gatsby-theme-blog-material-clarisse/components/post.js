import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Typography, Container, useTheme } from '@material-ui/core';
import Img from 'gatsby-image';

import ItemTags from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/item-tags';
import SEO from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/seo';
import { useUtilStyles } from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/utils';

export default function Post({ data: { post } }) {
    const theme = useTheme();
    return (
        <>
            <SEO
                title={post.title}
                description={post.description ? post.description : post.excerpt}
                image={post.banner ? post.banner.childImageSharp.fluid.src : undefined}
                pathname={post.slug}
            />
            <article>
                <Container maxWidth="lg" className={useUtilStyles().topSpacer}>
                    <Typography variant="h1">{post.title}</Typography>
                    <Box color="text.secondary" fontSize="0.85rem" marginTop={4} marginBottom={4} display="flex" alignItems="center">
                        <time>{post.date}</time>
                        {post.timeToRead && (
                            <span>
                                {` — `}
                                {post.timeToRead} MIN READ
                            </span>
                        )}
                        {post.tags && (
                            <React.Fragment>
                                {` — `} <b>TAGS</b>&nbsp;&nbsp;
                                <ItemTags size="medium" tags={post.tags} />
                            </React.Fragment>
                        )}
                    </Box>
                    {post.banner && <Img fluid={post.banner.childImageSharp.fluid} alt={post.title} />}
                </Container>

                <Container
                    maxWidth="md"
                    style={{
                        paddingTop: `${theme.spacing(8)}px`,
                    }}
                >
                    <section>
                        <MDXRenderer>{post.body}</MDXRenderer>
                    </section>
                </Container>
            </article>
        </>
    );
}
