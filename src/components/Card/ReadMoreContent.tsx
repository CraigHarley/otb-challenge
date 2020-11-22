import React, {ReactElement} from 'react';
import {css, StyleSheet} from "aphrodite";

import config from "../../config";

const styles = StyleSheet.create({
    readMoreContent: {
        backgroundColor: 'whitesmoke',
        width: '780px',
        margin: '0 2rem 2rem 2rem',
        padding: '1rem',
        transition: 'transform 0.3s ease-out',
        transform: 'scaleY(1)',
        transformOrigin: 'top',
    },
    h3: {
        fontSize: 'small',
        color: config.styles.colors.primary
    },
    p: {
        fontSize: 'small',
        fontWeight: 'lighter',
        lineHeight: '1.2rem'
    },
    isHidden: {
        transform: 'scaleY(0)',
        height: 0,
        overflow: 'hidden'
    }
});

export interface IReadMoreContentProps {
    isShowingMoreInfo: boolean;
}

export default ({isShowingMoreInfo}: IReadMoreContentProps): ReactElement => (
    <div className={css(styles.readMoreContent, !isShowingMoreInfo && styles.isHidden)}>
        <h3 className={css(styles.h3)}>Overview</h3>
        <p className={css(styles.p)}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
)
