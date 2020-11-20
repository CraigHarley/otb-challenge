import React from 'react';

export default () => (
    <div className="Sidebar">
        <div className="button-container">
            <button className="is-active">Sort <strong>alphabetically</strong><i className="float-right fas fa-sort-alpha-down"/></button>
            <button>Sort by <strong>price</strong> <i className="float-right fas fa-pound-sign"/></button>
            <button>Sort by <strong>star rating</strong> <i className="float-right fas fa-star"/></button>
        </div>
    </div>
);
