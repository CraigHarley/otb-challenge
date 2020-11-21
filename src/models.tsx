import React from 'react';

import {IHotel, ISort} from "./types";
import {SortDirections, SortTypes} from "./types/enums";

export const sorts: ISort[] = [
    {
        name: 'alphabetically',
        type: SortTypes.ALPHA,
        func: (a, b) => sort(SortTypes.ALPHA, a, b, SortDirections.ASC),
        icon: <i className="float-right fas fa-sort-alpha-down"/>
    },

    {
        name: 'by price',
        type: SortTypes.PRICE,
        func: (a, b) => sort(SortTypes.PRICE, a, b, SortDirections.ASC),
        icon: <i className="float-right fas fa-pound-sign"/>
    },

    {
        name: 'by star rating',
        type: SortTypes.STARS,
        func: (a, b) => sort(SortTypes.STARS, a, b, SortDirections.DESC),
        icon: <i className="float-right fas fa-star"/>
    },
]

const sort = (key: SortTypes, a: IHotel, b: IHotel, direction: SortDirections) => {
    if (a[key] > b[key]) {
        return direction;
    }
    if (a[key] < b[key]) {
        return -direction;
    }
    return 0;
}

export const hotels: IHotel[] = [
    {
        adults: 2,
        children: 0,
        infants: 1,
        info: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        price: "£3,136.50",
        region: "Costa Adeje, Tenerife",
        name: "Iberostar Grand Salome",
        image: "hotel-image-1.png",
        stars: 4,
        date: new Date('2019-07-03')
    },
    {
        adults: 2,
        children: 1,
        infants: 0,
        info: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        price: "£1,136.50",
        region: "Costa Adeje, Tenerife",
        name: "Wow - so fancy",
        image: "hotel-image-2.png",
        stars: 2,
        date: new Date('2019-07-03')
    },
    {
        adults: 1,
        children: 0,
        infants: 0,
        info: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        price: "£5,136.50",
        region: "Costa Adeje, Tenerife",
        name: "Swank-ville",
        image: "hotel-image-3.png",
        stars: 4,
        date: new Date('2019-07-03')
    },
    {
        adults: 2,
        children: 0,
        infants: 0,
        info: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        price: "£2,136.50",
        region: "Costa Adeje, Tenerife",
        name: "Really Fancy Hotel",
        image: "hotel-image-1.png",
        stars: 5,
        date: new Date('2019-07-03')
    }
]
