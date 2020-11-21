import React from 'react';
import {format} from 'date-fns';

import config from "../../config"
import {IHotel, IListable} from "../../types";
import OccupancyMessage from "./OccupancyMessage";

export interface ICardProps extends IListable{
    hotel: IHotel;
}

export default ({
                    hotel: {
                        image,
                        name,
                        region,
                        adults,
                        children,
                        infants,
                        price,
                        stars,
                        date
                    }
                }: ICardProps) =>
    (
        <div className="card">
            <img
                src={`${config.ASSET_URL}${image}`}
                alt="Image of the hotel"
            />
            <div className="content-container">
                <h1>{name}</h1>
                <h2>{region}</h2>
                <div>
                    {
                        new Array(stars)
                            .fill('')
                            .map((_, key) => <i key={key} className="fas fa-star"/>)
                    }
                </div>

                <ul>
                    <li>
                        <OccupancyMessage
                            adults={adults}
                            children={children}
                            infants={infants}
                        />
                    </li>
                    <li><strong>{format(date, 'do MMMM yyyy')}</strong> for <strong>7 days</strong></li>
                    <li>departing from <strong>East Midlands</strong></li>
                </ul>

                <button className="call-to-action">
                    <span className="action-text">
                        Book now
                    </span>
                    <span className="action-amount">
                        {price}
                    </span>
                </button>
            </div>
            <button className="read-more">
                <strong>Read more</strong> about this hotel &nbsp;
                <i className="fas fa-angle-right"/>
            </button>
        </div>
    );
