import { render } from '@testing-library/react';
import UsersList from './UsersList';

describe('UsersListTsx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsersList />);
    expect(baseElement).toBeTruthy();
  });
});
