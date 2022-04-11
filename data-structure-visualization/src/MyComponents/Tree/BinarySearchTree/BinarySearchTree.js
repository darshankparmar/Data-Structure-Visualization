import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './BinarySearchTree.css';

export default function BinarySearchTree() {

    document.title = "VisualDSA ~ Binary Search Tree";

    const BSTCanvas = useRef(null);

    const showCanvasForBST = (treeData) => {
        // let width = 1500;
        // let height = 2000;

        var svg = d3.select (BSTCanvas.current)
            .append ('svg')
            .attr ('viewBox', `0 0 1500 2000`)
            .attr ('width', 1500)
            .attr ('height', 2000)
            .style ('background-color', 'rgb(36, 36, 43)');

            // var treeData =
            // {
            //     "name": "10",
            //     "children": [
            //         {
            //             "name": "50",
            //             "children": [
            //                 {
            //                     "name": "200",
            //                     "children": [
            //                         {
            //                             "name": "50"
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     "name": "101",
            //                 }
            //             ]
            //         },
            //         {
            //             "name": "203",
            //             "children": [
            //                 {
            //                     "name": "200",
            //                 },
            //                 {
            //                     "name": "101",
            //                 }
            //             ]
            //         }
            //     ]
            // };
          
            // console.log(treeData);


        // set the dimensions and margins of the diagram
        
        var margin = {top: 40, right: 90, bottom: 50, left: 90},
            width = 600 - margin.left - margin.right,
            height = 1000 - margin.top - margin.bottom;
          
        // declares a tree layout and assigns the size
        var treemap = d3.tree().size([height, width]);
          
        //  assigns the data to a hierarchy using parent-child relationships
        var nodes = d3.hierarchy(treeData, function(d) {
            return d.children;
        });

        // maps the node data to the tree layout
        nodes = treemap(nodes);
             
        var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
        // adds the links between the nodes
        var link = g.selectAll(".link")
                .data( nodes.descendants().slice(1))
                .enter().append("path")
                .attr("class", "link")
                // .transition()
                .attr("d", function(d) {
                return "M" + d.x + "," + d.y
                    + "C" + d.x + "," + (d.y + d.parent.y) / 2
                    + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
                    + " " + d.parent.x + "," + d.parent.y;
                });
                // .delay(1000).duration(1000);
          
        // adds each node as a group
        var node = g.selectAll(".node")
                .data(nodes.descendants())
                .enter().append("g")
                .attr("class", function(d) { 
                return "node" + (d.children ? " node--internal" : " node--leaf"); })
                .attr("transform", function(d) { 
                return "translate(" + d.x + "," + d.y + ")"; });
          
        // adds the circle to the node
        node.append("circle")
            // .transition()
            .attr("r", "30")
            .attr("fill", "red");
            // .delay(500).duration(1000);
            
        // adds the text to the node
        node.append("text")
            // .transition()
            .style("fill", "white")
            .style("alignment-baseline", "middle")
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.name; })
            // .delay(1500).duration(1000);
    }

    var [insertValue, setInsertValue] = useState(null);
    var [deleteValue, setDeleteValue] = useState(null);
    var [totalNodes, setTotalNodes] = useState(0);
    var [nodeArray, setNodeArray] = useState([]);

    function makeNodeTree(i, obj) {
        if(i < nodeArray.length) {
            obj.name = nodeArray[i];
            if(((2*i+1)<nodeArray.length) || ((2*i+2)<nodeArray.length))
            {
                obj.children = [];
                if( (2*i+1) < nodeArray.length )
                {
                    var node = new Object();
                    makeNodeTree(2*i + 1, node);
                    obj.children.push(node);
                }
                if( (2*i+2) < nodeArray.length )
                {
                    var node = new Object();
                    makeNodeTree(2*i + 2, node);
                    obj.children.push(node);
                }
            }
        }
    }

    const createNode = () => {
        if (insertValue == null || insertValue === '') {
            alert ('Pleaser enter valid value');
            return;
        }

        nodeArray.push(insertValue);
        console.log(nodeArray);

            // var treeData = []; 
            var obj = new Object();
            makeNodeTree(0, obj);
            var treeData = obj; 
            console.log(treeData);

        // if(totalNodes == 0) 
            d3.select('svg').remove();
            showCanvasForBST(treeData);

        setTotalNodes(totalNodes+1);
    }

    const clearBSTCanvas = () => {
        d3.select('svg').remove();
        nodeArray = [];
        setNodeArray(nodeArray);
        setTotalNodes(0);
    }

    const deleteNode = () => {
        if (deleteValue == null || deleteValue === '') {
            alert ('Pleaser enter valid value');
            return;
        }

        for(var k=0; k<nodeArray.length; k++) {
            if(nodeArray[k] === deleteValue) {
                nodeArray.splice(k, 1);
                break;
            }
            if(k == nodeArray.length-1)
            {
                alert ('Value is not present');
                return;
            }
        }
        
        // console.log(nodeArray);
        setNodeArray(nodeArray);
        
        var obj = new Object();
        makeNodeTree(0, obj);
        var treeData = obj; 
        // console.log(treeData);

        d3.select('svg').remove();
        showCanvasForBST(treeData);

        setTotalNodes(totalNodes-1);
    }

    return (
        <div className="binary-tree">
            <div className="title">
                <hr /><h2 className="font-weight-bold">Binary Tree</h2><hr />
            </div>

            <div className="row" style={{justifyContent: 'space-around', margin: '8px'}}>

                <div className="BST-insert-operation">
                    <label className="BST-operation-title">Insert:</label>
                    <input className="BST-insert-value" placeholder=" enter value" type="number" onChange={(e) => {setInsertValue(e.target.value);}}/>
                    <i className="fas fa-arrow-right" onClick={createNode}></i>
                </div>

                <div className="BST-clear-operation">
                    <label className="BST-operation-title">Clear:</label>
                    <i className="fas fa-redo" onClick={() => { clearBSTCanvas(); }}></i>
                </div>

                <div className="BST-delete-operation">
                    <label className="BST-operation-title">Delete:</label>
                    <input className="BST-delete-value" placeholder=" enter value" type="number" onChange={(e) => {setDeleteValue(e.target.value);}}/>
                    <i className="fas fa-arrow-right" onClick={() => { deleteNode(); }}></i>
                </div>

            </div>

            <div className="showBoxForBST mx-auto">
                <div className="BSTCanvas" ref={BSTCanvas}></div>
            </div>
        </div>
    )
}
