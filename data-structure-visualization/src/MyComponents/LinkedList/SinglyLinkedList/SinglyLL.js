import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import './SinglyLL.css';

export default function SinglyLL () {
  document.title = 'VisualDSA ~ Singly Linked List';

  var [i, setI] = useState (40);
  var [array, setArray] = useState ([]);
  var [address, setAddress] = useState (Math.floor(Math.random()*(999-100+1)+100));
  var [addressArray, setAddressArray] = useState ([]);
  var [total, setTotal] = useState (0);
  var [insertValue, setInsertValue] = useState (null);
  var [y, setY] = useState (170);
  var [indexNumber, setIndexNumber] = useState (null);
  var [xOfBegin, setxOfBegin] = useState (0);
  const singlyLLCanvas = useRef (null);

  const showCanvasForSinglyLL = () => {
    let width = 1500;
    let height = 2000;

    var svg = d3
      .select (singlyLLCanvas.current)
      .append ('svg')
      .attr ('viewBox', `0 0 ${width} ${height}`)
      .attr ('width', width)
      .attr ('height', height)
      .style ('background-color', 'rgb(36, 36, 43)');

    // Arrow Head
    svg
      .append ('defs')
      .append ('marker')
      .attr ('id', 'arrow')
      .attr ('markerWidth', '10')
      .attr ('markerHeight', '10')
      .attr ('refX', '0')
      .attr ('refY', '3')
      .attr ('orient', 'auto')
      .attr ('markerUnits', 'strokeWidth')
      .append ('path')
      .attr ('d', 'M0,0 L0,6 L9,3 z')
      .attr ('fill', '#f00');

    var head = d3
      .select ('svg')
      .append ('g')
      .attr ('transform', `translate(40 , 70)`);

    head
      .append ('rect')
      .attr ('width', 50)
      .attr ('height', 50)
      .attr ('rx', 15)
      .transition ()
      .style ('stroke', 'red')
      .style ('fill', 'white')
      .delay (500)
      .duration (1000);

    head
      .append ('text')
      .attr ('class', 'head')
      .attr ('dx', 9)
      .attr ('dy', -5)
      .attr ('textLength', '33px')
      .style ('stroke', 'rgb(255, 0, 0)')
      .text ('head');

    head
      .append ('text')
      .attr ('class', 'head-value')
      .attr ('dx', 13)
      .attr ('dy', 30)
      .style ('stroke', 'red')
      .text ('null');
  };

  function getTranslateXValue (translateString) {
    var n = translateString.indexOf ('(');
    var n1 = translateString.indexOf (',');

    var res = parseInt (translateString.slice (n + 1, n1));

    return res;
  }

  function getTranslateYValue (translateString) {
    var n = translateString.indexOf (',');
    var n1 = translateString.indexOf (')');

    var res = parseInt (translateString.slice (n + 1, n1));
    return res;
  }
  
  const createLL = () => {

    if(insertValue == null || insertValue === "") {
      alert("Please Enter valid Value")
      return;
    }

    let width = 60;
    let height = 50;

    if (total % 6 == 0 && total != 0) {
      setY (y + 80);
      setI (40);
    }

    let x = i;

    if (total == 0) showCanvasForSinglyLL ();

    let g = d3
      .select ('svg')
      .append ('g')
      .attr ('transform', `translate(${x} , ${y})`);

    g
      .append ('rect')
      .attr ('width', width)
      .attr ('height', height)
      .attr ('rx', 8)
      .transition ()
      .style ('stroke', 'red')
      .style ('fill', 'white')
      .delay (500)
      .duration (1000);

    g
      .append ('text')
      .attr ('dx', 20)
      .attr ('dy', 30)
      .transition ()
      .style ('stroke', 'red')
      .text (insertValue)
      .delay (500)
      .duration (1000);

    g
      .append ('text')
      .attr ('x', 18)
      .attr ('y', 67)
      .transition ()
      .style ('stroke', 'red')
      .text (address)
      .delay (500)
      .duration (1000);

    {
      g
        .append ('rect')
        .attr ('width', width)
        .attr ('height', height)
        .attr ('x', 60)
        .attr ('rx', 8)
        .transition ()
        .style ('stroke', 'red')
        .style ('fill', 'white')
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('dx', width + 20)
        .attr ('dy', 30)
        .attr ('class', 'addressText')
        .transition ()
        .style ('stroke', 'red')
        .text ('null')
        .delay (500)
        .duration (1000);
    }

    // change address
    {
      var allG = document.getElementsByTagName ('g');
      console.log(allG);
      for (var f = 1; f < allG.length; f++) {
        var value = allG[f].getAttribute ('transform');
        var valueX = getTranslateXValue (value);
        if (valueX == x - 150) {
          var text = allG[f].getElementsByClassName ('addressText')[0];

          d3
            .select (text)
            .transition ()
            .ease (d3.easeLinear)
            .delay (500)
            .duration (300)
            .text (address);

          break;
        }
      }
    }

    g
      .append ('line')
      .attr ('x1', width * 2)
      .attr ('x2', width * 2 + 20)
      .attr ('y1', height / 2)
      .attr ('y2', height / 2)
      .transition ()
      .style ('stroke', 'white')
      .attr ('marker-end', 'url(#arrow)')
      .delay (1000)
      .duration (1500);

    // head address change
    if (total == 0) {
      var headRect = document.getElementsByTagName ('rect')[0];
      var head = document.getElementsByClassName ('head-value')[0];

      d3
        .select (headRect)
        .transition ()
        .ease (d3.easeLinear)
        .delay (500)
        .duration (500)
        .style ('fill', 'blue');

      d3
        .select (head)
        .transition ()
        .ease (d3.easeLinear)
        .delay (1000)
        .duration (300)
        .text (address);

      d3
        .select (headRect)
        .transition ()
        .ease (d3.easeLinear)
        .delay (1300)
        .duration (500)
        .style ('fill', 'white');
    }

    addressArray.push (address);
    setAddressArray (addressArray);
    //console.log (addressArray);

    setAddress (address + 1);

    array.push (total + 1);
    setArray (array);
    //console.log (array);

    //console.log ('total : - ' + total);
    setTotal (total + 1);
    setI (i + 150);
  };

  const enterAtBeginning = () => {
    // creation of newly linked list

    if(insertValue == null || insertValue === "") {
      alert("Please Enter valid Value")
      return;
    }

    if (total == 0) showCanvasForSinglyLL ();

    var width = 60;
    var height = 50;
    var x = 40;

    if (total % 6 == 0 && total != 0) {
      setY (y + 80);
      setI (40);
    }

    let g = d3
      .select ('svg')
      .append ('g')
      .attr ('transform', `translate(40,170)`);

    // creation of new linked list
    {

      {
        g
        .append ('rect')
        .attr ('width', width)
        .attr ('height', height)
        .attr ('x', 20)
        .attr ('rx', 8)
        .transition ()
        .style ('stroke', 'red')
        .style ('fill', 'white')
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('dx', width + 20)
        .attr ('dy', 30)
        .attr ('class', 'addressText')
        .transition ()
        .style ('stroke', 'red')
        .text ('null')
        .delay (500)
        .duration (1000);
      }

      g
        .append ('rect')
        .attr ('width', width)
        .attr ('height', height)
        .attr ('rx', 8)
        .transition ()
        .style ('stroke', 'red')
        .style ('fill', 'white')
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('dx', 20)
        .attr ('dy', 30)
        .transition ()
        .style ('stroke', 'red')
        .text (insertValue)
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('x', 18)
        .attr ('y', 67)
        .transition ()
        .style ('stroke', 'red')
        .text (address)
        .delay (500)
        .duration (1000);

      {
        g
          .append ('rect')
          .attr ('width', width)
          .attr ('height', height)
          .attr ('x', 60)
          .attr ('rx', 8)
          .transition ()
          .style ('stroke', 'red')
          .style ('fill', 'white')
          .delay (500)
          .duration (1000);

        var value = document.getElementsByClassName ('head-value')[0].innerHTML;
        // var value = head.innerHTML;

        g
          .append ('text')
          .attr ('dx', width + 20)
          .attr ('dy', 30)
          .attr ('class', 'addressText')
          .transition ()
          .style ('stroke', 'red')
          .text (value)
          .delay (500)
          .duration (1000);
      }

      g
        .append ('line')
        .attr ('x1', width * 2)
        .attr ('x2', width * 2 + 20)
        .attr ('y1', height / 2)
        .attr ('y2', height / 2)
        .transition ()
        .style ('stroke', 'white')
        .attr ('marker-end', 'url(#arrow)')
        .delay (1000)
        .duration (1500);
    }

    // head address change
    {
      var headRect = document.getElementsByTagName ('rect')[0];
      var head = document.getElementsByClassName ('head-value')[0];

      d3
        .select (headRect)
        .transition ()
        .ease (d3.easeLinear)
        .delay (500)
        .duration (500)
        .style ('fill', 'blue');

      d3
        .select (head)
        .transition ()
        .ease (d3.easeLinear)
        .delay (1000)
        .duration (300)
        .text (address);

      d3
        .select (headRect)
        .transition ()
        .ease (d3.easeLinear)
        .delay (1300)
        .duration (500)
        .style ('fill', 'white');
    }

    for (var k = 0; k < total; k++) {
      var allG = document.getElementsByTagName ('g');
      var indexG = allG[k + 1];
      var value = indexG.getAttribute ('transform');
      // var value1 = value.replace('translate(','').replace(', 70)','');
      var valueX = getTranslateXValue (value);
      var valueY = getTranslateYValue (value);
      valueX += 150;
      d3
        .select (indexG)
        .transition ()
        .ease (d3.easeLinear)
        .attr ('transform', 'translate(' + valueX + ',' + valueY + ')')
        .delay (500)
        .duration (1000);
    }

    array.unshift (total + 1);
    setArray (array);
    // (array);

    ////console.log ('total : - ' + total);
    setTotal (total + 1);

    addressArray.unshift (address);
    setAddressArray (addressArray);
    //console.log (addressArray);

    setAddress (address + 1);
    setI (i + 150);
  };
 
  const enterAtBetween = () => {

    if(insertValue == null || insertValue === "") {
      alert("Please Enter valid Value")
      return;
    }

    var width = 60;
    var height = 50;
    var x = 40;

    if (indexNumber > total) {
      alert ('Index Is Greater than total Linked list');
    }

    var allG = document.getElementsByTagName ('g');

    var len = array.length;
    for (var k = indexNumber; k < len; k++) {
      var indexG = allG[array[k]];
      var value = indexG.getAttribute ('transform');
      var valueX = getTranslateXValue (value);
      var valueY = getTranslateYValue (value);
      valueX += 150;

      //console.log (indexG);

      d3
        .select (indexG)
        .transition ()
        .ease (d3.easeLinear)
        .attr ('transform', 'translate(' + valueX + ',' + valueY + ')')
        .delay (500)
        .duration (1000);

      //console.log (array[k]);
    }
    //console.log (len);
    var p = indexNumber * 150 + 40;
    //console.log (p);

    setI (valueX + 150);
    //console.log (i);

    let g = d3
      .select ('svg')
      .append ('g')
      .attr ('transform', 'translate(' + p + ',170)');

    {
      g
        .append ('rect')
        .attr ('width', width)
        .attr ('height', height)
        .attr ('rx', 8)
        .transition ()
        .style ('stroke', 'red')
        .style ('fill', 'white')
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('dx', 20)
        .attr ('dy', 30)
        .transition ()
        .style ('stroke', 'red')
        .text (insertValue)
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('x', 18)
        .attr ('y', 67)
        .transition ()
        .style ('stroke', 'red')
        .text (address)
        .delay (500)
        .duration (1000);

      // address

      g
        .append ('rect')
        .attr ('width', width)
        .attr ('height', height)
        .attr ('x', 60)
        .attr ('rx', 8)
        .transition ()
        .style ('stroke', 'red')
        .style ('fill', 'white')
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('dx', width + 20)
        .attr ('dy', 30)
        .attr ('class', 'addressText')
        .transition ()
        .style ('stroke', 'red')
        .text (addressArray[indexNumber])
        .delay (500)
        .duration (1000);

      // arrow

      g
        .append ('line')
        .attr ('x1', width * 2)
        .attr ('x2', width * 2 + 20)
        .attr ('y1', height / 2)
        .attr ('y2', height / 2)
        .transition ()
        .style ('stroke', 'white')
        .attr ('marker-end', 'url(#arrow)')
        .delay (1000)
        .duration (1500);
    }

    addressArray.splice (indexNumber, 0, address);
    setAddressArray (addressArray);
    // //console.log (addressArray);

    var addressIndex = allG[array[indexNumber - 1]];
    var addressValue = addressIndex.getElementsByClassName('addressText')[0];
    // pacchal [0] e aakha g ma text darshave chhe 

    // //console.log ("addressvalue"+addressValue);
    d3
      .select (addressValue)
      .transition ()
      .ease (d3.easeLinear)
      .delay (1000)
      .duration (300)
      .text (addressArray[indexNumber]);

    setAddress (address + 1);
    setTotal (total + 1);
    //console.log (array[indexNumber]);

    // enter element in array
    array.splice (indexNumber, 0, total + 1);
    //console.log (array);


  };

  const deleteAtBeginning = () => {

    if(total==0)
    {
      alert("linked list is empty");
      clearSvg();
    }

    var allG = document.getElementsByTagName ('g');
    //console.log (array)
    //console.log(array[0]);
    var indexG = allG[array[0]];
  

    d3.select(indexG).remove();
    
    // for(var idx=0;i<array.length;i++)
    // {
    //     array.splice(idx,0,arr[idx]-1);
    //      setArray(array[idx]-1);
    // }
     var array1 = array.map(
        function(value) {
          if(value>array[0])
             {   
               return value - 1;
             } 
          else
            {
                return value;
            }
          } 
        );
    
    array1.shift(); //delete first element in array 
    setArray(array1);
    //console.log (array);
    addressArray.shift();
    setTotal(total-1);
    setMinus(minus+1);

  }

  const deleteAtEnd = () => 
  {
    //console.log ("enter in delete at end");
    //console.log(total);
    if(total==0)
    {
      alert("linked list is empty");
      clearSvg();
    }

    var allG = document.getElementsByTagName ('g');
     //console.log (array)
    //console.log(array[total]);
    var indexG = allG[array[total]];

    d3.select(indexG).remove();

    array.pop();

    setTotal(total-1);
  }

  // Clear canvas
  const clearSvg = () => {
    d3.selectAll ('svg').remove ();
    setI (40);
    console.log("i"+i);
    setAddress (200);
    console.log("address"+address);
    setTotal (0);
    console.log("total"+total);
    setY (170);
    console.log ("y"+y);
    setAddressArray([...addressArray,[0]]);
    console.log ("addressarray"+addressarray);
  };

  return (
    <div className="singly-linked-list">
      <div className="title">
        <hr />
        <h2 className="font-weight-bold">Singly Linked List</h2>
        <hr />
      </div>

      <div
        className="singly-LL row"
        style={{justifyContent: 'space-around', margin: '8px'}}
      >
        <div className="singly-LL-insert-operation">
          <label className="singly-LL-operation-title">Insert:</label>
          <input
            className="singly-LL-insert-value"
            placeholder=" enter value"
            type="number"
            onChange={e => {
              setInsertValue (e.target.value);
            }}
          />
          <label>At Beginning:</label>
          <i className="fas fa-arrow-right" onClick={enterAtBeginning} /> |
          <label>At Last:</label>
          <i className="fas fa-arrow-right" onClick={createLL} /> |
          <label>At Index:</label>
          <input
            className="singly-LL-index-value"
            placeholder=" enter index"
            type="number"
            onChange={e => {
              setIndexNumber (e.target.value);
            }}
          />
          <i className="fas fa-arrow-right" onClick={enterAtBetween} />
        </div>

        <div className="singly-LL-clear-operation">
          <label className="singly-LL-operation-title">Clear:</label>
          <i className="fas fa-redo" onClick={clearSvg} />
        </div>

        <div className="singly-LL-delete-operation">
          <label className="singly-LL-operation-title">Delete:</label>
          <label>At Beginning: </label>
          <i className="fas fa-arrow-right" onClick={deleteAtBeginning}/>
          |<label> At Last:</label>
          <i className="fas fa-arrow-right" onClick={deleteAtEnd} />
        </div>
      </div>

      <div className="showBoxForSinglyLL mx-auto">
        <div className="singlyLLCanvas" ref={singlyLLCanvas} />
      </div>
    </div>
  );
}
