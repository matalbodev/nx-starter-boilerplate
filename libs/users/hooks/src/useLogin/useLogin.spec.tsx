import { renderHook } from '@testing-library/react';

import useLogin from './useLogin';

describe('useLogin', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLogin());

    expect(result.current).toBeTruthy();
  });
});
