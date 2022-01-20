import React, { useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

export default function HomePage() {

    document.title = "VisualDSA";
    
    useEffect(() => {

        var width = Math.max(960, innerWidth), height = 400;
        var i = 0;

        var svg = d3.select('#particles').append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

        function particle() {
            var m = d3.mouse(this);
              
            svg.insert("circle", "rect")
                .attr("cx", m[0])
                .attr("cy", m[1])
                .attr("r", 1e-6)
                .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
                .style("stroke-opacity", 1)
                .transition()
                    .duration(2000)
                    .ease(Math.sqrt)
                    .attr("r", 100)
                    .style("stroke-opacity", 1e-6)
                    .remove();
              
            d3.event.preventDefault();
        }

    }, []);

    return (
        <div className="home">

            <div className="introduction-dsa">
                <div className="row">
                    <div className="text-center">
                            <img className="classic" src={window.location.origin + '/VisualDSA.png'} />
                            <h2 style={{color: 'white', marginBottom: '15px'}}>Data Structure and Algorithms</h2>
                            <p>A data structure is a named location that can be used to store and organize data. <br /> And, an algorithm is a collection of steps to solve a particular problem. <br /> Learning data structures and algorithms allow us to write efficient and optimized computer programs.</p>
                    </div>
                </div>
            </div>

            <div id="particles"></div>

            <div className="container" style={{marginTop: "50px", marginBottom: "50px"}}>
            
                <div className="card mt-4 datastructure">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={window.location.origin + '/images/Data Structure.gif'} className="img-fluid" style={{minHeight:"325px"}} />
                        </div>
                        <div className="col-md-8 p-5">
                            <h2 className="card-title mt-3" style={{color:"black"}}>Data Structures</h2>
                            <img className="classic" src={window.location.origin + '/icon.png'} style={{display: "block", width: "225px", height: "5px"}} />
                            <p>In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among
                                them, and the functions or operations that can be applied to the data.</p>
                            <Link to="/dataStructures" className="btn btn-primary" style={{borderColor: "#0A192F", backgroundColor: "#0A192F", color: "#f1f1f1"}}>
                                Visualize
                            </Link>
                        </div>
                    </div>
                </div>
            
                <div className="card mt-4 algorithm">
                    <div className="row">
                        <div className="col-md-8 p-5">
                            <h2 className="card-title mt-3" style={{color:"black"}}>Algorithms</h2>
                            <img className="classic" src={window.location.origin + '/icon.png'} style={{display: "block", width: "160px", height: "5px"}} />
                            <p>In computer science, a sorting algorithm is an algorithm that puts elements of a list in a certain order. The most frequently used orders are numerical order and lexicographical order. Efficient sorting is important for optimizing
                                the efficiency of other algorithms that require input data to be in sorted lists.</p>
                            <Link to="/" className="btn btn-primary" style={{borderColor: "#0A192F", backgroundColor: "#0A192F", color: "#f1f1f1"}}>
                                Visualize
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <img src={window.location.origin + '/images/Algorithm.gif'} className="img-fluid" style={{minHeight:"325px"}} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
