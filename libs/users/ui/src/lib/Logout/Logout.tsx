import { signOut } from 'next-auth/react';

/* eslint-disable-next-line */
export interface LogoutProps {
  label: string;
}

export function Logout(props: LogoutProps) {
  const { label } = props;
  return <button type="button" onClick={() => signOut()}>{label}</button>;
}

export default Logout;
