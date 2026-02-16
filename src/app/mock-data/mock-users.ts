import { User } from '../models/user-model';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Mario Rossi',
    email: 'mario@test.it',
    password: '123',
    favorites: ['52982', '52820'],
    role: 'user'
  },
  {
    id: 'u2',
    name: 'Luigi Verdi',
    email: 'luigi@test.it',
    password: 'abc',
    favorites: [],
    role: 'user'
  },
  {
    id: 'admin1',
    name: 'Capo Cuoco',
    email: 'admin@test.it',
    password: 'admin',
    favorites: [],
    role: 'admin'
  }
];