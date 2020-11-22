import React from 'react';
import {render} from 'enzyme';

import OccupancyMessage, {IOccupancyMessageProps} from './OccupancyMessage';

describe('OccupancyMessage', () => {
    test('should function correctly for all the valid occupancy types',
        () => {
            const occupancies: IOccupancyMessageProps[] = [
                {
                    adults: 2,
                    children: 2,
                    infants: 2
                },
                {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                {
                    adults: 1,
                    children: 1,
                    infants: 1
                },
                {
                    adults: 2,
                    children: 1,
                    infants: 0
                },
                {
                    adults: 2,
                    children: 1,
                    infants: 0
                },
                {
                    adults: 2,
                    children: 0,
                    infants: 0
                },
            ];

            occupancies
                .forEach((rule, key) =>
                    expect(
                        render(
                            <OccupancyMessage
                                {...rule}
                            />
                        )
                    ).toMatchSnapshot(`Occupancy rule: ${key}`)
                );
        }
    );

    it('should throw an exception if there are no adults',
        () =>
            expect(
                () =>
                    render(
                        <OccupancyMessage
                            adults={0}
                            children={2}
                            infants={0}
                        />
                    )
            )
                .toThrowError('Can\'t have a holiday with no adults.')
    )
})
