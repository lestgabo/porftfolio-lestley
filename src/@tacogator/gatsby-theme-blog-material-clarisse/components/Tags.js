import React from 'react';
import kebabCase from 'lodash.kebabcase';
import { Box, Container } from '@material-ui/core';
import { Link as GatsbyLink } from 'gatsby';

import Link from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/Link';
import useMinimalBlogConfig from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/use-minimal-blog-config';
import SEO from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/seo';
import MinimalChip from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/minimal-chip';
import replaceSlashes from '@tacogator/gatsby-theme-blog-material-clarisse/src/utils/replaceSlashes';
import { useUtilStyles } from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/utils';

const Tags = ({ list, hero }) => {
    const { tagsPath, basePath } = useMinimalBlogConfig();

    return (
        <>
            <SEO title="Tags" />
            <Container maxWidth="md" className={useUtilStyles().topSpacer}>
                {hero ? null : <h2>Tags</h2>}
                <section>
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        {list.map((listItem) => (
                            <Box key={listItem.fieldValue} padding={2}>
                                <MinimalChip
                                    size="medium"
                                    clickable
                                    to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
                                    component={GatsbyLink}
                                    label={
                                        <Box color="text.primary" fontSize="1.3rem">
                                            {listItem.fieldValue}
                                            <Box fontSize="1rem" display="inline" color="text.secondary">
                                                &nbsp;({listItem.totalCount})
                                            </Box>
                                        </Box>
                                    }
                                />
                            </Box>
                        ))}
                    </Box>
                </section>
            </Container>
        </>
    );
};

export default Tags;
