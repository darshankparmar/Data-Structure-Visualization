import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
                <div className="wrapper"> </div>
                <div className="container-fluid all-show"> <Link className="navbar-brand" to='/'>VisualDSA <i className="fas fa-code-branch"></i></Link> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to='/'>About us</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to='/'>Products</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to='/'>Services</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to='/'>Events</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to='/'>contact</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to='/'><i className="fa fa-search"></i></Link> </li>
                            <li className="nav-item"> <a className="nav-link" href='https://github.com/darshankparmar' rel="noreferrer" target="_blank"><i className="fab fa-3x fa-github"></i></a> </li>
                        </ul> 
                        <div className="d-flex flex-column sim">                             
                            <div className="media d-flex align-items-center">
                                <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                                <div className="media-body">
                                    <h5 className="m-0">darshankparmar</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
