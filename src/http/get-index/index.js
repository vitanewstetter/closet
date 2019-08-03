const Main = require('@architect/views/main.js')
// const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
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
  })
  return {
    type: 'text/html; charset=utf8',
    body
  }
}
