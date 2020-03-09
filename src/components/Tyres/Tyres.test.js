import React from 'react'
import { create } from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import Tyres from './Tyres'


describe('<Tyres />', () => {


    it('matches previous snapshot', () => {

        const component = create(
            <Tyres tyres={[]} brands={[]} />,
        )
        let brand = component.toJSON()
        expect(brand).toMatchSnapshot()
    })

    it('display all tyres on init', () => {
        const tyres = [{
            id: 1,
            name: 'tyre 1',
            description: 'description',
            brandId: 1
        }, {
            id: 2,
            name: 'tyre 1',
            description: 'description',
            brandId: 1
        }]

        const brands = [{
            id: 1,
            name: 'test brand',
            src: 'src'
        }]

        const { container } = render(<Tyres tyres={tyres} brands={brands} />)

        const tyreList = container.querySelectorAll('.tyre')

        expect(tyreList.length).toBe(tyres.length)
    })

    it('filter list on input change', () => {
        // Arrange
        const tyres = [{
            id: 1,
            name: 'tyre 1',
            description: 'description',
            brandId: 1
        }, {
            id: 2,
            name: 'tyre 2',
            description: 'description',
            brandId: 1
        }]
        const brands = [{
            id: 1,
            name: 'test brand',
            src: 'src'
        }]
        const { container } = render(<Tyres tyres={tyres} brands={brands} />)
        const input = container.querySelector('input')
       
        // act
        fireEvent.change(input, { target: { value: 'tyre 1' } })

        // assert
        const tyreList = container.querySelectorAll('.tyre')
        expect(tyreList.length).toBe(1)
    })

})

