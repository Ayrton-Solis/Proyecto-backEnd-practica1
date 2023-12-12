create database firstapi;

create table users(
  id serial primary key,
  name varchar(40),
  email text
);

insert into users (name, email) values 
  ('Ayrton', 'Ayrtonsolis018@gmail.com'),
  ('Zoe', 'Zoeperata@gmail.com');