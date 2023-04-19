-- create table items(
-- id serial primary key,
-- name varchar (50) not null unique,
-- price int not null
-- );

-- create table product_orders (
-- id serial primary key,
-- quantity int not null,
-- "date" timestamp not null default CURRENT_TIMESTAMP,
-- product_id int references items (id) on delete no action
-- );

-- insert into items (name, price) values
-- ('TV', 50),
-- ('Duck', 44),
-- ('Radio', 22);

-- insert into product_orders (quantity, product_id) values
-- (1, (select id from items where name = 'TV')),
-- (5, (select id from items where name = 'Duck')),
-- (2, (select id from items where name = 'Radio'));

-- select sum(quantity*price) from product_orders
-- join items
-- on product_orders.product_id = items.id;

-- insert into product_orders (quantity, product_id) values
-- (3, (select id from items where name = 'TV'));

-- select name, quantity, price from product_orders
-- join items
-- on product_orders.product_id = items.id;

-- select name, quantity, price from product_orders
-- join items
-- on product_orders.product_id = items.id
-- where product_orders.id = 1;

-- create or replace function order_price (order_id int)
-- returns int as $$
-- 	declare 
-- 		total_sum int;		
-- 	begin
-- 		total_sum := (select sum (quantity * price) from product_orders
-- 			join items
-- 			on product_orders.product_id = items.id
-- 			where product_orders.id = order_id);
-- 		return total_sum;
-- 	end;
-- $$ language plpgsql;

-- select * from order_price (1);
-- select * from order_price (2);
-- select * from order_price (3);


-- BONUS
-- create table users (
-- user_id serial primary key,
-- items_id int,
-- product_orders_id int,
-- first_name varchar (20),
-- last_name varchar (20),
-- primary key (user_id, product_orders_id),
-- constraint fk_product_orders foreign key (product_orders_id) references product_orders(id)
-- );

-- create total_price (total_id int)
-- returns int as $$
-- 	declare 
-- 		total_pr int;		
-- 	begin
-- 		total_pr := (select sum (quantity * price) from product_orders
-- 			join items
-- 			on product_orders.product_id = items.id
-- 			where product_orders.id = order_id);
-- 		return total_pr;
-- 	end;
-- $$ language plpgsql;

-- select * from order_price (1);









































