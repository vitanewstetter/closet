const Main = require('@architect/views/main.js')
// const staticAssetsHelper = require('./static-assets-helper')

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "4sf3k05ydnj7",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "d83bc5de244580895fef4342663e55fd73f05c1826700bcd5a26e7341d6f0d84",
});
// Customize your site by changing the data below
exports.handler = async function Index () {
  const items = await client.getEntries({content_type: 'item'});
  let body = Main ({
    types: [
      "shirt",
      "skirt",
      "dress",
      "jumpsuit",
      "pants",
      "shoes",
      "sweater",
      "outerwear",
    ],
    items: items.items,
  })
  return {
    type: 'text/html; charset=utf8',
    body
  }
}
