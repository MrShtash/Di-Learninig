-- EX 1 --
-- Get a list of all film languages.
-- select language_id, name from language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- select
-- film.title,
-- film.description,
-- language.name
-- from film
-- join language on film.language_id = language.language_id;

-- Try your query with different joins: *****
-- 1. Get all films, even if they don’t have languages.
-- already done, coz in film table all films have id = 1 = English

-- 2. Get all languages, even if there are no films in those languages.
-- already done, coz in film table all films have id = 1 = English

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- create table new_film (
-- n_film_id serial primary key,
-- n_title varchar (50)
-- );

-- insert into new_film (n_title) values
-- ('Schindlers List'),
-- ('Star wars'),
-- ('Lock, Stock and Two Smoking Barrels');

-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- create table customer_review values (
-- review_id serial not null,
-- film_id int,
-- language_id int,
-- title varchar (50),
-- score int,
-- review_text text,
-- "last_update" timestamp not null default CURRENT_TIMESTAMP,
-- constraint fk_n_film_id
-- foreign key (film_id)
-- 	references new_film (n_film_id)
-- 	on delete cascade,
-- foreign key (language_id)
-- 	references language(language_id)
-- );

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- insert into customer_review (film_id, language_id, title, score, review_text) values
-- (1, 2, 'Star wars', 1, 'great film for kids, like says Chewbakka URURURURU)');
-- insert into customer_review (film_id, language_id, title, score, review_text) values
-- (3, 3, 'Lock, Stock and Two Smoking Barrels', 2, 'have fun)');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- delete from new_film where n_film_id = 3;
-- film 'Lock, Stock and Two Smoking Barrels' with id = 3 deleted from 2 tables

-- EX2 --
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- update film set language_id = 5 where film_id = 5 or film_id = 10;
-- now 2 film have another language (not English lang)

-- Which foreign keys (references) are defined for the customer table?
-- How does this affect the way in which we INSERT into the customer table?
-- address_id and store_id are fkeys. We need make sure, that address_id and store_id exist before we insert new customer. Freys i find in constrains and indexes in customer table

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- drop table customer_review;
-- there is no difficults

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- select count (*) rental_id from rental where return_date is null;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- select 
-- film.title,
-- film.replacement_cost
-- from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on inventory.inventory_id = rental.inventory_id
-- where return_date is null
-- order by film.replacement_cost desc
-- limit 30;

-- or

-- select 
-- film.title,
-- film.rental_rate
-- from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on inventory.inventory_id = rental.inventory_id
-- where return_date is null
-- order by film.rental_rate desc
-- limit 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- select first_name, last_name from actor where first_name = 'Penelope' and last_name = 'Monroe';
-- select
-- film.title, film.description
-- from film
-- join film_actor on film.film_id = film_actor.film_id
-- join actor on film_actor.actor_id = actor.actor_id
-- where first_name = 'Penelope' and last_name = 'Monroe' and film.description ilike '%Sumo%';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- select title, description, length, rating from film where description ilike '%documentary%' and length < 60 and rating = 'R';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- select customer_id, first_name, last_name from customer where first_name = 'Matthew' and last_name = 'Mahan';
-- select * from rental where customer_id = 323;

-- select * from film 
-- inner join inventory on inventory.film_id = film.film_id
-- inner join rental on inventory.inventory_id = rental.inventory_id 
-- inner join customer on rental.customer_id = customer.customer_id 
-- where customer.customer_id = 323 and film.rental_rate > 4 and rental.return_date between '2005-07-28' and '2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- select * from film 
-- inner join inventory on inventory.film_id = film.film_id
-- inner join rental on inventory.inventory_id = rental.inventory_id 
-- inner join customer on rental.customer_id = customer.customer_id 
-- where customer.customer_id = 323 and film.description ilike '%Boat%' and film.replacement_cost > 18;
































