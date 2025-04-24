import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/constants';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const fetchUserById = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) throw error;
  return data;
};

export const fetchJobs = async () => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*');
  if (error) throw error;
  return data;
};

export const createJob = async (job: any) => {
  const { data, error } = await supabase
    .from('jobs')
    .insert([job]);
  if (error) throw error;
  return data;
};

export const updateJob = async (jobId: string, updates: any) => {
  const { data, error } = await supabase
    .from('jobs')
    .update(updates)
    .eq('id', jobId);
  if (error) throw error;
  return data;
};

export const deleteJob = async (jobId: string) => {
  const { data, error } = await supabase
    .from('jobs')
    .delete()
    .eq('id', jobId);
  if (error) throw error;
  return data;
};
