const cling = require('static-cling')
// overriding defaults
cling({ port: 3001, root: './dist', filename: 'index.html' })
