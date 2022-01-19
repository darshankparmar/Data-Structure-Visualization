import React, { useEffect, useRef, useState } from 'react';
import './Array.css';
import * as d3 from 'd3';


export default function Array() {

    const canvas = useRef(null);
    const dataTypeList = ["Select Array Data Type", "int", "char", "long" , "double", "long double"];

    var [dataType, setDataType] = useState(0);
    var [arraySize, setArraySize] = useState(0);
    var [remainingArraySize, setRemainingArraySize] = useState(-1);

    var [isSetArraySize, setIsSetArraySize] = useState(false);
    var [isSetDataType, setIsSetDataType] = useState(false);
    var [isDataTypeChar, setIsDataTypeChar] = useState(false);

    useEffect(() => {
        document.title = "VisualDSA ~ Array"; 
        if(arraySize>0)
            setIsSetArraySize(true);
        else
            setIsSetArraySize(false);

        if(dataType>0)
            setIsSetDataType(true);
        else
            setIsSetDataType(false);

        if(dataType==2)
            setIsDataTypeChar(true);
        else
            setIsDataTypeChar(false);
    }, [arraySize, dataType])

    // initialize canvas
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

    // insert value in array and create rect element
    var [i, setI] = useState(1);
    var [k, setK] = useState(1);
    var [insertValue, setInsertValue] = useState(null);
    var [prevInsertedValue, setPrevInsertedValue] = useState(parseInt("1"));

    const createRect = () => {
        if(insertValue == null || insertValue === "") {
            alert("Please Enter valid Value")
            return;
        }
        if(i === 1)
            showCanvas();

        if(remainingArraySize === 0)
            return;

        const width = 50+(5*(insertValue.length-1));
        const height = 50;
        var x = ((70*i) + (5*(prevInsertedValue.length-1)) + k);
        if(i === 1)
            x = 70;
        const y = 100;
    
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
            .text(i-1)
            .delay(500).duration(1000);
                
        g.append("text")
            .attr("class", "array-value")
            .attr("dx", 20)
            .attr("dy", 30)
            .text(insertValue);

        g.append("text")
            .attr("class", "array-memory-location")
            .attr("dx", width/2 - 15)
            .attr("dy", 65)
            .transition()
            .style("stroke", "white")
            .text(i+199)
            .delay(500).duration(1000);

        if((remainingArraySize !== 1) && (arraySize !== i)) { 
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

        setI(i+1);
        setK(x-(70*i));
        setRemainingArraySize(remainingArraySize-1);
        setPrevInsertedValue(insertValue); 
    }

    // update array value at given index
    var [indexForUpdate, setIndexForUpdate] = useState(0);
    var [valueForUpdate, setValueForUpdate] = useState(0);

    const updateArray = () => {
        if(parseInt(indexForUpdate) >= parseInt(arraySize) || indexForUpdate < 0) {
            alert('Please Enter Valid index');
            return;
        }
        if(valueForUpdate == null || valueForUpdate === "") {
            alert("Please Enter valid Value")
            return;
        }

        var allGs = document.getElementsByTagName('g');
        var indexG = allGs[indexForUpdate];
        let value = indexG.getAttribute("transform");

        var allRect = document.getElementsByTagName('rect');
        var indexRect = allRect[indexForUpdate];

        var allArrayValue = document.getElementsByClassName("array-value");
        var indexArrayValue = allArrayValue[indexForUpdate];

        d3.select(indexG).transition()
            .ease(d3.easeLinear)
            .delay(500).duration(1000)
            .attr("transform", "translate(100, 220)");
            
        d3.select(indexRect).transition()
            .ease(d3.easeLinear)
            .delay(1500).duration(1000)
            .style("stroke", "rgb(255 255 255)")
            .style("fill", "rgb(0 19 255)");

        d3.select(indexArrayValue).transition()
            .ease(d3.easeLinear)
            .delay(3000).duration(1000)
            .text(valueForUpdate);
            
        d3.select(indexRect).transition()
            .ease(d3.easeLinear)
            .delay(4500).duration(1000)
            .style("stroke", "rgb(255, 0, 0)")
            .style("fill", "rgb(255, 255, 255)");
        
        d3.select(indexG).transition()
            .ease(d3.easeLinear)
            .delay(6000).duration(1000)
            .attr("transform", value);

    }

    // clear svg element
    const clearSvg = () => {
        d3.selectAll("svg").remove();
        setI(1);
    }

    return (
        <div className="array">

            <div className="title">
                <hr />
                <h2 className="font-weight-bold">Array</h2>
                <hr />
            </div>
            
            <div className="initialize-array row"> 
                <div className="initialize-array-data-type col-4">
                    <label>Array Data Type</label>
                    <select className="select-data-type" onChange={(e) => {setDataType(e.target.value); clearSvg(); setRemainingArraySize(arraySize); }} >
                        {dataTypeList.map((x,y) => <option value={y} key={y}>{x}</option>)}
                    </select>
                </div>
        
                <div className="initialize-array-size col-4">
                    <label>Array Size</label>
                    <input className="enter-array-size" type="number" min="1" max="99" pattern="[0-9]*" placeholder=" Enter Array size" onChange={(e) => {let value = e.target.value; value = value.replace(/\D/, ''); setArraySize(value); setRemainingArraySize(value); clearSvg();} } />
                    {arraySize<1 && ( <div className="error">size must be between 1 to 99</div> )}
                    {arraySize>99 && ( <div className="error">size must be between 1 to 99</div> )}
                </div>
            </div>

            <div className="operation"> 
                {(remainingArraySize>0 && remainingArraySize<100 && isSetDataType && isSetArraySize) ?
                    <><label>Insert Value one by one</label>
                    <div className="insert-operation">
                        {(isDataTypeChar) ? <input className="insert-value" type="text" minlength="1" maxlength="1" pattern="[A-Za-z]" placeholder=" Enter value" onChange={(e) => {let value = e.target.value; value = value.replace(/[^A-Za-z]/ig, ''); setInsertValue(value)}} />  
                        : <input className="insert-value" type="number" placeholder=" Enter value" onChange={(e) => setInsertValue(e.target.value)} /> 
                        }
                        <div className="insert-button" onClick={createRect}>
                            <i className="fas fa-plus"></i>
                            <i className="fas fa-circle">
                                <span id="arraySize">{remainingArraySize}</span>
                            </i>
                        </div> |
                        <i className="fas fa-redo" onClick={() => { clearSvg(); setRemainingArraySize(arraySize);}}></i>
                    </div></>
                :<></>}
                {(remainingArraySize == 0 && isSetDataType && isSetArraySize) ?
                    <><label>Update Value by Index</label>
                    <div className="other-operation">
                        <input className="operation-index-value" type="number" placeholder=" enter index" onChange={(e) => setIndexForUpdate(e.target.value)} />
                        {(isDataTypeChar) ?  <input className="operation-value" type="text" minlength="1" maxlength="1" placeholder=" enter value" onChange={(e) => { let value = e.target.value; value = value.replace(/[^A-Za-z]/ig, ''); setValueForUpdate(value)} }/>  
                        : <input className="operation-value" type="number" placeholder=" enter value" onChange={(e) => setValueForUpdate(e.target.value)} />
                        }
                        <i className="fas fa-edit" onClick={updateArray} ></i> |
                        <i className="fas fa-redo" onClick={() => { clearSvg(); setRemainingArraySize(arraySize); setInsertValue(null)}}></i>
                    </div></>
                :<></>}
            </div>

            <>
                {(isSetArraySize && isSetDataType) ?
                    <div className="showBox">
                        <div className="canvas" ref={canvas}></div>
                    </div>
                :<></>}         
            </>

        </div>
    )
}
