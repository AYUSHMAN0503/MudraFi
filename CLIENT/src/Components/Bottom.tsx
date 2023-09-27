import React from 'react'
import CTA from './CTA'
import Footer from './footer/Footer'

const Bottom = () => {
    const backgroundImageUrl =
    "https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  return (
    <div 
    className="items-end w-full  rounded-t-3xl"
    style={{
      backgroundColor: "black",
      backgroundImage: `url('${backgroundImageUrl}')`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      width: "100%",
    }}>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Bottom