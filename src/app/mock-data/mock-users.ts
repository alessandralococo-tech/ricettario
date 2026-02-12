import { User } from '../models/user-model';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Mario Rossi',
    email: 'mario@test.it',
    password: '123', // Password semplice per testare
    favorites: ['52982', '52820'] // Ha già la Carbonara e il Katsu tra i preferiti
  },
  {
    id: 'u2',
    name: 'Luigi Verdi',
    email: 'luigi@test.it',
    password: 'abc',
    favorites: []
  }
];