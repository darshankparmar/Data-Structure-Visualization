import React, { useEffect, useRef, useState } from 'react';
import './Array.css';
import * as d3 from 'd3';


export default function Array() {

    const showMenu = () => {
        for (let i = 0; i <= 3; i++) {
            document
              .getElementsByClassName("nav-items")
              [i].classList.toggle("show-menu");
        }
    }

    const canvas = useRef(null);

    const dataTypeList = ["Select Array Data Type", "int", "char", "long" , "double", "long double"];

    var [dataType, setDataType] = useState(0);
    var [arraySize, setArraySize] = useState(0);
    var [remainingArraySize, setRemainingArraySize] = useState(0);

    var [isSetArraySize, setIsSetArraySize] = useState(0);
    var [isSetDataType, setIsSetDataType] = useState(0);

    useEffect(() => {
        if(arraySize>0)
            setIsSetArraySize(true);
        else
            setIsSetArraySize(false);

        if(dataType>0)
            setIsSetDataType(true);
        else
            setIsSetDataType(false);
    })

    const showCanvas = () => {
        const width = 1800;
        const height = 330;

        // SVG
        const svg = d3.select(canvas.current)
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

    const clearSvg = () => {
        d3.select("svg").remove();
        showCanvas();
        i = 0;
    }

    var [i, setI] = useState(1);
    var [insertValue, setInsertValue] = useState(0);
    // var insertValue;

    const createRect = () => {
        if(insertValue == null || insertValue === "") {
            alert("Please Enter valid Value")
            return;
        }
        if(i === 1)
            showCanvas();
        
        if(remainingArraySize === 0) {
            return;
        }
        const width = 50;
        const height = 50;
        const x = 70;
        const y = 100;
    
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
            .attr("class", "array-index")
            .attr("dx", 20)
            .attr("dy", -5)
            .style("stroke", "red")
            .text(i-1);
                
        g.append("text")
            .attr("class", "array-value")
            .attr("dx", 20)
            .attr("dy", 30)
            .text(insertValue);

        g.append("text")
            .attr("class", "array-memory-location")
            .attr("dx", 10)
            .attr("dy", 65)
            .style("stroke", "white")
            .text(i+199);

        if(remainingArraySize !== 1) { 
            g.append("line")
                .attr("x1", width)
                .attr("x2", width+10)
                .attr("y1", height/2)
                .attr("y2", height/2)
                .style("stroke", "white")
                .attr("marker-end", "url(#arrow)" );
        }

        setI(i+1);
        setRemainingArraySize(remainingArraySize-1);
    }

    return (
        <div className="array">

            <div className="initialize-array row"> 
            <div className="initialize-array-data-type col-4">
                <label>Array Data Type</label>
                <select className="select-data-type" onChange={(e) => {setDataType(e.target.value); clearSvg(); setI(1); }} >
                    {dataTypeList.map((x,y) => <option value={y} key={y}>{x}</option>)}
                </select>
            </div>
        
            <div className="initialize-array-size col-4">
                <label>Array Size</label>
                <input className="enter-array-size" type="number" min="1" placeholder="Enter Array size" onChange={(e) => {setArraySize(e.target.value); setRemainingArraySize(e.target.value); clearSvg(); setI(1);} } />
            </div>
            </div>

            {(remainingArraySize>0 && isSetDataType) ?
                <div className="operation"> 
                    <div className="insert-operation">
                        <input className="insert-value" type="number" placeholder="Enter value" onChange={(e) => setInsertValue(e.target.value)} />
                        <div className="insert-button" onClick={createRect}>
                            <i className="fas fa-plus"></i>
                            <i className="fas fa-circle">
                                <span id="arraySize">{remainingArraySize}</span>
                            </i>
                        </div>
                    </div>
                </div>
            :
                <></>
            }

        {(isSetArraySize && isSetDataType) ?
            <>
                {/* <div className="operation">
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
                </div> */}
                <div className="showBox">
                    <div className="canvas" ref={canvas}></div>
                </div>
            </>
        :
            <></>
        }
            
          
        </div>
    )
}
