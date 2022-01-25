import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import {randomInt, svg, text} from 'd3';

export default function LinkedList () {

  var [xStart,setXstart] = useState(0);

  const canvasForLL = useRef (null);
  var [total, setTotal] = useState (1);
  var [i, setI] = useState (40);
  var lastX = i; // last element where means x
  var [index, setIndex] = useState (0);
  var [j, setJ] = useState (80);
  var [insertValue, setInsertValue] = useState (null);

  var [address, setAddress] = useState (0);

  var [displace, setDisplace] = useState (0);

  useEffect (() => {
    showCanvas ();
  });

  const showCanvas = () => {
    let width = 1500;
    let height = 330;

    const svg = d3
      .select (canvasForLL.current)
      .append ('svg')
      .attr ('viewBox', `0 0 ${width} ${height}`)
      .attr ('width', width)
      .attr ('height', height)
      .style ('background-color', 'rgb(36, 36, 43)');
  };

  const createAddress = () => {
    let width = 40;
    let height = 40;
    let x = j;
    let y = 70;

    let g = d3
      .select ('svg')
      .append ('g')
      .attr ('class', 'address')
      .attr ('transform', `translate(${x} , ${y})`);

    g
      .append ('rect')
      .attr ('width', width)
      .attr ('height', height)
      .attr ('rx', 0)
      .transition ()
      .style ('stroke', 'red')
      .style ('fill', 'white')
      .delay (500)
      .duration (1000);

    g
      .append ('text')
      .attr ('dx', width - 30)
      .attr ('dy', 24)
      .transition ()
      .style ('stroke', 'red')
      .text ("null")
      .delay (500)
      .duration (1000);
    setAddress (address + 1);
    setJ (j + 120 );
  };
  const createRect = () => {
    let width = 40;
    let height = 40;
    let x = i;
    let y = 70;

    let g = d3
      .select ('svg')
      .append ('g')
      .attr ('class', 'data')
      .attr ('transform', `translate(${x} , ${y})`);

    g
      .append ('rect')
      .attr ('width', width)
      .attr ('height', height)
      .attr ('rx', 0)
      .transition ()
      .style ('stroke', 'red')
      .style ('fill', 'white')
      .delay (500)
      .duration (1000);

    g
      .append ('text')
      .attr ('dx', width - 25)
      .attr ('dy', -9)
      .transition ()
      .style ('stroke', 'red')
      .text (index)
      .delay (500)
      .duration (1000);

    g
      .append ('text')
      .attr ('dx', width - 30)
      .attr ('dy', 24)
      .transition ()
      .style ('stroke', 'red')
      .text (insertValue)
      .delay (500)
      .duration (1000);

    setI (i + 120);
    setIndex (index + 1);
  };

  const enterAtStart = () => {
    console.log ('Start position is best');
    console.log (insertValue);
    let width = 40;
    let height = 40;
    let x = 40+xStart;
    let y = 70;

    let g = d3.select ('svg').append ('g');

    // create rect and address niche
    {
      g
        .append ('rect')
        .attr ('width', width)
        .attr ('height', height)
        .attr ('transform', "translate("+ x +",70)")
        .attr ('rx', 0)
        .transition ()
        .style ('stroke', 'red')
        .style ('fill', 'white')
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('transform', `translate(53,93)`)
        .transition ()
        .style ('stroke', 'red')
        .text (insertValue)
        .delay (500)
        .duration (1000);

      //  address Box or Rect
      g
        .append ('rect')
        .attr ('width', 40)
        .attr ('height', 40)
        .attr ('transform', `translate(80,70)`)
        .attr ('rx', 0)
        .transition ()
        .style ('stroke', 'red')
        .style ('fill', 'white')
        .delay (500)
        .duration (1000);

      g
        .append ('text')
        .attr ('transform', `translate(89,93)`)
        .transition ()
        .style ('stroke', 'red')
        .text (address)
        .delay (500)
        .duration (1000);
    }

    var n = 0;

    // var addressRect = document.getElementsByClassName('address');
    // var indexAddress = addressRect[total];
    // let valueAddress = indexAddress.getAttribute('transform');

    n = 0;
    console.log (displace);

    for (var k = (total - 1) * 2; k > 0; k = k - 2) {
      var allG = document.getElementsByTagName ('g');
      var indexG = allG[k - 1];
      let value = indexG.getAttribute ('transform');

      var indexG1 = allG[k - 2];

      var allRect = document.getElementsByTagName ('rect');
      var indexRect = allRect[k - 1];

      var indexRect1 = allRect[k - 2];

      // change data rect
      d3
        .select (indexG)
        .transition ()
        .ease (d3.easeLinear)
        .attr ('transform', function (d) {
          return 'translate(' + (lastX + 80 - (120 * displace)) + ',70)';
        })
        .delay (500)
        .duration (1000);
        console.log("lastx : ");
        console.log(lastX + 80 - (120 * displace));

      // color change
      d3
        .select (indexRect)
        .transition ()
        .ease (d3.easeLinear)
        .style ('stroke', 'rgb(255 255 255)')
        .style ('fill', 'rgb(0 19 255)')
        .delay (1500)
        .duration (1000);

      // change address rect
      d3
        .select (indexG1)
        .transition ()
        .ease (d3.easeLinear)
        .attr ('transform', function (d) {
          return 'translate(' + (lastX + 40 - (120 * displace)) + ',70)';
        })
        .delay (500)
        .duration (1000);
        
        console.log("lastx1 : ");
        console.log(lastX + 40 - (120 * displace));

      // color change
      d3
        .select (indexRect1)
        .transition ()
        .ease (d3.easeLinear)
        .style ('stroke', 'rgb(255 255 255)')
        .style ('fill', 'rgb(0 19 255)')
        .delay (1500)
        .duration (1000);

      //set previous color

      d3
        .select (indexRect)
        .transition ()
        .ease (d3.easeLinear)
        .delay (4500)
        .duration (1000)
        .style ('stroke', 'rgb(255, 0, 0)')
        .style ('fill', 'rgb(255, 255, 255)');

      d3
        .select (indexRect1)
        .transition ()
        .ease (d3.easeLinear)
        .delay (4500)
        .duration (1000)
        .style ('stroke', 'rgb(255, 0, 0)')
        .style ('fill', 'rgb(255, 255, 255)');

      displace++;
      console.log (displace);
    }

    lastX = lastX + 120;
    displace = 0;
    setDisplace (displace);

    console.log (displace);

    // setTotal(total+1);
    // console.log(total);
    lastX = lastX;
    console.log (lastX);
  };

  var createLL = () => {
    if (insertValue == null || insertValue === '') {
      alert ('Pleaser enter valide value');
      return;
    }
    if (i == 1) {
      showCanvas ();
    }

    console.log ('here');
    console.log(lastX);

    createRect ();
    createAddress ();

    setTotal (total + 1);
    console.log (total);

      // if(total>=2)
      // {
      //   let g = d3.select ('svg').append ('g');

      //   var allText = document.getElementsByTagName ('g');
      //   var changeAddress = allText[(total*2)-1];
      //   // let value = indexG.getAttribute('text');

      //   d3.select(changeAddress)
      //       .text(5);
      // }

  };

  const clearAll = () => {
    console.log ('clearsvg function');
    d3.selectAll ('svg').remove ();
    insertValue = null;
    total = 0;
    index = 0;
    i = 40;
    j = 80;
    setInsertValue (null);
    setTotal (total);
    setIndex (index);
    setI (i);
    setJ (j);
    console.log (displace);
    // console.log(insertValue);
    // console.log(total);
    // console.log(index);
    // console.log(i);
    // console.log(j);
  };

  return (
    <div>
      {/*
        step-1
      creating a box */}

      <input
        type="number"
        placeholder="Enter int number"
        onChange={e => setInsertValue (e.target.value)}
      />
      <button onClick={createLL}>button here </button>
      <button onClick={enterAtStart}>Enter at start</button>
      <button
        onClick={() => {
          clearAll ();
        }}
      >
        Clear all
      </button>
      <div className="showBox">
        <div className="canvasForLL" ref={canvasForLL} />
      </div>
    </div>
  );
}
