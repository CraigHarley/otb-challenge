import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/Sidebar';
import Card, {ICardProps} from './components/Card';

const hotel: ICardProps = {
    adults: 2,
    children: 1,
    infants: 1,
    info: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    price: "£1,136.50",
    region: "Costa Adeje, Tenerife",
    name: "Iberostar Grand Salome",
    image: "hotel-image-1.png",
    stars: 4,
    date: new Date('2019-07-03')
}

const mountNode = document.getElementById("app");
ReactDOM.render(
    <div className="grid-container">
        <Sidebar/>

        <div className="Content">
            <Card {...hotel}/>
            <Card {...hotel}/>
            <Card {...hotel}/>
            <Card {...hotel}/>
        </div>
    </div>,
    mountNode
);
