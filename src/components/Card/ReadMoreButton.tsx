import React, {ReactElement} from 'react';
import {css, StyleSheet} from "aphrodite";

import config from "../../config";

const styles = StyleSheet.create({
    readMore: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        backgroundColor: 'whitesmoke',
        color: config.styles.colors.primary,
        padding: '0.5rem 1rem',
        fontSize: 'small',
        cursor: 'pointer',
        border: 'none',
        ':hover': {
            color: config.styles.colors.primary,
            backgroundColor: config.styles.colors.secondary
        }
    }
});

export interface IReadMoreButtonProps {
    setIsShowingMoreInfo: Function;
    isShowingMoreInfo: boolean;
}

const ReadMoreButton = ({setIsShowingMoreInfo, isShowingMoreInfo}: IReadMoreButtonProps): ReactElement => (
    <button
        id='btn-read-more'
        className={css(styles.readMore)}
        onClick={() => setIsShowingMoreInfo(!isShowingMoreInfo)}
    >
        <strong>Read more</strong> about this hotel &nbsp;
        {
            isShowingMoreInfo ?
                <i className="fas fa-angle-down"/> :
                <i className="fas fa-angle-right"/>
        }
    </button>
)

export default ReadMoreButton;
