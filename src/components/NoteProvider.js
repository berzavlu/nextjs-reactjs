import React, { Component } from 'react'

const AppContext = React.createContext()

class AppProvider extends Component {
  state = {
    age: 100,
  }
  render () {
    const { age } = this.state
    const { children } = this.props
    return (
      <AppContext.Provider value={{ state: this.state, growAYearOlder: () => this.setState({ age: age + 1 }) }}>
        {children}
      </AppContext.Provider>
    )
  }
}

// then make a consumer which will surface it
const AppConsumer = AppContext.Consumer

export default AppProvider
export { AppConsumer }
