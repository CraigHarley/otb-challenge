import React from 'react';
import {mount, render} from 'enzyme';

import Sidebar from '.';
import {SortTypes} from '../../types/enums';
import {sorts} from '../../models';

const defaultProps = {
    setChosenSort: () => ({}),
    chosenSort: SortTypes.STARS,
    sorts
}

describe('Sidebar', () => {
    test('it should render with sorts',
        () =>
            expect(
                render(
                    <Sidebar
                        {...defaultProps}
                    />
                )
            )
                .toMatchSnapshot('default')
    );

    test('it should render without sorts',
        () =>
            expect(
                render(
                    <Sidebar
                        {
                            ...{
                                ...defaultProps,
                                sorts: []
                            }
                        }
                    />
                )
            )
                .toMatchSnapshot('default')
    );

    test('when a button is clicked, it should call setChosenSort',
        () => {
            const setChosenSort = jest.fn();
            const element = mount(
                <Sidebar
                    {
                        ...{
                            ...defaultProps,
                            setChosenSort
                        }
                    }
                />
            );

            element.find('button').first().simulate('click');
            expect(setChosenSort).toHaveBeenCalled();
        }
    );
})
