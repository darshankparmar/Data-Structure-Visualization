import React, { useEffect, useRef } from 'react';
// import './ArrayTmp.css';
import * as d3 from 'd3';

export default function ArrayTmp() {

    const showMenu = () => {
        for (let i = 0; i <= 3; i++) {
            document
              .getElementsByClassName("nav-items")
              [i].classList.toggle("show-menu");
        }
    }

    const canvas = useRef(null);
    const arrayDetailsCanvas = useRef(null);

    useEffect(() => {
        showCanvas();
        showArrayDetailsCanvas();
    })

    const showArrayDetailsCanvas = () => {
        const width = 1190;
        const height = 480;

        var svg = d3.select(arrayDetailsCanvas.current)
            .append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", width)
            .attr("height", height)
            .attr("preserveAspectRatio", "xMinYMin")
            .style("background-color", "rgb(36, 36, 43)")

        // Arrow Head
        svg.append("defs")
            .append("marker")
            .attr("id", "arrow")
            .attr("markerWidth", "10")
            .attr("markerHeight", "10")
            .attr("refX", "0")
            .attr("refY", "3")
            .attr("orient", "auto")
            .attr("markerUnits", "strokeWidth")
            .append("path")
            .attr("d", "M0,0 L0,6 L9,3 z")
            .attr("fill", "#f00");

        var g = svg.append("g")
            .attr("transform", `translate(150 , 200)`);
        
        g.append("rect")
            .attr("width", 50)
            .attr("height", 50)
            .attr("rx", 15)
            .style("stroke", "red")
            .style("fill", "white");
        
        g.append("text")
            .attr("class", "array-index")
            .attr("dx", 20)
            .attr("dy", -5)
            .style("stroke", "red")
            .text(0);
                
        g.append("text")
            .attr("class", "array-value")
            .attr("dx", 20)
            .attr("dy", 30)
            .text(5);

        g.append("text")
            .attr("class", "array-memory-location")
            .attr("dx", 10)
            .attr("dy", 65)
            .style("stroke", "white")
            .text(200);
        
        g.append("line")
            .attr("x1", -30)
            .attr("x2", 0)
            .attr("y1", -10)
            .attr("y2", -10)
            .style("stroke", "white")
            .attr("marker-end", "url(#arrow)" );
    }

    const showCanvas = () => {
        const width = 1800;
        const height = 1000;

        d3.select(canvas.current)
            .append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", width)
            .attr("height", height)
            .attr("preserveAspectRatio", "xMinYMin")
            .style("background-color", "rgb(36, 36, 43)")

        var g = d3.select("svg")
            .append("g")
            .attr("transform", `translate(150 , 200)`);
        
        g.append("rect")
            .attr("width", 50)
            .attr("height", 50)
            .attr("rx", 15)
            .style("stroke", "red")
            .style("fill", "white");
    }

    const clearSvg = () => {
        d3.select("svg").remove();
        showCanvas();
        i = 0;
    }

    var i = 0;
    var insertValue;

    const createRect = () => {
        if(insertValue == null || insertValue === "") {
            alert("Please Enter valid Value")
            return;
        }
        
        const width = 50;
        const height = 50;
        const x = 60;
        const y = 60;
        i++;
    
        var g = d3.select("svg")
            .append("g")
            .attr("transform", `translate(${i*x} , ${y})`);

        g.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("rx", 15)
            .style("stroke", "red")
            .style("fill", "white");
                
        g.append("text")
            .attr("dx", 20)
            .attr("dy", 30)
            .text(insertValue);

        g.append("line")
            .attr("x1", width)
            .attr("x2", width+10)
            .attr("y1", height/2)
            .attr("y2", height/2)
            .style("stroke", "white");

    }

    return (
        <div className="array">
            

            {/* <svg width="600px" height="100px">
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
                </marker>
            </defs>

            <line x1="50" y1="50" x2="250" y2="50" stroke="#000" stroke-width="5" marker-end="url(#arrow)" />
            </svg> */}


            <div className="operation1">
                <input className="operation-value" type="number" id="insertValue" name="insertValue" placeholder="insert value" value={insertValue} onChange={(e) => insertValue = e.target.value} />
                <div className="item menu" onClick={showMenu}>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
        
                <div className="nav-items items1" onClick={clearSvg}>
                    <i className="fas fa-redo"></i>
                </div>
                <div className="nav-items items2" onClick={createRect}>
                    <i className="fas fa-plus"></i>
                </div>
                <div className="nav-items items3">
                    <i className="fas fa-edit"></i>
                </div>
                <div className="nav-items items4">
                    <i className="fas fa-minus"></i>
                </div>
            </div>

            <div className="showBox">
                <div className="canvas" ref={canvas}></div>
            </div>

            <div className="show-array-details">
                <div className="canvas" ref={arrayDetailsCanvas}></div>
            </div>
        </div>
    )
}
