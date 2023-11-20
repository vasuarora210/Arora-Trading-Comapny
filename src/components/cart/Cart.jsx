import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Cart = () => {
  const [state,setState] = useState([]);
  useEffect(()=>{
    aa();
  },[]) 
  const aa=()=>{
    axios.get("http://localhost:3006/cart/")
    .then((res)=>{
      setState(res.data)
    })
  }
  let price = 0 
  let item = -1
  for(let i in state){
    item = item + 1
  }
  {state.map((item,index)=>
    price=parseInt(price)+(item.price),
  )}
  let gst = 18/100*price;
  

  const deleteid=(id)=>{
      Swal.fire({
          title: 'Are you sure you want to delete?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              axios.delete("http://localhost:3006/cart/"+id)
              .then((res)=>{
                  Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
              })
              aa();
            
          }
        })
  }


  const order = ()=>{
      state.map((item,index)=>
        {if (index===0) {
          
        }else{
          axios.delete("http://localhost:3006/cart/"+item.id)
          .then((res)=>{
            aa();
          }) 
          
        }
      })
      toast.success("Order Succesfully !")
    

      
  }
  
  
  return (
    <>
    <div className="comtainer-fluid" style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
      {state.slice(1).map((item,index)=>
        
          <div className="container" style={{display:"flex",alignItems:'center'}} key={index}>
            <div className="col-md-4"></div>
            <Toaster/>
            <div className="col-md-4">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4" style={{alignItems:"center"}}>
                    <img src={"./gallery/"+item.id+".png"}  class="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{item.b_name}&nbsp;{item.id}</h5>
                      <p class="card-text">Warranty:&nbsp;{item.warranty}Months</p>
                      <p class="card-text" style={{display:"flex",justifyContent:"space-between"}}>Rs.&nbsp;{item.price}<span><button type="submit" className='btn btn-danger' onClick={()=>deleteid(item.id)}>Remove</button></span></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4"></div>
          

          </div>
          
        
        
      )}
    

    
  </div>
      <div className="container" style={{margin:"50px 30px"}}>
        <h5>Item:{item}</h5>
        <h5>Price:{price}</h5>
        <h5>Gst(18%):{gst}</h5>
        <h5>Total Price:{price+gst}</h5>
      </div>
      <div className="conatiner">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" align="center"><button type="submit" className='btn btn-primary' onClick={order}>Palce Order</button></div>
        <div className="col-md-4"></div>
      </div>
      </div>
    </>
  )
}

export default Cart