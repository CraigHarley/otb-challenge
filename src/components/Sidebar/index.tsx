import React from 'react';
import {ISort} from "../../types";
import {SortTypes} from "../../types/enums";

export interface ISidebarProps {
    setChosenSort: (sort: SortTypes) => void;
    chosenSort: SortTypes;
    sorts: ISort[];
}

export default ({sorts, chosenSort, setChosenSort}: ISidebarProps): React.ReactNode => (
    <aside className="sidebar">
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
    </aside>
);
