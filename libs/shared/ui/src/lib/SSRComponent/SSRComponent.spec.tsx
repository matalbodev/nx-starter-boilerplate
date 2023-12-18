import { render } from '@testing-library/react';

import SSRComponent from './SSRComponent';

describe('SSRComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SSRComponent />);
    expect(baseElement).toBeTruthy();
  });
});
