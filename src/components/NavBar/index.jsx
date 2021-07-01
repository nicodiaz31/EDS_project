import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarComponent = () => {

    return(
        <>
			<nav className="navbar navbar-expand-lg p-md-3">
				<div className="container-fluid">
					<Link className="navbar-brand" to={`/`}><img src="/images/EDSLogo.png" alt="" /></Link>
					<button 
							className="navbar-toggler" 
							type="button" 
							data-toggle="collapse" 
							data-target=".navbar-collapse" 
							aria-controls="navbarSupportedContent" 
							aria-expanded="false" 
							aria-label="Toggle navigation"
						>
						<i><FontAwesomeIcon icon={faBars} color="white"/></i>
					</button>
					<div className="collapse navbar-collapse" id="myNavbar">
						<div className="mx-auto"></div>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to={`/services`}>Services</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/projects`}>Projects</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/news`}>News</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/aboutUs`}>About Us</Link>
							</li>
						</ul>

					</div>
				</div>
			</nav>
        </>
    )
}

export default NavBarComponent;