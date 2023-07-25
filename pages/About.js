import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import "../styles/About.css"
function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{backgroundImage: `url(${MultiplePizzas})`}}>
        

        </div>
        <div className='aboutBottom'></div>
        <h1>ABOUT US</h1>
        <p>Papa Louie's pizza is best in world.It has variety of combinations to fulfil your cravings.</p>
    </div>
  )
}

export default About