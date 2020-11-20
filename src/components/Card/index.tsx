import React from 'react';
import {format} from 'date-fns';

export interface ICardProps {
    name: string;
    region: string;
    stars: number;
    price: string;
    adults: number;
    children: number;
    infants: number;
    info: string;
    image: string;
    date: Date;
}

export default ({
                    image,
                    name,
                    region,
                    adults,
                    children,
                    infants,
                    price,
                    stars,
                    date
                }: ICardProps) =>
    (
        <div className="card">
            <img
                src={`http://localhost:9999/${image}`}
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
                        <strong>{adults}</strong> Adults, <strong>{children}</strong> children
                        & <strong>{infants}</strong> infant
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
            <div className="read-more">
                <strong>Read more</strong> about this hotel &nbsp;
                <i className="fas fa-angle-right"/>
            </div>
        </div>
    );
