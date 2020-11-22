import React, {ReactElement, useState} from 'react';
import {css, StyleSheet} from "aphrodite";

import {SortTypes} from '../../types/enums';
import {hotels, sorts} from '../../models';
import Sidebar from '../Sidebar';
import Card from '../Card';

const styles = StyleSheet.create({
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr',
        gridTemplateAreas: "Sidebar Content Content Content",
    }
})

const App = (): ReactElement => {
    const [chosenSort, setChosenSort] = useState(SortTypes.ALPHA);

    return (
        <div className={css(styles.gridContainer)}>
            <Sidebar
                setChosenSort={setChosenSort}
                chosenSort={chosenSort}
                sorts={sorts}
            />
            <article>
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

export default App;
