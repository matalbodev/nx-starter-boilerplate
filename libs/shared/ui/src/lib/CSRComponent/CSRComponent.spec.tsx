import { render } from '@testing-library/react';

import CSRComponent from './CSRComponent';

describe('CSRComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CSRComponent />);
    expect(baseElement).toBeTruthy();
  });
});
