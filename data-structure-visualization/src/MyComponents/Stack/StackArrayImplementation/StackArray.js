import React, { useEffect, useRef, useState } from 'react';
import './StackArray.css';
import * as d3 from 'd3';

export default function StackArray() {

    document.title = "VisualDSA ~ Stack using Array";

    const stackArrayCanvas = useRef(null);

    // initialize canvas
    const showStackArrayCanvas = () => {
        const width = 1200;
        var height = stackSize*15;
        if(height<1000)
            height = 1000;

        // SVG
        const svg = d3.select(stackArrayCanvas.current)
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

    var [stackSize, setStackSize] = useState(99);
    var [pushValue, setPushValue] = useState(null);
    var [prevPushValue, setPrevPushValue] = useState(1);
    var [top, setTop] = useState(0);
    var [k, setK] = useState(1);

    // PUSH
    const pushOperation = () => {
        if(stackSize == null || stackSize === "0") {
            alert("Please enter a valid stack size");
            return;
        }
        if(pushValue == null || pushValue === "") {
            alert("Please enter a valid push value");
            return;
        }
        if(top >= stackSize) {
            alert("Stack Overflow");
            return;
        }
        if(top == "0") {
            clearSvg();
            showStackArrayCanvas();
            setPrevPushValue(1);
            var g = d3.select("svg")
                .append("g")
                .attr("transform", `translate(70 , 70)`);

            g.append("rect")
                .attr("width", 60)
                .attr("height", 50)
                .attr("rx", 15)
                .transition()
                .style("stroke", "red")
                .style("fill", "rgb(255 130 0)")
                .delay(500).duration(1000);

            g.append("text")
                .attr("class", "top-of-stack")
                .attr("dx", 20)
                .attr("dy", -7)
                .transition()
                .style("stroke", "red")
                .text("top")
                .delay(500).duration(1000);
            
            g.append("text")
                .attr("class", "top-index")
                .attr("dx", 20)
                .attr("dy", 30)
                .text(top);
        }
        else {
            var topIndex = document.getElementsByClassName("top-index")[0];
            d3.select(topIndex).transition()
                .ease(d3.easeLinear)
                .delay(500).duration(1000)
                .text(top);

            var topRect = document.getElementsByTagName("rect")[0];
            d3.select(topRect).transition()
                .ease(d3.easeLinear)
                .delay(500).duration(500)
                .style("fill", "blue");

            d3.select(topRect).transition()
                .ease(d3.easeLinear)
                .delay(1000).duration(500)
                .style("fill", "rgb(255 130 0)");
        }
        
        const width = 50+(5*(pushValue.length-1));
        const height = 50;
        var x = ((70*(top+1)) + (5*(prevPushValue.length-1)) + k);
        let y = 180 + (Math.floor(top/13)*100);
        if(top === 0) 
            x = 70;
        if((top%13 == 0) && (top !== 0))
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
            .text(top)
            .delay(500).duration(1000);
                
        g.append("text")
            .attr("class", "array-value")
            .attr("dx", 20)
            .attr("dy", 30)
            .transition()
            .text(pushValue)
            .delay(1000).duration(1000);

        if(top != (stackSize-1)) {
            g.append("line")
                .attr("x1", width)
                .attr("x2", width+10)
                .attr("y1", height/2)
                .attr("y2", height/2)
                .transition()
                .style("stroke", "white")
                .attr("marker-end", "url(#arrow)" )
                .delay(1000).duration(1500);
        }
        
        setTop(top+1);
        setK(x-(70*(top+1)));
        setPrevPushValue(pushValue);
    }

    // POP
    const popOperation = () => {
        if(stackSize == null || stackSize === "0") {
            alert("Please enter a valid stack size");
            return;
        }
        if(top == "0") {
            alert("Stack Underflow");
            return;
        }
        var g = document.getElementsByTagName('g')[top];
        d3.select(g).transition()
            .ease(d3.easeLinear)
            .delay(500).duration(700)
            .style("opacity", "0");

        d3.select(g).transition().ease(d3.easeLinear).delay(1200).duration(500).remove();

        var topIndex = document.getElementsByClassName("top-index")[0];
        d3.select(topIndex).transition()
            .ease(d3.easeLinear)
            .delay(500).duration(1000)
            .text(top-2);

        var topRect = document.getElementsByTagName("rect")[0];
        d3.select(topRect).transition()
            .ease(d3.easeLinear)
            .delay(500).duration(500)
            .style("fill", "blue");

        d3.select(topRect).transition()
            .ease(d3.easeLinear)
            .delay(1000).duration(500)
            .style("fill", "rgb(255 130 0)");
        
        setTop(top-1);
    }

    // clear svg element
    const clearSvg = () => {
        d3.selectAll("svg").remove();
        setTop(0);
    }

    return (
        <div className="stack-array-implementation">
            <div className="title">
                <hr /><h2 className="font-weight-bold">Stack</h2><hr />
            </div>

            <div className="stack row" style={{justifyContent: 'center', margin: '8px'}}>

                <div className="initialize-stack col-lg-4">
                    <div className="initialize-stack-size">
                        <label>Enter Stack Max Size:</label>
                        <input className="enter-stack-size" type="number" min="1" placeholder=" 99(Default)" onChange={(e) => {let value = e.target.value; value = value.replace(/\D/, ''); if(value == '') value = 99;  setStackSize(value);}} />
                    </div>
                    {stackSize<1 && ( <div className="error mx-5">size must be greater than 0.</div> )}
                </div>

                <div className="stack-operation col-lg-7">
                    <div className="push-operation">
                        <label>Push:</label>
                        <input className="enter-push-value" type="number" onChange={(e) => {setPushValue(e.target.value);}}/>
                        <i className="fas fa-arrow-right" onClick={pushOperation}></i>
                    </div>
                    <div className="pop-operation">
                        <label>Pop:</label>
                        <i className="fas fa-arrow-right" onClick={popOperation}></i>
                    </div>
                    <div className="clear-operation">
                        <label>Clear Stack:</label>
                        <i className="fas fa-redo" onClick={clearSvg}></i>
                    </div>
                </div>

            </div>

            <div className="showBoxForStackArray">
                <div className="stackArrayCanvas" ref={stackArrayCanvas}></div>
            </div>
        </div>
    )
}
