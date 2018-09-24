import React from 'react'
import { AppConsumer } from '../../components/NoteProvider'
import { Link } from '../../../routes'

const Index = () => {
  return (
    <div>
      <AppConsumer>
        {({ state, growAYearOlder }) => (
          <p className='title'>hi I'm {state.age} <button type='button' onClick={growAYearOlder}>Grow</button></p>
        )}
      </AppConsumer>
      <Link route='blog'>
        <a>Ir al blog</a>
      </Link>
      <Link route='about'>
        <a>Ir al about</a>
      </Link>
    </div>
  )
}

export default Index
