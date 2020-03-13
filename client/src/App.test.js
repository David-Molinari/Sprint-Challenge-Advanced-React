import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('renders displaying Womens World Cup 2019', () => {
  const { getByText }= render(<App />);
  const headerElement = getByText(/Women's World Cup 2019/i);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toBeVisible();
});