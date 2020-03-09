import React from 'react'
import { create } from 'react-test-renderer'
import {render, fireEvent} from '@testing-library/react'

import Brand from './Brand'

describe('<Brand />', () => {

    it('match previous snapshot', () => {
        const component = create(
            <Brand data={{ src: 'toto', 'name': 'test' }} />,
        )
        let brand = component.toJSON()
        expect(brand).toMatchSnapshot()
    })

    it('display brand name in title ', () => {
        const brand = {
            'id': 1,
            'name': 'test1',
            'src': 'test'
        }
        const { container } = render(<Brand data={brand} />)

        const title = container.querySelector('h3')

        expect(title.innerHTML).toContain(brand.name)
    })

    it('calls fonction on click', () => {
        const handleClick = jest.fn()
        const brand = {
            'id': 1,
            'name': 'test1',
            'src': 'test'
        }
        const { container } = render(<Brand data={brand} click={handleClick} />)

        const btn = container.querySelector('button')
        fireEvent.click(btn)

        expect(handleClick).toHaveBeenCalled()
    })
})