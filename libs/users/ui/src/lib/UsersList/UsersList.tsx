'use client';
import styles from './UsersList.module.scss';
import type { User, Users } from '../../index';

/* eslint-disable-next-line */
export interface UsersListProps {
  users: Users;
}

export function UsersList(props: UsersListProps) {
  const users = props.users;
  return (
    <div className={styles.container}>
      {users.map((user: User) => (
        <div className={styles.user}>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.createdAt}</span>
          <span>{user.role}</span>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
