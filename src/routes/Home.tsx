import { Link } from 'react-router-dom'
import { content } from '../resources/content'
import '../styles/App.css'

import { animate, splitText, stagger } from 'animejs'

const Home: React.FC = () => {
  const {
    welcome: { title },
  } = content

  const { chars } = splitText('a', { words: false, chars: true })

  animate(chars, {
    x: [{ to: 15, ease: 'inBack' }],
    duration: 500,
    delay: stagger(40),
    loop: true,
    alternate: true,
    autoplay: true,
  })

  return (
    <Link className="title clean-link" to="/about">
      {title}
    </Link>
  )
}

export default Home
