import React, {ReactElement, useState} from 'react';

import {SortTypes} from "../../types/enums";
import {hotels, sorts} from "../../models";
import Sidebar from "../Sidebar";
import Card from "../Card";

export default (): ReactElement => {
    const [chosenSort, setChosenSort] = useState(SortTypes.ALPHA);

    return (
        <div className="grid-container">
            <Sidebar
                setChosenSort={setChosenSort}
                chosenSort={chosenSort}
                sorts={sorts}
            />

            <article className="content">
                {
                    hotels
                        .sort(
                            sorts
                                .find((sort) => sort.type === chosenSort)
                                .func
                        )
                        .map((hotel, key) => <Card hotel={hotel} key={key}/>)
                }
            </article>
        </div>
    );
};
