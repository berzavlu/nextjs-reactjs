import React, { Component } from 'react'
import MainContext from './MainContext'

class Provider extends Component {
  state = {
    ContextNext: 'Hi Im React Context Now working with Next Js',
    styledcomponent: 'Im also working with my Lovely Sister Styled Components',
    name: 'Nangoli Jude Eric'
  }
  render () {
    const { children } = this.props
    return (
      <MainContext.Provider value={{ state: this.state, actions: {} }}>
        {children}
      </MainContext.Provider>
    )
  }
}

export default { Provider }
