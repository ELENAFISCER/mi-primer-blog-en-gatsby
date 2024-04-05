/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Blog de Elena`,
    description: `Aranjuez`,
    siteUrl: `https://elenafis.github.io`,
    iconUrl:`../images/icon.png`,
  },
plugins: [
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
],
};
