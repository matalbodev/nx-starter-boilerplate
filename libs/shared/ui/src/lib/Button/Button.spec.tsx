import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  const { getByText } = render(
    <Button skin="primary" size="lg">
      This a button
    </Button>
  );
  const button = getByText('This a button');

  it('should render successfully', () => {
    expect(button).toBeDefined();
  });

  it('should contains base class and modifiers', () => {
    expect(button).toHaveClass('button button--primary button--lg', {
      exact: true,
    });
  });
});
