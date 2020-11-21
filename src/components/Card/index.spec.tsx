import React from 'react';

import Card, {ICardProps} from ".";
import {hotels} from "../../models";

const defaultProps: ICardProps = {
    hotel: hotels[0]
}

test('it should render with sorts',
    () =>
        expect(
            <Card
                {...defaultProps}
            />
        )
            .toMatchSnapshot('default')
);

