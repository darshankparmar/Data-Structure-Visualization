import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
                <div className="wrapper"> </div>
                <div className="container-fluid all-show"> <a className="navbar-brand" >VisualDSA <i className="fa fa-codepen"></i></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <a className="nav-link active" aria-current="page" >About us</a> </li>
                            <li className="nav-item"> <a className="nav-link" >Products</a> </li>
                            <li className="nav-item"> <a className="nav-link" >Services</a> </li>
                            <li className="nav-item"> <a className="nav-link" >Events</a> </li>
                            <li className="nav-item"> <a className="nav-link" >contact</a> </li>
                            <li className="nav-item"> <a className="nav-link" ><i className="fa fa-search"></i></a> </li>
                        </ul>
                        <div className="d-flex flex-column sim">                             
                            <div class="media d-flex align-items-center"><img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm" />
                                <div class="media-body">
                                    <h5 class="m-0">darshankparmar</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
