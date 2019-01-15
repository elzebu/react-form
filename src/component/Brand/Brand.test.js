import React from 'react';

import Brand from './Brand';

import {render, fireEvent, cleanup} from 'react-testing-library'

afterEach(cleanup);

test('calls fonction on click', () => {
    const handleClick = jest.fn();

    const brand =
    {
        'id': 1,
        'name': 'test1',
        'src': 'test'
    }

    const {container} = render(<Brand data={brand} click={handleClick} />);

    const title = container.querySelector('h3');

    fireEvent.click(title);
    expect(handleClick).toHaveBeenCalled();
})