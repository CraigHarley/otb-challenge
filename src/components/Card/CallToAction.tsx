import React, {ReactElement} from 'react';
import {css, StyleSheet} from "aphrodite";
import config from "../../config";

const styles = StyleSheet.create({
    callToAction: {
        marginTop: '2rem',
        color: config.styles.colors.primary,
        backgroundColor: config.styles.colors.secondary,
        width: '100%',
        height: '4rem',
        border: 'none',
        borderRadius: '0.2rem',
        cursor: 'pointer',
        ':hover': {
            // todo
            // color: 'lighten($primary, 10%)',
            // backgroundColor: 'lighten($secondary, 10%)'
        }
    },
    actionText: {
        fontSize: 'small',
        display: 'block'
    },
    actionAmount: {
        fontWeight: 'bold',
        fontSize: 'medium'
    }
});

export interface ICallToActionProps {
    price: string
}

export default ({price}: ICallToActionProps): ReactElement =>
    <button className={css(styles.callToAction)}>
        <span className={css(styles.actionText)}>
            Book now
        </span>
        <span className={css(styles.actionAmount)}>
            {price}
        </span>
    </button>
