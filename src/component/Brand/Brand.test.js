import React from 'react';

import { create } from 'react-test-renderer';

import Brand from './Brand';

import {render, fireEvent, cleanup} from 'react-testing-library'


describe('<Brand />', () => {

  afterEach(cleanup);

  it('snapshot', () => {
    const component = create(
      <Brand data={[]} />,
    );
    let brand = component.toJSON();
    expect(brand).toMatchSnapshot();
  });

  it('calls fonction on click', () => {
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

})