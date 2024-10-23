import { TypeAuth, User } from "./type";

// Purpose: Simulates a user data.
export const users: User[] = [
  {
    id: 1,
    username: 'user1',
    password: 'user1',
    typeAuth: TypeAuth.JWT,
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
    typeAuth: TypeAuth.JWT,
  },
  {
    id: 3,
    username: 'exampleuser',
    password: 'examplepassword',
    typeAuth: TypeAuth.JWT,
  }, 
];