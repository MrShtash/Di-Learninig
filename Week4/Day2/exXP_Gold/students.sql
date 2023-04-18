-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.
-- update students set birth_date = '11.02.1998' where id = 1 or id = 3;

-- Change the last_name of David from ‘Grez’ to ‘Guez’.
-- update students set l_name = 'Guez' where l_name = 'Grez';

-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.
-- delete from students where f_name = 'Lea';

-- Count
-- Count how many students are in the table.
-- select count(*) from students;
-- Count how many students were born after 1/01/2000.
-- select count (*) from students where birth_date > '01.01.2000';

-- Insert / Alter
-- Add a column to the student table called math_grade.
-- alter table students add column math_grade int;

-- Add 80 to the student which id is 1.
-- insert into math_grade values (80) where id = 1; 
-- insert into students (math_grade) values ('80') where id = 1;
-- update students set math_grade = 80 where id = 1;

-- Add 90 to the students which have ids of 2 or 4.
-- update students set math_grade = 90 where id in (2,4);

-- Add 40 to the student which id is 6.
-- update students set math_grade = 40 where id = 6;

-- Count how many students have a grade bigger than 83
-- select count(*) from students where math_grade > 83;

-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.


-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.


-- Bonus: Count how many grades each student has.


-- Tip: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.


-- Tip : Use an alias called total_grade to fetch the grades.


-- Hint : Use GROUP BY.


-- SUM


-- Find the sum of all the students grades.


