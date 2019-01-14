import React from 'react';

import ReactDOM from 'react-dom';
import Brand from './Brand';

it('calls fonction on click', () => {
    const handleClick = jest.fn();
    const container = document.createElement('div');
    const brand =
    {
        'id': 1,
        'name': 'test1',
        'src': 'test'
    }

    ReactDOM.render(<Brand data={brand} click={handleClick} />, container);

    const button = container.querySelector('button');
   
    button.dispatchEvent(new Event('click'));


    expect(handleClick).toHaveBeenCalledTimes(1);
})