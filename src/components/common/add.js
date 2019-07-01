import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './add.css';

class Add extends Component {
    render() {
        return (
            <div>
                <div class="bosadasdx">
                    <a href="#popup1"><button class="button">Add</button></a>
                </div>

                <div id="popup1" class="overlay">
                    <div class="popup">
                        <h2 class='h2-1'>Add Data</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                            <from>
                                <label>AHSIAP</label>
                                <input placeholder='AHSIAP'></input>
                                <label>AHSIAP</label>
                                <input placeholder='AHSIAP'></input>
                                <label>AHSIAP</label>
                                <input placeholder='AHSIAP'></input>
                            </from>
                            <div>
                                <a href="#popup1"><button class="button1">Save</button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Add;