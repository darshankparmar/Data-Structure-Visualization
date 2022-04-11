import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './MyComponents/Header/Header';
import HomePage from './MyComponents/HomePage/HomePage';

import DataStructures from './MyComponents/DataStructures/DataStructures';

import Array from './MyComponents/Array/Array';

import Stack from './MyComponents/Stack/Stack';
import StackArray from './MyComponents/Stack/StackArrayImplementation/StackArray';
import StackLL from './MyComponents/Stack/StackLLImplementation/StackLL';

import Queue from './MyComponents/Queue/Queue';
import QueueArray from './MyComponents/Queue/QueueArrayImplementation/QueueArray';
import QueueLL from './MyComponents/Queue/QueueLLImplementation/QueueLL';

import LL from './MyComponents/LinkedList/LinkedList';
import SinglyLL from './MyComponents/LinkedList/SinglyLinkedList/SinglyLL';
import DoublyLL from './MyComponents/LinkedList/DoublyLinkedList/DoublyLL';
import CircularLL from './MyComponents/LinkedList/CircularLinkedList/CircularLL';

import Tree from './MyComponents/Tree/Tree';
import BinaryTree from './MyComponents/Tree/BinaryTree/BinaryTree';
import BinarySearchTree from './MyComponents/Tree/BinarySearchTree/BinarySearchTree';

import _404Page1 from './MyComponents/404Page/_404Page1';
import _404Page2 from './MyComponents/404Page/_404Page2';

import ArrayTmp from './MyComponents/ArrayTmp/ArrayTmp';
import Auth from './MyComponents/Auth/auth';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/auth" element={<Auth />}></Route>
          <Route exact path="/dataStructures" element={<DataStructures />}></Route>
          <Route exact path="/array" element={<Array />}></Route>
          <Route exact path="/stack" element={<Stack />}></Route>
          <Route exact path="/stack/stackArray" element={<StackArray />}></Route>
          <Route exact path="/stack/stackLL" element={<StackLL />}></Route>
          <Route exact path="/queue" element={<Queue />}></Route>
          <Route exact path="/queue/queueArray" element={<QueueArray />}></Route>
          <Route exact path="/queue/queueLL" element={<QueueLL />}></Route>
          <Route exact path="/linkedList" element={<LL />}></Route>
          <Route exact path="/linkedList/singlyLL" element={<SinglyLL />}></Route>
          <Route exact path="/linkedList/doublyLL" element={<DoublyLL />}></Route>
          <Route exact path="/linkedList/circularLL" element={<CircularLL />}></Route>
          <Route exact path="/tree" element={<Tree />}></Route>
          <Route exact path="/tree/binaryTree" element={<BinaryTree />}></Route>
          <Route exact path="/tree/binarySearchTree" element={<BinarySearchTree />}></Route>
          <Route exact path="/advancedDsa" element={<ArrayTmp />}></Route>
          {(Math.floor(Math.random()*2) == 0) ? <Route exact path="/*" element={<_404Page1 />}></Route>
                    : <Route exact path="/*" element={<_404Page2 />}></Route>
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));


export default App;
