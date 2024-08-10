import React from 'react';
import { render } from '@testing-library/react';
import { LandingPage } from '../components/pages/Landing';

test('LandingPage Component renders without errors', () => {
  render(<LandingPage />);
});

test('LandingPage Component matches snapshot', () => {
  const { asFragment } = render(<LandingPage />);
  expect(asFragment()).toMatchSnapshot();
});
