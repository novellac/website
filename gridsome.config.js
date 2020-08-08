// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "N Den",
  siteDescription: "N Portfolio and Ideas Site",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/ideas/**/*.md",
        typeName: "IdeaPost",
        route: "/ideas/:title",
      },
    },
  ],
};
