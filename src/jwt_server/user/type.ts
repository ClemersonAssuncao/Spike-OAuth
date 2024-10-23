export enum TypeAuth {
  JWT = 'JWT',
  OAUTH = 'OAUTH',
}

export interface User {
  id: number;
  username: string;
  password: string;
  typeAuth: TypeAuth;
}
