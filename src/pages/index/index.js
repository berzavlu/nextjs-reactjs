import React from 'react'
import { AppConsumer } from '../../components/NoteProvider'
import { Link } from '../../../routes'
import { marvel } from '../../apis/index'

const Index = ({ data }) => {
  return (
    <div>
      <AppConsumer>
        {({ state, growAYearOlder }) => (
          <p className='title'>hi I'm {state.age} <button type='button' onClick={growAYearOlder}>Grow</button></p>
        )}
      </AppConsumer>
      <div>
        {data.map(e => <div key={e}>{e.score}</div>)}
      </div>
      <Link route='blog'>
        <a>Ir al blog</a>
      </Link>
      <Link route='about'>
        <a>Ir al about</a>
      </Link>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await marvel()
  const json = await res.json()
  return { data: json }
}

export default Index
