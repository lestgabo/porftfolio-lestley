import React from 'react';
import { Link } from '@material-ui/core';
import useSiteMetadata from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/use-site-metadata';
import { Twitter, Instagram, GitHub, LinkedIn } from '@material-ui/icons';

/**
 * Social media or general external links.  Define `externalLinks` in gatsby-config.
 * @param iconSize small|default|large
 */
export default function SocialLinks({ iconSize }) {
    const { externalLinks } = useSiteMetadata();
    const Icon_maps = {
        twitter: <Twitter color="inherit" fontSize={iconSize} />,
        instagram: <Instagram color="inherit" fontSize={iconSize} />,
        github: <GitHub color="inherit" fontSize={iconSize} />,
        linkedin: <LinkedIn color="inherit" fontSize={iconSize} />,
    };
    return (
        <>
            {Array.isArray(externalLinks) &&
                externalLinks
                    .filter(({ type }) => type !== 'cta')
                    .map(({ name, url }) => (
                        <Link
                            key={name}
                            color="inherit"
                            href={url}
                            variant="inherit"
                            style={{ paddingRight: '12px' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Icon_maps[name] || name}
                        </Link>
                    ))}
        </>
    );
}
