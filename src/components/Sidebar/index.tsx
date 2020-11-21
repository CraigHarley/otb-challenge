import React from 'react';
import {ISort} from "../../types";
import {SortTypes} from "../../types/enums";

export interface ISidebarProps {
    setChosenSort: Function;
    chosenSort: SortTypes;
    sorts: ISort[];
}

export default ({sorts, chosenSort, setChosenSort}: ISidebarProps) => (
    <div className="Sidebar">
        <div className="button-container">
            {
                sorts.map(
                    ({name, icon, type}, key) => (
                        <button
                            key={key}
                            className={(chosenSort === type) ? 'is-active' : undefined}
                            onClick={() => setChosenSort(type)}
                        >
                            Sort <strong>{name}</strong> {icon}
                        </button>
                    )
                )
            }
        </div>
    </div>
);
