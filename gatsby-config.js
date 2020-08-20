module.exports = {
    siteMetadata: {
        // Used for the title template on pages other than the index site
        siteTitle: `Lestley Gabo Portfolio`,
        // Default title of the page
        siteTitleAlt: `Lestley Gabo Portfolio`,
        // Will be used to generate absolute URLs for og:image, sitemap, etc.
        siteUrl: `http://www.lestley.com/`,
        // Used for SEO
        siteDescription: `Lestley Gabo Portfolio`,
        // Will be set on the <html /> tag
        siteLanguage: `en`,
        // Used for og:image and must be placed inside the `static` folder
        siteImage: `/banner.png`,
        // Twitter Handle
        author: `Lestley`,
        // Navigation links
        navigation: [
            {
                title: `Home`,
                slug: `/`,
            },
            {
                title: `About`,
                slug: `/about`,
            },
            {
                title: `Contact`,
                slug: `/contact`,
            },
        ],
        externalLinks: [
            {
                name: `twitter`,
                url: `https://twitter.com/nacho_codes`,
            },
            {
                name: `github`,
                url: `https://github.com/tacogator/gatsby-themes`,
            },
            {
                name: 'Newsletter',
                url: `https://duckduckgo.com`,
                type: 'cta',
            },
        ],
    },
    plugins: [
        {
            resolve: `@tacogator/gatsby-theme-blog-material-clarisse`,
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Clarrise - Example Gatsby blog`,
                short_name: `Clarrise - Example Gatsby blog`,
                description: `Launch a blog today with Clarrise template.  Gatsby starter theme`,
                start_url: `/`,
                background_color: `#fafafa`,
                theme_color: `#00897B`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
    ],
};
