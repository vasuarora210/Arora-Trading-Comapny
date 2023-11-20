import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom'

const Ipreview = () => {
    const params = useParams();
    const [store,setStore] = useState([]);
    const [state,setState] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:3005/inverter/"+params.id)
        .then((res)=>{
          setStore(res.data)
        })
        axios.get("http://localhost:3006/cart/")
        .then((res)=>{
          setState(res.data)
        })
    },[state])
    
    const cartted=()=>{
      let flag = 0
      
        for(let obj of state){
          if (obj.id === store.id) {
            toast.error("already present")
            flag = 0 
            break
          }
          else{
            flag = 1
          }
        }
      if (flag == 1) {
        axios.post("http://localhost:3006/cart/",store)
        .then((res)=>{
          if(res.status === 200 || res.status === 201){
            toast.success("Added Succesfully !")
          }
          else{
            toast.error("Error Has Been Occured")
          }
        })
      }
        
      
        
    }
  return (
    <>
        <div className="container">
        <div className="row">
        <div className="col-md-3"></div>
        <Toaster/>
        <div className="col-md-6" style={{marginTop:"30px"}}>
        <div className="card">
            <img src={"../gallery/"+store.id+".png"} className="card-img-top" alt="" style={{width:"100%",height:"50vh"}}/>
            <div className="card-body">
              <h5 className="card-text">{store.b_name}&nbsp;{store.id}</h5>
              <h6>Rs.{store.price}</h6>
              <h6>Warranty:&nbsp;{store.warranty}&nbsp;Months</h6>
              <button type="submit" className='btn btn-warning' onClick={cartted}>Add To Cart</button>
            </div>
        </div>
        </div>
        <div className="col-md-3"></div>
        </div>
        </div>

    </>
  )
}

export default Ipreview