import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bhldmehukfnxlrglppwd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJobGRtZWh1a2ZueGxyZ2xwcHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NTAxOTgsImV4cCI6MjA1ODIyNjE5OH0.FZFy1o2icQsV0irhkelz8Fnp9zhMrrDwa8WcuA7J3A0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
