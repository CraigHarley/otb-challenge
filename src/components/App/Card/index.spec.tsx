import React from 'react';
import {mount, render} from 'enzyme';

import Card, {ICardProps} from './index';
import {hotels} from '../../../models';

const defaultProps: ICardProps = {
    hotel: hotels[0]
}

describe('Card', () => {
    test('it should render with sorts',
        () =>
            expect(
                render(
                    <Card
                        {...defaultProps}
                    />
                )
            )
                .toMatchSnapshot('default')
    );

    test('when read more is clicked, it should show more content',
        () => {
            const element = mount(
                <Card
                    {...defaultProps}
                />
            );

            element
                .find('#btn-read-more')
                .first()
                .simulate('click');

            expect(
                element.render()
            ).toMatchSnapshot('with more content');
        }
    );
})

