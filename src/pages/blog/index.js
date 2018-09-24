import React, { Component } from 'react'
import { Link } from '../../../routes'

class Blog extends Component {
  static getInitialProps (ctx) {
    return {
      repoTitle: ctx.query.repoTitle,
      stars: ctx.query.stars,
    }
  }
  render () {
    const { repoTitle, stars } = this.props
    if (repoTitle) {
      return (
        <div>
          <h1>{repoTitle} has {stars} stars!</h1>
          <Link route='/'>
            <a>Ir al inicio</a>
          </Link>
          <Link route='about'>
            <a>Ir al about</a>
          </Link>
        </div>
      )
    }
    return (
      <div>
        <h1>Unknown repo parameter to given!</h1>
        <Link route='/'>
          <a>Ir al inicio</a>
        </Link>
        <Link route='about'>
          <a>Ir al about</a>
        </Link>
      </div>
    )
  }
}

export default Blog
