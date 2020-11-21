import React, { useState } from 'react';

import Sidebar from "../Sidebar";
import {SortTypes} from "../../types/enums";
import {hotels, sorts} from "../../models";
import Card from "../Card";

export default () => {
    const [chosenSort, setChosenSort] = useState(SortTypes.ALPHA);

    return (
        <div className="grid-container">
            <Sidebar
                setChosenSort={setChosenSort}
                chosenSort={chosenSort}
                sorts={sorts}
            />

            <div className="Content">
                {
                    hotels
                        .map((hotel, key) => <Card hotel={hotel} key={key}/>)
                }
            </div>
        </div>
    );
};
