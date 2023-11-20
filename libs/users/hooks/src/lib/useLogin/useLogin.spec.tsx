import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useLogin from './useLogin';

describe('useLogin', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLogin());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
