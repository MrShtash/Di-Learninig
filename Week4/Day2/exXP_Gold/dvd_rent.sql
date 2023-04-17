-- 1
-- In the dvdrental database write a query to select all the columns from the “customer” table.
-- select column_name from information_schema.columns where table_name = 'customer' order by ordinal_position;

-- 2
-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
-- select (first_name, last_name) as full_name from customer;

-- 3
-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
-- select distinct create_date from customer;

-- 4
-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
-- select * from customer order by first_name asc;

-- 5
-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
-- select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;

-- 6
-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
-- select address, phone from address order by district = 'Texas';

-- 7
-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
-- select * from film where film_id = 15 or film_id = 150;

-- 8
-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
-- select film_id, title, description, length, rental_rate from film where title = 'Crazy Home';

-- 9
-- BONUS. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
-- for ex try ti find Star Wars
-- select film_id, title, description, length, rental_rate from film where title similar to 'S% W%';

-- 10
-- Write a query which will find the 10 cheapest movies.
-- select * from film order by rental_rate asc limit 10;

-- 11
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies. Bonus: Try to not use LIMIT.
-- select * from film order by rental_rate asc offset 10;

-- 12
-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
-- select
-- customer.first_name, customer.last_name,
-- payment.amount, payment.payment_date
-- from customer
-- inner join payment on customer.customer_id = payment.customer_id
-- order by payment.customer_id asc;

-- 13
-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
-- select * from film where film.film_id not in (select film_id from inventory); 

-- 14
-- Write a query to find which city is in which country.
-- select
-- city.city,
-- country.country
-- from city
-- join country on city.country_id = country.country_id;

-- 15
-- BONUS. You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
-- select
-- customer.customer_id,
-- customer.first_name,
-- customer.last_name,
-- payment.staff_id,
-- payment.amount,
-- payment.payment_date
-- from 
-- customer
-- join payment on customer.customer_id = payment.customer_id
-- order by payment.staff_id;

--================ XP GOLD ================
-- Find out how many films there are for each rating.
-- select rating, count(rating) from film group by distinct rating;

-- Get a list of all the movies that have a rating of G or PG-13
-- select * from film where rating = 'G' or rating = 'PG-13' order by rating asc;
-- * or *
-- select title, rating from film where rating = 'G' or rating = 'PG-13' order by rating asc;

-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
-- select title, length, rental_rate from film where length < 2 or rental_rate < 3 order by title asc;

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- update customer set first_name = 'Stas', last_name = 'Tuf', email = 'bassketb86@gmail.com' where customer_id = 154;

-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
-- update address set address = 'Beverly Hills', district = 'California' where address_id = 158;


