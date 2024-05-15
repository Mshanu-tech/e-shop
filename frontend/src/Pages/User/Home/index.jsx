import React from 'react'
import './style.css'
import Navbar from '../../../components/navbar/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <div className="main-container">
      <div className="container">
        <div className="row">
          <div className='home-leftside'>
<h1>50% OFFER</h1>
          </div>
          <div className="home-rightside">
            <img src="/Image/bn-removebg-preview.png" alt="" />

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home