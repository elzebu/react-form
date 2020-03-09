import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import axios from 'axios'


describe('<App />', () => {


  it('calls api on render', () => {
    const getSpy = jest.spyOn(axios, 'get')
    render(<App />)
    expect(getSpy).toHaveBeenCalled()
  })

})

