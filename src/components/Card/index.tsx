import React, {ReactElement, useState} from 'react';
import {format} from 'date-fns';

import config from '../../config'
import {IHotel, IListable} from '../../types';
import OccupancyMessage from './OccupancyMessage';

export interface ICardProps extends IListable {
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
                }: ICardProps): ReactElement => {

    const [isShowingMoreInfo, setIsShowingMoreInfo] = useState(false);

    return (
        <section>
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
                <button
                    className="read-more"
                    onClick={() => setIsShowingMoreInfo(!isShowingMoreInfo)}
                >
                    <strong>Read more</strong> about this hotel &nbsp;
                    {
                        isShowingMoreInfo ?
                            <i className="fas fa-angle-down"/> :
                            <i className="fas fa-angle-right"/>
                    }

                </button>
            </div>
            <div className={`read-more-content ${isShowingMoreInfo ? '' : 'is-hidden'}`}>
                <h3>Overview</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>

    );
};
