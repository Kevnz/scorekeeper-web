import React, { Component } from 'react'
import { Router } from '@reach/router'
import { Section, Title, NavBar, NavBarBrand } from '@brightleaf/elements'

import './app.scss'

const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))

export default class App extends Component {
  render() {
    return (
      <Section>
        <NavBar isLight isFixedTop>
          <NavBarBrand
            src="/favicon-32x32.png"
            href="/"
            target="navbarBasicExample"
            width="32"
            height="32"
          />
        </NavBar>
        <React.Suspense fallback={<div>Loading</div>}>
          <Router>
            <Home path="/" />
            <Home path="/scorekeeper-web" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </React.Suspense>
      </Section>
    )
  }
}
