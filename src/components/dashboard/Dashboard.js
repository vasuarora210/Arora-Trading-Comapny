import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../card/Card';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
    <section>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./gallery/homepage/homepage3.jpg" className="d-block w-100" alt="..." style={{width:"100%",height:"60vh"}}/>
          </div>
          <div className="carousel-item">
            <img src="./gallery/homepage/homepage1.jpg" className="d-block w-100" alt="..." style={{width:"100%",height:"60vh"}}/>
          </div>
          <div className="carousel-item">
            <img src="./gallery/homepage/homepage2.jpg" className="d-block w-100" alt="..." style={{width:"100%",height:"60vh"}}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section>
      <div className="container" style={{marginTop:"5vh"}}>
      <div className="row">
        <div className="col-md-2"><span className="fs-1">Battery</span></div>
        <div className="col-md-10"></div>
      </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
        <Link to={`/Preview/${"LIV1851"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/LIV1851.png"} b_name={"LIVFAST"} title={"LIV1851"}/></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <Link to={`/Preview/${"AR200"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/AR200.png"} b_name={"LIVFAST"} title={"AMARON"}/></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <Link to={`/Preview/${"IMTT2300"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/IMTT2300.png"} b_name={"EXIDE"} title={"IMTT2300"}/></Link>
        </div>
      </div>
      </div>
      <div className="container" style={{marginTop:"5vh"}}>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <input type="submit" value="More >" className='btn btn-primary btn-lg' onClick={()=>{navigate("/battery")}}/>
        </div>
      </div>
      </div>
    </section>
    <section>
      <div className="container" style={{marginTop:"5vh"}}>
      <div className="row">
        <div className="col-md-2"><span className="fs-1">Inverter</span></div>
        <div className="col-md-10"></div>
      </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
        <Link to={`/Ipreview/${"AM950"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/AM950.png"} b_name={"AMARON"} title={"AM950"}/></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <Link to={`/Ipreview/${"EX800"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/EX800.png"} b_name={"EXIDE"} title={"EX800"}/></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <Link to={`/Ipreview/${"LIV1250"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/LIV1250.png"} b_name={"LIVFAST"} title={"LIV1250"}/></Link>
        </div>
      </div>
      </div>
      <div className="container" style={{marginTop:"5vh"}}>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <input type="submit" value="More >" className='btn btn-primary btn-lg' onClick={()=>{navigate("/inverter")}}/>
        </div>
      </div>
      </div>
    </section>
    <section>
      <div className="container" style={{marginTop:"5vh"}}>
      <div className="row">
        <div className="col-md-2"><span className="fs-1">Automative</span></div>
        <div className="col-md-10"></div>
      </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
        <Link to={`/Apreview/${"LIV9"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/LIV9.png"} b_name={"LIVGUARD"} title={"LIV9"}/></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <Link to={`/Apreview/${"AM32"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/AM32.png"} b_name={"AMARON"} title={"AM32"}/></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <Link to={`/Apreview/${"LIVF90"}`} style={{textDecoration:"none"}}><Card my_img={"./gallery/LIVF90.png"} b_name={"LIVFAST"} title={"LIVF90"}/></Link>
        </div>
      </div>
      </div>
      <div className="container" style={{marginTop:"5vh"}}>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <input type="submit" value="More >" className='btn btn-primary btn-lg' onClick={()=>{navigate("/automotive")}}/>
        </div>
      </div>
      </div>
    </section>
    </>

  )
}

export default Dashboard