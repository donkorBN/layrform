-- Create the forms table
create table forms (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  title text not null,
  description text,
  status text default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table forms enable row level security;

-- Create Policy: Users can only see their own forms
create policy "Users can view own forms"
  on forms for select
  using ( auth.uid() = user_id );

-- Create Policy: Users can insert their own forms
create policy "Users can insert own forms"
  on forms for insert
  with check ( auth.uid() = user_id );

-- Create Policy: Users can update their own forms
create policy "Users can update own forms"
  on forms for update
  using ( auth.uid() = user_id );

-- Create Policy: Users can delete their own forms
create policy "Users can delete own forms"
  on forms for delete
  using ( auth.uid() = user_id );
