import React from 'react'
import ReactDOM from 'react-dom'
import 'mini.css'
import App from './core/app'

ReactDOM.render(<App />, document.getElementById('root'))
console.log('pro', process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}
