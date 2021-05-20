import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

// TODO
// {
//     property: `og:title`,
//     content: title,
// },
// {
//     name: `robots`,
//     content: metaRobots,
// },
// {
//     property: `og:description`,
//     content: metaDescription,
// },
// {
//     name: `twitter:card`,
//     content: `summary`,
// },
// {
//     name: `twitter:creator`,
//     content: site.siteMetadata.author,
// },
// {
//     name: `twitter:title`,
//     content: title,
// },
// {
//     name: `twitter:description`,
//     content: metaDescription,
// },

type MetadataProps = {
    title: string;
    description: string;
    lang?: string;
    isNoIndex?: boolean;
    isHomepage?: boolean;
    bodyClass?: string;
};

/**
 * Add data to the <head>. See the docs for more options.
 *
 * https://github.com/nfl/react-helmet
 */
const Metadata = ({
    title,
    description,
    isHomepage = false,
    lang = "en",
    isNoIndex = false,
    bodyClass = "default",
}: MetadataProps) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    // The site name should come first in the HTML `<title>` only on the
    // homepage.
    const titleTemplate =
        isHomepage === true
            ? `${site.siteMetadata.title} | %s`
            : `%s | ${site.siteMetadata.title}`;

    // Adds robots noindex meta tag to a page if <SEO isNoIndex={true} />
    const metaRobots = isNoIndex === true ? "noindex" : null;

    return (
        <Helmet defaultTitle={title} titleTemplate={titleTemplate}>
            <html lang={lang} />
            <body className={bodyClass} />
            <meta name="description" content={description} />

            {metaRobots ? <meta name="robots" content={metaRobots} /> : null}
        </Helmet>
    );
};

export default Metadata;
