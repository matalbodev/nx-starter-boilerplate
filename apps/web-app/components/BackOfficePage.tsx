'use client';

import { Users, UsersList } from "@nx-starter/users/ui";

type BackOfficePageProps = {
  users: {
    data: Users;
    total: number;
  };
};

export default function BackOfficePage(props: BackOfficePageProps) {
  const {
    users: { data: usersList, total },
  } = props;
  return (
    <>
      <h1>Here is list of your {total} users</h1>
      <UsersList users={usersList} />
    </>
  );
}
