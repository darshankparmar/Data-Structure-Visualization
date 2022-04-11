import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './_404Page.css';
import { Link } from 'react-router-dom';

export default function _404Page2() {

    useEffect(() => {
        var canvas = document.querySelector("canvas"),
            context = canvas.getContext("2d"),
            width = canvas.width,
            height = canvas.height,
            radius = 20;

        var circles = d3.range(700).map(function(i) {
            return {
                x: (i % 37) * (radius + 1) * 2,
                y: Math.floor(i / 37) * (radius + 1) * 2,
                type: d3.schemeCategory10[i % 10]
            };
        });
        // console.log (circles);

        var simulation = d3.forceSimulation(circles)
            .force("collide", d3.forceCollide(radius + 1).iterations(4))
            .on("tick", drawCircles);

        d3.select(canvas)
            .call(d3.drag()
                .container(canvas)
                .subject(dragsubject)
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        function drawCircles() {
            context.clearRect(0, 0, width, height);
            context.save();
            circles.forEach(drawCircle);
            context.strokeStyle = "white";
            context.stroke();
        }

        function drawCircle(d) {
            context.beginPath();
            context.fillStyle = d.type;
            context.moveTo(d.x + radius, d.y);
            context.arc(d.x, d.y, radius, 0, 2 * Math.PI);
            context.fill();
        }

        function dragsubject() {
            return simulation.find(d3.event.x, d3.event.y, radius);
        }

        function dragstarted() {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d3.event.subject.fx = d3.event.subject.x;
            d3.event.subject.fy = d3.event.subject.y;
        }

        function dragged() {
            d3.event.subject.fx = d3.event.x;
            d3.event.subject.fy = d3.event.y;
        }

        function dragended() {
            if (!d3.event.active) simulation.alphaTarget(0);
            d3.event.subject.fx = null;
            d3.event.subject.fy = null;
        }
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
            
            <canvas width={window.innerWidth} height="700"></canvas>
        </div>
    )
}
