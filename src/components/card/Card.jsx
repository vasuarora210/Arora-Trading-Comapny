import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="jsx">
        <div className="card" style={{height:"300px",width:"300px",margin:"3vh"}}>
          <img src={props.my_img} className="card-img-top" alt="" style={{width:"100%",height:"30vh"}}/>
          <div className="card-body">
            <h5 className="card-text">{props.b_name}&nbsp;{props.title}</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card