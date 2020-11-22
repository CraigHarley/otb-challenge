import React, {ReactElement} from 'react';
import {css, StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    readMore: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        backgroundColor: 'whitesmoke',
        color: '$primary',
        padding: '0.5rem 1rem',
        fontSize: 'small',
        cursor: 'pointer',
        border: 'none',
        ':hover': {
            color: 'lighten($primary, 10%)',
            backgroundColor: 'lighten($secondary, 10%)'
        }
    }
});

export interface IReadMoreButtonProps {
    setIsShowingMoreInfo: Function;
    isShowingMoreInfo: boolean;
}

export default ({setIsShowingMoreInfo, isShowingMoreInfo}: IReadMoreButtonProps): ReactElement => (
    <button
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
