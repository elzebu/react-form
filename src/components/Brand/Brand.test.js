import React from 'react'
import { create } from 'react-test-renderer'

import Brand from './Brand'

it('match previous snapshot', () => {
    const component = create(
        <Brand data={{src:'toto', 'name': 'test'}} />,
    )
    let brand = component.toJSON()
    expect(brand).toMatchSnapshot()
})
