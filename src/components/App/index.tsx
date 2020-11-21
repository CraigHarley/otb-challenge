import React, { useState } from 'react';

import {SortTypes} from "../../types/enums";
import {hotels, sorts} from "../../models";
import Sidebar from "../Sidebar";
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
                        .sort(
                            sorts
                                .find((sort) => sort.type === chosenSort)
                                .func
                        )
                        .map((hotel, key) => <Card hotel={hotel} key={key}/>)
                }
            </div>
        </div>
    );
};
