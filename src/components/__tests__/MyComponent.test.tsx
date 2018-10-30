import React from 'react';
import { render } from 'react-testing-library';
import { MyComponent } from '../MyComponent';

test('<MyComponent>', () => {
  const { getByTestId } = render(<MyComponent />);
  const p = getByTestId('paragraph');
  expect(p).toBeDefined();
  expect(p.textContent).toMatch(/^Lorem ipsum dolor/);
});
