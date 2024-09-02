import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-red navbar-dark sticky-top">
                <div className="wrapper"> </div>
                <div className="container-fluid all-show"> <Link className="navbar-brand" to='/'>VisualDSA <i className="fas fa-code-branch"></i></Link> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            {   }
                            {/* <li className="nav-item"> <Link className="nav-link" to='/'><i className="fa fa-search"></i></Link> </li> */}
                            <li className="nav-item"> <a className="nav-link" href='https://github.com/darshankparmar' rel="noreferrer" target="_blank"><i className="fab fa-3x fa-github"></i></a> </li>
                        </ul> 
                        <div className="d-flex flex-column sim">                             
                            <div className="media d-flex align-items-center">
                                <div className="mr-3 rounded-circle img-thumbnail shadow-sm">
                                    <i className="fab fa-3x fa-user"></i>
                                </div>
                                <div className="media-body">
                                    <h5 className="m-0">dkp</h5>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
