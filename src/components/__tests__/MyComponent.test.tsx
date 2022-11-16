import { render } from '@testing-library/react';
import * as React from 'react';
import { MyComponent } from '../MyComponent';

test('<MyComponent>', () => {
  const { getByTestId } = render(<MyComponent />);
  const p = getByTestId('paragraph');
  expect(p).toBeDefined();
  expect(p.textContent).toMatch(/^Lorem ipsum dolor/);
});
