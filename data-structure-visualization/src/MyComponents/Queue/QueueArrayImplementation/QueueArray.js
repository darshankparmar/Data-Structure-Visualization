import React, { useEffect, useRef, useState } from 'react';
import './QueueArray.css';
import * as d3 from 'd3';

export default function QueueArray() {

    document.title = "VisualDSA ~ Queue using Array";

    const queueArrayCanvas = useRef(null);

    // initialize canvas
    const showQueueArrayCanvas = () => {
        const width = 1200;
        var height = queueSize*15;
        if(height<1000)
            height = 1000;

        // SVG
        const svg = d3.select(queueArrayCanvas.current)
            .append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", width)
            .attr("height", height)
            .attr("preserveAspectRatio", "xMinYMin")
            .style("background-color", "rgb(36, 36, 43)");

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
    }

    var [queueSize, setQueueSize] = useState(99);
    var [enqueueValue, setEnqueueValue] = useState(null);
    var [prevEnqueueValue, setPrevEnqueueValue] = useState(1);
    var [front, setFront] = useState(-1);
    var [rear, setRear] = useState(-1);
    var [k, setK] = useState(1);   

    // Enqueue
    const enqueueOperation = () => {
        if(queueSize == null || queueSize === "0") {
            alert("Please enter a valid queue size");
            return;
        }
        if(enqueueValue == null || enqueueValue === "") {
            alert("Please enter a valid enqueue value");
            return;
        }
        if((rear-front) >= (queueSize-1)) {
            alert("Queue Overflow");
            return;
        }
        if(rear == -1) {
            clearSvg();
            showQueueArrayCanvas();
            setPrevEnqueueValue(1);

            var frontG = d3.select("svg")
                .append("g")
                .attr("transform", `translate(70 , 70)`);

            frontG.append("rect")
                .attr("width", 60)
                .attr("height", 50)
                .attr("rx", 15)
                .transition()
                .style("stroke", "red")
                .style("fill", "rgb(255 130 0)")
                .delay(500).duration(1000);

            frontG.append("text")
                .attr("class", "front-of-queue")
                .attr("dx", 10)
                .attr("dy", -7)
                .attr("textLength", "38")
                .transition()
                .style("stroke", "red")
                .text("front")
                .delay(500).duration(1000);
            
            frontG.append("text")
                .attr("class", "front-index")
                .attr("dx", 20)
                .attr("dy", 30)
                .text(front+1);

            var rearG = d3.select("svg")
                .append("g")
                .attr("transform", `translate(150 , 70)`);

            rearG.append("rect")
                .attr("width", 60)
                .attr("height", 50)
                .attr("rx", 15)
                .transition()
                .style("stroke", "red")
                .style("fill", "rgb(255 130 0)")
                .delay(500).duration(1000);

            rearG.append("text")
                .attr("class", "rear-of-queue")
                .attr("dx", 15)
                .attr("dy", -7)
                .attr("textLength", "30")
                .transition()
                .style("stroke", "red")
                .text("rear")
                .delay(500).duration(1000);
            
            rearG.append("text")
                .attr("class", "rear-index")
                .attr("dx", 20)
                .attr("dy", 30)
                .text(rear+1);

            setFront(front+1);
        }
        else {
            var rearIndex = document.getElementsByClassName("rear-index")[0];
            d3.select(rearIndex).transition()
                .ease(d3.easeLinear)
                .delay(500).duration(1000)
                .text(rear+1);
            
            var rearRect = document.getElementsByTagName("rect")[1];
            d3.select(rearRect).transition()
                    .ease(d3.easeLinear)
                    .delay(500).duration(500)
                    .style("fill", "blue");

            d3.select(rearRect).transition()
                .ease(d3.easeLinear)
                .delay(1000).duration(500)
                .style("fill", "rgb(255 130 0)");
        }
        
        const width = 50+(5*(enqueueValue.length-1));
        const height = 50;
        var x = ((70*(rear+2)) + (5*(prevEnqueueValue.length-1)) + k);
        let y = 180 + (Math.floor((rear+1)/13)*100);
        if((rear+1) === 0) 
            x = 70;
        if(((rear+1)%13 == 0) && (top !== 0))
            x = 70;
        
        var g = d3.select("svg")
            .append("g")
            .attr("transform", `translate(${x} , ${y})`);
        
        g.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("rx", 15)
            .transition()
            .style("stroke", "red")
            .style("fill", "white")
            .delay(500).duration(1000);
        
        g.append("text")
            .attr("class", "array-index")
            .attr("dx", width/2 - 5)
            .attr("dy", -5)
            .transition()
            .style("stroke", "red")
            .text(rear+1)
            .delay(500).duration(1000);
                
        g.append("text")
            .attr("class", "array-value")
            .attr("dx", 20)
            .attr("dy", 30)
            .transition()
            .text(enqueueValue)
            .delay(1000).duration(1000);

        g.append("line")
            .attr("x1", width)
            .attr("x2", width+10)
            .attr("y1", height/2)
            .attr("y2", height/2)
            .transition()
            .style("stroke", "white")
            .attr("marker-end", "url(#arrow)" )
            .delay(1000).duration(1500);

        setRear(rear+1);
        setK(x-(70*(rear+2)));
        setPrevEnqueueValue(enqueueValue);
    }

    // Dequeue
    const dequeueOperation = () => {
        if(queueSize == null || queueSize === "0") {
            alert("Please enter a valid queue size");
            return;
        }
        if(front == "-1") {
            alert("Queue Underflow");
            return;
        }

        var g = document.getElementsByTagName('g')[2];
        d3.select(g).transition()
            .ease(d3.easeLinear)
            .duration(500)
            .style("opacity", "0");

        d3.select(g).transition().ease(d3.easeLinear).delay(1000).duration(500).remove();

        var frontIndex = document.getElementsByClassName("front-index")[0];
        d3.select(frontIndex).transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .text(front+1);

        var frontRect = document.getElementsByTagName("rect")[0];
        d3.select(frontRect).transition()
            .ease(d3.easeLinear)
            .duration(500)
            .style("fill", "blue");

        d3.select(frontRect).transition()
            .ease(d3.easeLinear)
            .delay(500).duration(500)
            .style("fill", "rgb(255 130 0)");

        setFront(front+1);
        if(front === rear)
            setTimeout(function() { clearSvg() }, 1000);
    }

    // Clear queue
    const clearSvg = () => {
        d3.selectAll("svg").remove();
        setFront(-1);
        setRear(-1);
    }

    return (
        <div className="queue-array-implementation">
            <div className="title">
                <hr /><h2 className="font-weight-bold">Queue</h2><hr />
            </div>

            <div className="queue row" style={{justifyContent: 'center', margin: '8px'}}>

                <div className="initialize-queue col-lg-4">
                    <div className="initialize-queue-size">
                        <label>Enter Queue Max Size:</label>
                        <input className="enter-queue-size" type="number" min="1" placeholder=" 99(Default)" onChange={(e) => {let value = e.target.value; value = value.replace(/\D/, ''); if(value == '') value = 99;  setQueueSize(value);}}/>
                    </div>
                    {queueSize<1 && ( <div className="error mx-5">size must be greater than 0.</div> )}
                </div>

                <div className="queue-operation col-lg-7">
                    <div className="enqueue-operation">
                        <label>Enqueue:</label>
                        <input className="enter-enqueue-value" type="number" onChange={(e) => {setEnqueueValue(e.target.value);}}/>
                        <i className="fas fa-arrow-right" onClick={enqueueOperation}></i>
                    </div>
                    <div className="dequeue-operation">
                        <label>Dequeue:</label>
                        <i className="fas fa-arrow-right" onClick={()=> {setTimeout( function() { dequeueOperation(); }, 1200 )} }></i>
                    </div>
                    <div className="clear-operation">
                        <label>Clear Queue:</label>
                        <i className="fas fa-redo" onClick={clearSvg}></i>
                    </div>
                </div>

            </div>

            <div className="showBoxForQueueArray">
                <div className="queueArrayCanvas" ref={queueArrayCanvas}></div>
            </div>
        </div>
    )
}
