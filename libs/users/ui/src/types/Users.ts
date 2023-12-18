export enum Role {
  ADMIN,
  USER,
}

export type User = {
  id: number,
  createdAt: string,
  email: string,
  role: Role,
  username: string
}

export type Users = User[]