module.exports = {
    siteMetadata: {
        title: "Test Site",
        description: "This is a website",
        author: "me",
    },
    plugins: [
        { resolve: `gatsby-plugin-emotion` },
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        // "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};
