import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontSize:"large"}}>
        <div className="container-fluid" >
            <Link className="navbar-brand" to="/"><img src="./gallery/ATC.png" alt="" height={"30px"} width={"80px"}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
                <li className="nav-item">
                <Link className="nav-link active" to="/battery">Batteries</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/inverter">Inverter</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/automotive">Automotive</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/cart" >&nbsp;<i class="bi bi-cart3"></i>&nbsp;cart</Link>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    
    </>
  )
}

export default Header