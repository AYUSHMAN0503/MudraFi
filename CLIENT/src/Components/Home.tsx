import React from 'react'
import Hero from './Hero'
import CTA from './CTA'
import Cards from './Cards'
import BG from ".././assets/dark-geometric-background-with-copy-space.jpg"
const Home = () => {
  return (
    <div style={{backgroundImage:`url(${BG})`, backgroundSize:"cover",
    backgroundPosition:"top"}}>
<Hero/>
<Cards/>
<CTA/>
</div>
  )
}

export default Home