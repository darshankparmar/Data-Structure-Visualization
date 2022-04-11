import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './_404Page.css';
import { Link } from 'react-router-dom';

export default function _404Page1() {
    useEffect(() => {
        let width = 1500;
        let height = 700;
        let radius = 32;

        const svg = d3.select(".page-not-found")
            .append("svg")
            .attr("viewBox", [0, 0, width, height])
            .attr("stroke-width", 2);

        const circles = d3.range(30).map(i => ({
            x: Math.random() * (width - radius * 2) + radius,
            y: Math.random() * (height - radius * 2) + radius,
        }));

        function dragstarted(d) {
            d3.select(this).raise().attr("stroke", "white");
        }
      
        function dragged(d) {
            d3.select(this).attr("cx", d3.event.x).attr("cy", d3.event.y);
        }
      
        function dragended(d) {
            d3.select(this).attr("cx", d.x).attr("cy", d.y);
            d3.select(this).attr("stroke", null);
        }

        var drag = d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended);

        svg.selectAll("circle")
            .data(circles)
            .join("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", radius)
            .style("fill", (d, i) => d3.schemeCategory10[i % 10])
            .call(drag);      
    })    
    
    return (
        <div className="page-not-found">
            <div className="notfound-404">
                <h1>404</h1>
                <h2>Page not found</h2>
                <div className="d-flex justify-content-center">
                    <Link to='/' className="homePageLink">Homepage</Link>
                </div>
            </div>
        </div>
    )
}
