import { v4 as uuidv4 } from 'uuid';

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  createdAt: Date;
  updatedAt: Date;
}

export const createJob = (title: string, description: string, company: string, location: string, salary: number): Job => {
  const now = new Date();
  return {
    id: uuidv4(),
    title,
    description,
    company,
    location,
    salary,
    createdAt: now,
    updatedAt: now,
  };
};

export const updateJob = (job: Job, updates: Partial<Job>): Job => {
  return {
    ...job,
    ...updates,
    updatedAt: new Date(),
  };
};
