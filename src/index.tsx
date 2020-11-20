import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/Sidebar';
import Card from './components/Card';

const mountNode = document.getElementById("app");
ReactDOM.render(
    <div className="grid-container">
        <Sidebar/>

        <div className="Content">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>,
    mountNode
);
