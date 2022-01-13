// import React from 'react';
import React, { useEffect, useRef } from 'react';
import './Array.css';
import * as d3 from 'd3';
// import useInterval from 'use-interval';

export default function Array() {

    const showMenu = () => {
        for (let i = 0; i <= 3; i++) {
            document
              .getElementsByClassName("nav-items")
              [i].classList.toggle("show-menu");
        }
    }

    const canvas = useRef(null);

    useEffect(() => {
        showCanvas();
    })

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
    }

    const clearSvg = () => {
        d3.select("svg").remove();
        showCanvas();
        i = 0;
    }

    var i = 0;
    var insertValue;

    const createRect = () => {
        if(insertValue == null || insertValue == "") {
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

    }

    return (
        <div className="array">

            <div className="operation">
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
        </div>
    )
}
