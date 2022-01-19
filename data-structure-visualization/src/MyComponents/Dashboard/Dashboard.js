import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    document.title = "VisualDSA";

    return (
        <> 
            <div className="dashboard">
                <div className="pt-table desktop-768">
                    <div className="pt-tablecell page-home relative">
                                    
                        <div className="overlay"></div>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="hexagon-menu clear">
                                        <div className="hexagon-item">
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <Link className="hex-content" to='/array'>
                                                <span className="hex-content-inner">
                                                    <span className="icon">
                                                        <i className="fa fa-universal-access"></i>
                                                    </span>
                                                    <span className="title">Array</span>
                                                </span>
                                                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                            </Link>
                                        </div>
                                        <div className="hexagon-item">
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <Link className="hex-content" to='/stack'>
                                                <span className="hex-content-inner">
                                                    <span className="icon">
                                                        <i className="fa fa-bullseye"></i>
                                                    </span>
                                                    <span className="title">Stack</span>
                                                </span>
                                                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                            </Link>
                                        </div>
                                        <div className="hexagon-item">
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <Link className="hex-content" to='/queue'>
                                                <span className="hex-content-inner">
                                                    <span className="icon">
                                                        <i className="fa fa-braille"></i>
                                                    </span>
                                                    <span className="title">Queue</span>
                                                </span>
                                                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                            </Link>    
                                        </div>
                                        <div className="hexagon-item">
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <Link className="hex-content" to='/linked-list'>
                                                <span className="hex-content-inner">
                                                    <span className="icon">
                                                        <i className="fa fa-id-badge"></i>
                                                    </span>
                                                    <span className="title">Linked List</span>
                                                </span>
                                                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                            </Link>
                                        </div>
                                        <div className="hexagon-item">
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <Link className="hex-content" to='/tree'>
                                                <span className="hex-content-inner">
                                                    <span className="icon">
                                                        <i className="fa fa-life-ring"></i>
                                                    </span>
                                                    <span className="title">Tree</span>
                                                </span>
                                                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                            </Link>
                                        </div>
                                        <div className="hexagon-item">
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <Link className="hex-content" to='/graph'>
                                                <span className="hex-content-inner">
                                                    <span className="icon">
                                                        <i className="fa fa-clipboard"></i>
                                                    </span>
                                                    <span className="title">Graph</span>
                                                </span>
                                                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                            </Link>
                                        </div>
                                        <div className="hexagon-item">
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="hex-item">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <Link className="hex-content" to='/advanced-dsa'>
                                                <span className="hex-content-inner">
                                                    <span className="icon">
                                                        <i className="fa fa-map-signs"></i>
                                                    </span>
                                                    <span className="title">Advanced Data Structure</span>
                                                </span>
                                                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
