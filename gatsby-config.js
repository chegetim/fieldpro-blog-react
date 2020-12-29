module.exports = {
  siteMetadata: {
    title: `FieldPro`,
    description: `Field Force Automation and FIeld Sales Case Studies, News, and Tips`,
    author: `Optimetriks Digital Marketing Team`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `odk6x8y34ibq`,
        accessToken: `jsnjmCgJpbwzZ7a_6z2meCGNHMA8WmCkMplEb8W0LSQ`,
      },
    },
    `@contentful/rich-text-react-renderer`,
    `@contentful/rich-text-types`,
  ],
}
