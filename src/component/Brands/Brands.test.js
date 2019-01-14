import React from 'react';

import ReactDOM from 'react-dom';
import Brands from './Brands';


it('render "no item" if list is empty', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Brands tyres={[]} brands={[]} />, container);

    expect(container.innerHTML).toMatch('Aucune marque disponible');
})


it('render items if passed as parameters', () => {
    const container = document.createElement('div');
    const aBrands = [
        {
            'id': 1,
            'name': 'test1',
            'description': 'un description',
            'src': ''
        }
    ]
    ReactDOM.render(<Brands tyres={[]} brands={aBrands} />, container);

    expect(container.innerHTML).toMatch('test1');
})

it('calls fonction on click', () => {
    console.log('calls fonction on click')
    const container = document.createElement('div');
    ReactDOM.render(<Brands brands={[]}  tyres={[]}/>, container);

    const title = container.querySelector('h2');
   
    title.dispatchEvent(new window.Event('click'));

})
