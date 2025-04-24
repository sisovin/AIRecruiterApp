import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const createUser = (email: string, password: string, name: string, avatarUrl?: string): User => {
  const now = new Date();
  return {
    id: uuidv4(),
    email,
    password,
    name,
    avatarUrl,
    createdAt: now,
    updatedAt: now,
  };
};

export const updateUser = (user: User, updates: Partial<User>): User => {
  return {
    ...user,
    ...updates,
    updatedAt: new Date(),
  };
};
