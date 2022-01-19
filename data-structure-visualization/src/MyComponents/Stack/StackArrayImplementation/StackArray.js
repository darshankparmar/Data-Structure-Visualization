import React from 'react';
import './StackArray.css';

export default function StackArray() {
    return (
        <div className="stack-array-implementation">
            <div className="title">
                <hr /><h2 className="font-weight-bold">Stack</h2><hr />
            </div>

            <div className="row" style={{justifyContent: 'center'}}>

            <div className="initialize-stack col-lg-4">
                <div className="initialize-stack-size">
                    <label>Enter Stack Max Size:</label>
                    <input className="enter-stack-size" type="number" min="1" max="99" placeholder=" 99(Default)" />
                </div>
            </div>
            <div className="stack-operation col-lg-7">
                <div className="push-operation">
                    <label>Push:</label>
                    <input className="enter-push-value" type="number" />
                </div>
                <div className="pop-operation">
                    <label>Pop:</label>
                    <input className="enter-pop-value" type="number" />
                </div>
                <div className="clear-opration">
                    <label>Clear Stack:</label>
                    <i className="fas fa-redo"></i>
                </div>
            </div>

            </div>
        </div>
    )
}
