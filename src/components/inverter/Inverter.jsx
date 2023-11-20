import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Inverter = () => {
  const [state,setState] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3005/inverter")
    .then((res)=>{
      setState(res.data)
    })
  },[])
  return (
    <>
      <div className="container" style={{width:'100%',height:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        {state.map((item,index)=>
          <Link to={`/Ipreview/${item.id}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/"+item.id+".png"} b_name={item.b_name} title={item.id} key={index}/></Link>
        )}
      </div>
    </>
  )
}

export default Inverter