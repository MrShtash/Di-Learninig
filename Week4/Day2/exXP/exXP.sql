-- create table items (
-- id serial primary key,
-- size varchar(20),
-- price float
-- )

-- insert into items (size, price) values
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);


-- create table customers (
-- id serial primary key,
-- f_name varchar(20),
-- l_name varchar(20)
-- );

-- insert into customers (f_name, l_name) values
-- ('Greg', 'Jones'),
-- ('Sandra', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- select * from items, customers;
-- select * from items;
-- select * from customers;

-- select size from items;
-- select size from items where price > 80; 
-- select * from items where price < 300;

-- select * from customers where l_name = 'Smith';
-- select * from customers where l_name = 'Jones';
-- select * from customers where f_name != 'Scott';

-- EXERCISE XP DAY2
-- All items, ordered by price (lowest to highest).
-- select * from items ORDER BY price asc;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- select * from items ORDER BY price desc;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- select f_name, l_name from customers ORDER BY f_name ASC limit 3; 

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- select l_name from customers ORDER BY l_name desc;


