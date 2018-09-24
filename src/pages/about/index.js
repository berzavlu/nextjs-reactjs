import { Link } from '../../../routes'

const About = () => {
  return (
    <div>
      about
      <Link route='blog'>
        <a>Ir al blog</a>
      </Link>
      <Link route='/'>
        <a>Ir al inicio</a>
      </Link>
    </div>
  )
}

export default About
