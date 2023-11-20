import React from 'react'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate=useNavigate();
  return (
    <>
      <span className="contact" onClick={()=>{navigate("/contact")}}>
        <i class="bi bi-whatsapp"></i>
      </span>
      <div className="container-fluid" style={{backgroundColor:"#121215",padding:"20vh 0",marginTop:"5vh",color:"white",display:"flex",justifyContent:"center"}}>
      
      <span>2000-2023&nbsp;<i class="bi bi-c-circle"></i>&nbsp;Arora Trading Company</span>
      </div>
    </>
  )
}

export default Footer