import React from 'react';
import {mount, render} from 'enzyme';

import App from '.';

describe('App', () => {
    test('it should render',
        () =>
            expect(
                render(
                    <App/>
                )
            )
                .toMatchSnapshot('default')
    );

    test('when different sorts are clicked, it should rearrange the hotels',
        () => {
            const element = mount(
                <App/>
            );

            element
                .find('button[name^="btn-sort"]')
                .forEach((btn, key) => {
                    btn
                        .simulate('click')

                    expect(
                        element.render()
                    ).toMatchSnapshot(`sorting: ${key}`);
                })
            ;
        }
    );

})

