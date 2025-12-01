-- Add fields column to forms table
alter table forms 
add column fields jsonb default '[]'::jsonb;
