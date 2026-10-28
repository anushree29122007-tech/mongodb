# Auto detect text files and perform LF normalization
* text=auto
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50),
    location VARCHAR(50)
);

INSERT INTO departments VALUES
(101, 'IT', 'Chennai'),
(102, 'HR', 'Bangalore'),
(103, 'Finance', 'Hyderabad'),
(104, 'Marketing', 'Pune');

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);

INSERT INTO employees VALUES
(1, 'Mohan', 24, 'Male', 35000, 101),
(2, 'Priya', 26, 'Female', 45000, 102),
(3, 'Rahul', 30, 'Male', 60000, 103),
(4, 'Anitha', 28, 'Female', 52000, 101),
(5, 'Karthik', 32, 'Male', 70000, 103),
(6, 'Divya', 27, 'Female', 48000, 104),
(7, 'Arun', 25, 'Male', 40000, 101),
(8, 'Sneha', 29, 'Female', 55000, 104);

-- BASIC SELECT
SELECT * FROM employees;
SELECT employee_name, salary FROM employees;
SELECT DISTINCT department_id FROM employees;

-- WHERE
SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM employees WHERE age < 28;
SELECT * FROM employees WHERE gender = 'Female';

-- AND / OR
SELECT * FROM employees
WHERE salary > 45000 AND age < 30;

SELECT * FROM employees
WHERE department_id = 101 OR department_id = 103;

-- ORDER BY
SELECT * FROM employees ORDER BY salary DESC;
SELECT * FROM employees ORDER BY age ASC;

-- LIMIT
SELECT * FROM employees LIMIT 3;

-- LIKE
SELECT * FROM employees WHERE employee_name LIKE 'A%';
SELECT * FROM employees WHERE employee_name LIKE '%a';
SELECT * FROM employees WHERE employee_name LIKE '%ha%';

-- BETWEEN
SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 60000;

-- IN
SELECT * FROM employees
WHERE department_id IN (101, 104);

-- AGGREGATE FUNCTIONS
SELECT COUNT(*) AS total_employees FROM employees;
SELECT AVG(salary) AS average_salary FROM employees;
SELECT MAX(salary) AS highest_salary FROM employees;
SELECT MIN(salary) AS lowest_salary FROM employees;
SELECT SUM(salary) AS total_salary FROM employees;

-- GROUP BY
SELECT department_id, COUNT(*) AS total_employees
FROM employees
GROUP BY department_id;

SELECT department_id, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;

-- HAVING
SELECT department_id, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;

-- INNER JOIN
SELECT e.employee_name,
       d.department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;

-- JOIN WITH LOCATION
SELECT e.employee_name,
       e.salary,
       d.department_name,
       d.location
FROM employees e
JOIN departments d
ON e.department_id = d.department_id;

-- EMPLOYEES IN CHENNAI
SELECT e.employee_name,
       d.location
FROM employees e
JOIN departments d
ON e.department_id = d.department_id
WHERE d.location = 'Chennai';

-- HIGHEST PAID EMPLOYEE
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 1;

-- SECOND HIGHEST SALARY
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- UPDATE
UPDATE employees
SET salary = 65000
WHERE employee_id = 3;

-- DELETE
DELETE FROM employees
WHERE employee_id = 7;

-- VERIFY
SELECT * FROM employees;
