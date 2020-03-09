import React from 'react'
import { create } from 'react-test-renderer'
import { render } from '@testing-library/react'

import Tyre from './Tyre'


describe('<Tyre />', () => {

    let data
    beforeEach(() => {
        data = {
            name: 'name',
            description: 'description',
            brand: {
                name: 'brandName',
                src: ''
            }
        }
    })
    
    it('matches previous snapshot', () => {
        
        const component = create(
            <Tyre data={data} />,
        )
        let brand = component.toJSON()
        expect(brand).toMatchSnapshot()
    })

    it('displays tyre name in title ', () => {

        const { container } = render(<Tyre data={data} />)

        const title = container.querySelector('h2')

        expect(title.innerHTML).toContain(data.name)
    })

})

