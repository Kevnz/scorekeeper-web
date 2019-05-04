const path = require('path')
var ghpages = require('gh-pages')
ghpages.publish(path.resolve('./dist'), function(err) {
  console.log('yo', err)
})
