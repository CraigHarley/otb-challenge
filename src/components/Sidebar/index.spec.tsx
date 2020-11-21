import React from 'react';
import {mount} from 'enzyme';

import Sidebar from ".";
import {SortTypes} from "../../types/enums";
import {sorts} from "../../models";

const defaultProps = {
    setChosenSort: () => ({}),
    chosenSort: SortTypes.STARS,
    sorts
}

test('it should render with sorts',
    () =>
        expect(
            <Sidebar
                {...defaultProps}
            />
        )
            .toMatchSnapshot('default')
);

test('it should render without sorts',
    () =>
        expect(
            <Sidebar
                {
                    ...{
                        ...defaultProps,
                        sorts: []
                    }
                }
            />
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
