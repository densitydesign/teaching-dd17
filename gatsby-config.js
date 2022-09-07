module.exports = {
  siteMetadata: {
    title: "Final Synthesis Design Studio 2021/2022",
    titleTemplate: "%s - DD17",
    description:
      "Official website of the DensityDesign Final Synthesis Design Studio, 2021/2022",
    siteUrl: "https://densitydesign.github.io/teaching-dd17/",
    url: "https://densitydesign.github.io/teaching-dd17/",
    image: "static/og-image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@densitydesign",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-remove-trailing-slashes`,
    "react-icons",
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
  pathPrefix: "/teaching-dd17"
  };

