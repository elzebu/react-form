import React from 'react'
import { create } from 'react-test-renderer'

import Brands from './Brands'


describe('<Brands />', () => {
    
    it('matches previous snapshot', () => {
        const component = create(
            <Brands brands={[]} click={() => {}} />,
        )
        let brand = component.toJSON()
        expect(brand).toMatchSnapshot()
    })

})

