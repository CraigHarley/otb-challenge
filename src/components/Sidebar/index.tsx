import React, {ReactElement} from 'react';
import {css, StyleSheet} from "aphrodite";

import {ISort} from '../../types';
import {SortTypes} from '../../types/enums';
import config from '../../config'

export interface ISidebarProps {
    setChosenSort: (sort: SortTypes) => void;
    chosenSort: SortTypes;
    sorts: ISort[];
}

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: '200px',
        maxWidth: '200px',
        margin: '2rem 5rem'
    },
    button: {
        textTransform: 'lowercase',
        textAlign: 'left',
        appearance: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
        border: 'none',
        height: '3rem',
        minWidth: '100%',
        color: config.styles.colors.primary,
        borderTop: `1px solid ${config.styles.colors.primary}`,
        padding: '0.5rem 1rem 0.5rem 1rem',
        lineHeight: '1rem',
        fontSize: 'small',
        ':hover': {
            // backgroundColor: `lighten(${config.styles.colors.primary}, 50%)`
        }
    },
    firstButton: {
        borderTop: 'none'
    },
    isActive: {
        backgroundColor: config.styles.colors.primary,
        color: 'white',
        ':hover': {
            // backgroundColor: `lighten(${config.styles.colors.primary}, 10%)`
        }
    }
});

export default ({sorts, chosenSort, setChosenSort}: ISidebarProps): ReactElement => (
    <aside>
        <div className={css(styles.buttonContainer)}>
            {
                sorts.map(
                    ({name, icon, type}, key) => (
                        <button
                            key={key}
                            className={
                                css(
                                    styles.button,
                                    (chosenSort === type) && styles.isActive,
                                    key === 0 && styles.firstButton
                                )
                            }
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
