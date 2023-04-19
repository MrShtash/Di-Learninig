-- PT1
-- create table customer (
-- customer_id serial,
-- first_name varchar (30),
-- last_name varchar (30) not null,
-- primary key(customer_id)
-- );

-- create table customer_profile (
-- pk_customer_id,  int not null,
-- id serial not null,
-- isLoggedIn boolean default false,
-- primary key (pk_customer_id),
-- constraint fk_customer_id foreign key (pk_customer_id) references customer(customer_id)
-- );

-- insert into customer (first_name, last_name) values
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- insert into customer_profile (pk_customer_id, isLoggedIn) values
-- ((select customer_id from customer where first_name = 'John'), true);
-- insert into customer_profile (pk_customer_id, isLoggedIn) values
-- ((select customer_id from customer where first_name = 'Jerome'), false);

-- The first_name of the LoggedIn customers
-- select first_name
-- from customer
-- join customer_profile
-- on customer.customer_id = customer_profile.pk_customer_id where isLoggedIn = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- select customer.first_name,
-- customer_profile.isLoggedIn
-- from customer
-- full outer join customer_profile
-- on customer.customer_id = customer_profile.pk_customer_id;

-- The number of customers that are not LoggedIn
-- select count (*) customer
-- from customer
-- join customer_profile
-- on customer.customer_id = customer_profile.pk_customer_id where isLoggedIn = false;

-- PT 2
-- create table book (
-- book_id serial primary key,
-- title text not null,
-- author varchar (50) not null
-- );

-- insert into book (title, author) values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- create table student (
-- student_id serial primary key,
-- name varchar (30) unique not null,
-- age int check (age between 0 and 15)
-- );

-- insert into student (name, age) values
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- create table library (
-- book_fk_id int,
-- student_fk_id int,
-- borrowed_date date,
-- foreign key (book_fk_id) references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- foreign key (student_fk_id) references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- primary key (book_fk_id, student_fk_id)
-- );

-- insert into library (book_fk_id, student_fk_id, borrowed_date) values
-- (
-- (select book_id from book where title = 'Alice In Wonderland'),
-- (select student_id from student where name = 'John'),
-- '2022-02-15'
-- );

-- insert into library (book_fk_id, student_fk_id, borrowed_date) values
-- (
-- (select book_id from book where title = 'To kill a mockingbird'),
-- (select student_id from student where name = 'Bob'),
-- '2022-03-03'
-- ),
-- (
-- (select book_id from book where title = 'Alice In Wonderland'),
-- (select student_id from student where name = 'Lera'),
-- '2021-05-23'
-- ),
-- (
-- (select book_id from book where title = 'Harry Potter'),
-- (select student_id from student where name = 'Bob'),
-- '2021-08-12'
-- );

-- select * from library;

-- select 
-- student.name,
-- book.title
-- from library
-- join student on library.student_fk_id = student.student_id
-- join book on library.book_fk_id = book.book_id;

-- select avg(student.age) from student 
-- join library on library.student_fk_id = student.student_id
-- join book on library.book_fk_id = book.book_id
-- where book.title = 'Alice In Wonderland';

-- delete from student where student_id = 3;




















































