import React from 'react';
import App from './App';
import { render, waitForElement, fireEvent } from 'react-testing-library'
import axios from 'axios';
import { StateMock } from '@react-mock/state';

jest.mock('axios');

it('calls api on render', () => {

  const getSpy = jest.spyOn(axios, 'get');

  render(<App />);

  expect(getSpy).toHaveBeenCalled();
});

it('renders initial state', async () => {
  const renderComponent = ({ brands, tyres, error, errorBrandDelete }) =>
    render(
      <StateMock state={{ brands, tyres, error, errorBrandDelete }}>
        <App />
      </StateMock>
    );

  const { getByText } = renderComponent({ brands: [{ id: 0, name: 'test brand', src: '' }], tyres: [], error: false, errorBrandDelete: false });

  await waitForElement(() => getByText(/test brand/i));
})

it('update state on click on brand', async () => {
  const renderComponent = ({ brands, tyres, error, errorBrandDelete }) =>
    render(
      <StateMock state={{ brands, tyres, error, errorBrandDelete }}>
        <App />
      </StateMock>
    );

  const getSpy = jest.spyOn(axios, 'get');

  const { container } = renderComponent({ brands: [{ id: 0, name: 'test', src: '' }], tyres: [], error: false, errorBrandDelete: false });

  const title = container.querySelector('h3');
  fireEvent.click(title);

  expect(getSpy).toHaveBeenCalled();
})