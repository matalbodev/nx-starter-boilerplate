import { render } from '@testing-library/react';
import Logout from './Logout';

describe('Logout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logout label="logout" />);
    expect(baseElement).toBeTruthy();
  });
});
