import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


const Contact = () => {

  const [state,setState]=useState({
      id:'',
      f_name:'',
      l_name:'',
      email_id:'',
      mob_num:'',
      message:'',

  })

  const handler=(event)=>{
    // alert("hii")
    const {name,value} = event.target;
    setState({...state,[name]:value});
    
  }


  const savecontactdetails=(event)=>{
    event.preventDefault()
    axios.post("http://localhost:3004/contact",state)
    .then((res)=>{
      if(res.status === 200 || res.status === 201){
        toast.success("Message sent Successfully")
      }
      else{
        toast.error("Error Has Been Occured")
      }
    })
  }
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <Toaster/>
        <div className="col-md-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.303689304191!2d78.1240799354295!3d29.39067084217364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bef6ee5055cb5%3A0x6cd3f13e787ae51a!2sArora%20Trading%20Company!5e0!3m2!1sen!2sin!4v1700492432290!5m2!1sen!2sin" style={{height:"300px",width:"100%"}}></iframe>
        </div>
        <div className="col-md-2"></div>
      </div>
      </div>
      <div className="container" style={{margin:"100px 0px"}}>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6" >
        <form action="" method='POST' onSubmit={savecontactdetails}>
          <div className="row g-3" style={{marginTop:"20px"}}>
            <div className="col">
              <input type="text" className="form-control" name='f_name' placeholder="First name" onChange={handler} aria-label="First name"/>
            </div>
            <div className="col">
              <input type="text" className="form-control" name='l_name' placeholder="Last name" onChange={handler} aria-label="Last name"/>
            </div>
          </div>
          <div className="row g-3" style={{marginTop:"20px"}}>
            <div className="col">
              <input type="text" className="form-control" name='email_id' placeholder="email id" onChange={handler} aria-label="First name"/>
            </div>
            <div className="col">
              <input type="text" className="form-control" name='mob_num' placeholder="Mobile" onChange={handler} aria-label="Last name"/>
            </div>
          </div>
          <div className="row g-3" style={{marginTop:"20px"}}>
            <div className="col">
              <input type="text" className="form-control" name='message' placeholder="Message" onChange={handler} aria-label="First name"/>
            </div>
          </div>
          <div className="row" style={{marginTop:"20px"}}>
          <div className="col-md-5"></div>
          <div className="col-md-4"><input type="submit"  className="btn btn-primary"/></div>
          </div>
        </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact