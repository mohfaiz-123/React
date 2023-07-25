import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from "../assets/pizza.jpeg"
import "../styles/Home.css"
function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
    <div className="headerContainer" >
      <h1>Papa Louie's Pizzeria</h1>
      <p> Pizza to fit any taste</p>
      <Link to="/menu">
      <button>order now</button>
      </Link>
      
    </div>
     </div>
  )
}

export default Home