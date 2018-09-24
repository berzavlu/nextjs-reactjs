import App, { Container } from 'next/app'
import AppProvider from '../components/NoteProvider'
import '../scss/main.scss'

class MyApp extends App {
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
