-- ---------------------------------------------------------------------------
-- Set up storage for avatars.
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.

create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');

create policy "Anyone can update an avatar." on storage.objects
  for update using (bucket_id = 'avatars');

create policy "Anyone can delete an avatar." on storage.objects
  for delete using  (bucket_id = 'avatars');

-- ---------------------------------------------------------------------------
-- Public users (mirrors auth.users)
-- ---------------------------------------------------------------------------

create table users (
  id          uuid not null primary key
);

-- ---------------------------------------------------------------------------
-- Public Profiles Table
-- ---------------------------------------------------------------------------

create table profiles (
  id uuid           references users not null primary key,
  created_at        timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at        timestamp with time zone not null default timezone('utc'::text, now()),
  first_name        text not null,
  last_name         text not null,
  bio               text,
  avatar_url        text,
  website           text,
  social_media      jsonb,
  measurement_unit  text,
  currency          text,

  constraint first_name_length check (char_length(first_name) > 1),
  constraint last_name_length check (char_length(last_name) > 1)
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.

alter table users
  enable row level security;

alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update their own profile." on profiles
  for update using (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- This trigger automatically creates a user and a profile entry whenever user
-- signs up via Supabase Auth.
--
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers
-- for more details.
-- ---------------------------------------------------------------------------

create or replace function public.handle_new_user()
returns trigger as $$
begin

  insert into public.users (
    id
  ) values (
    new.id
  );

  insert into public.profiles (
    id,
    first_name,
    last_name
  ) values (
    new.id,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name'
  );

  return new;
end;

$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
