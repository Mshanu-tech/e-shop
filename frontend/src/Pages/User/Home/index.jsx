import React from 'react'
import './style.css'
import Navbar from '../../../components/navbar/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="container">
          <div className="row">
            <div style={{display:"flex", justifyContent:"center",width:"100%",margin:"20px"}}>
              <div className='dressCategory'>
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%" ,background:"white"}} src="/Image/t-shirt.png" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>T-Shirt</p>
                </div>
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%" ,background:"white"}} src="/Image/shirt.png" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>Shirt</p>
                </div>                
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%" ,background:"white"}} src="/Image/pant.png" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>Pant</p>
                </div>                
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%" ,background:"white"}} src="/Image/watch.png" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>Watch</p>
                </div>
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%" ,background:"white"}} src="/Image/shoe.png" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>Shoe</p>
                </div>
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%" }} src="/Image/shorts.webp" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>shorts</p>
                </div>
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%"}} src="/Image/chappal.webp" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>chappal</p>
                </div>
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%" ,background:"white"}} src="/Image/wallet.png" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>wallet</p>
                </div>
                <div style={{cursor:"pointer"}}>
                  <img style={{ width: "50px", height:"50px", borderRadius: "50%"}} src="/Image/innerwear.webp" alt="" />
                  <p style={{fontWeight: "bold" ,fontSize: "13px", textAlign: "center"}}>Innerwear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home