import React from 'react';

import ReactDOM from 'react-dom';
import Brands from './Brands';


describe('<Brands />', () => {

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

})
