import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/Sidebar';
import Card from './components/Card';
import {hotels} from "./components/models";

const mountNode = document.getElementById("app");
ReactDOM.render(
    <div className="grid-container">
        <Sidebar/>

        <div className="Content">
            {
                hotels
                    .map((hotel, key) => <Card hotel={hotel} key={key}/>)
            }
        </div>
    </div>,
    mountNode
);
