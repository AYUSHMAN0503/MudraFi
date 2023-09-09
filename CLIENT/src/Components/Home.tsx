import React from 'react'
import Hero from './Hero'
import CTA from './CTA'
import Card from './Cards'
import BG from ".././assets/dark-geometric-background-with-copy-space.jpg"
const Home = () => {
  return (
    <div style={{backgroundImage:`url(${BG})`, backgroundSize:"cover",
    backgroundPosition:"top"}}>
<Hero/>
<Card/>
<CTA/>
</div>
  )
}

export default Home