import React from 'react';

export default () => (
    <div className="card">
        <img
            src="http://localhost:9999/hotel-image-1.png"
            alt="Image of the hotel"
        />
            <div className="content-container">
                <h1>Iberostar Grand Salome</h1>
                <h2>Costa Adeje, Tenerife</h2>
                <div>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                </div>

                <ul>
                    <li><strong>2</strong> Adults, <strong>2</strong> children & <strong>1</strong> infant</li>
                    <li><strong>3rd July 2019</strong> for <strong>7 days</strong></li>
                    <li>departing from <strong>East Midlands</strong></li>
                </ul>

                <button className="call-to-action">
                    <span className="action-text">
                        Book now
                    </span>
                    <span className="action-amount">
                        £1,136.50
                    </span>
                </button>
            </div>
            <div className="read-more">
                <strong>Read more</strong> about this hotel &nbsp;
                <i className="fas fa-angle-right"/>
            </div>
    </div>
);
