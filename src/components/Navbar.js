import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    return(
        <div>
 <nav className="navbar navbar-expand-lg navbar-warning bg-dark">
		<div className="container-fluid">
		  <a className="navbar-brand text-warning" href="#">ApiaryBee</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div className="navbar-nav ms-auto">
				<li className="nav-link" aria-current="page">
				<Link to="/" className="text-warning">Home</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/about" className="text-warning" >About Us</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/apiary" className="text-warning" >Apiary</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/services" className="text-warning">Services</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/contact" className="text-warning">Contact</Link>
				</li>
		    </div>
		  </div>
		</div>
		</nav>
            </div>
        );
}


export default NavBar;