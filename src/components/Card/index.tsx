import React, {ReactElement, useState} from 'react';
import {format} from 'date-fns';
import {css, StyleSheet} from 'aphrodite';

import config from '../../config'
import {IHotel, IListable} from '../../types';
import OccupancyMessage from './OccupancyMessage';
import CallToAction from "./CallToAction";
import ReadMoreButton from "./ReadMoreButton";
import ReadMoreContent from "./ReadMoreContent";

export interface ICardProps extends IListable {
    hotel: IHotel;
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        margin: '2rem 2rem 0 2rem',
        width: '780px',
        height: '300px',
        backgroundColor: 'whitesmoke',
        display: 'flex',
    },
    img: {
       // todo don't like this.
       minWidth: '500px',
       maxWidth: '500px'
    },
    contentContainer: {
        margin: '1rem',
        color: config.styles.colors.primary,
        width: '100%',
        position: 'relative'
    },
    h1: {
        fontWeight: 'normal',
        fontSize: '1rem'
    },
    h2: {
        fontWeight: 'lighter',
        fontSize: '0.8rem'
    },
    starIcon: {
        color: config.styles.colors.secondary
    },
    ul: {
        listStyle: 'none',
        paddingLeft: '0',
        fontWeight: 'lighter',
        fontSize: '0.8rem',
        color: 'black',
    }
});

export default ({
                    hotel: {
                        image,
                        name,
                        region,
                        adults,
                        children,
                        infants,
                        price,
                        stars,
                        date
                    }
                }: ICardProps): ReactElement => {

    const [isShowingMoreInfo, setIsShowingMoreInfo] = useState(false);

    return (
        <section>
            <div className={css(styles.card)}>
                <img
                    className={css(styles.img)}
                    src={`${config.ASSET_URL}${image}`}
                    alt="Image of the hotel"
                />
                <div className={css(styles.contentContainer)}>
                    <h1>{name}</h1>
                    <h2 className={css(styles.h2)}>{region}</h2>
                    <div>
                        {
                            new Array(stars)
                                .fill('')
                                .map((_, key) => <i key={key} className={css(styles.starIcon) + ' fas fa-star'}/>)
                        }
                    </div>

                    <ul className={css(styles.ul)}>
                        <li>
                            <OccupancyMessage
                                adults={adults}
                                children={children}
                                infants={infants}
                            />
                        </li>
                        <li><strong>{format(date, 'do MMMM yyyy')}</strong> for <strong>7 days</strong></li>
                        <li>departing from <strong>East Midlands</strong></li>
                    </ul>

                    <CallToAction price={price}/>
                </div>
                <ReadMoreButton
                    setIsShowingMoreInfo={setIsShowingMoreInfo}
                    isShowingMoreInfo={isShowingMoreInfo}
                />
            </div>
            <ReadMoreContent isShowingMoreInfo={isShowingMoreInfo}/>
        </section>

    );
};
