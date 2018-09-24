import App, { Container } from 'next/app'
import AppProvider from '../components/NoteProvider'
import configureProgressBar from '../libs/loadingRoutes'
import '../scss/main.scss'

class MyApp extends App {
  componentDidMount () {
    configureProgressBar()
  }
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Container>
    )
  }
}

export default MyApp
