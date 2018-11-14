
-- CREATE USERS TABLE

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR (50) NOT NULL,
    lastname VARCHAR (50) NOT NULL,
    othername VARCHAR (50) NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    username VARCHAR (50) NOT NULL,
    password VARCHAR (50) NOT NULL,
    registered_at VARCHAR (55) NOT NULL,
    is_admin BOOLEAN NOT NULL
);


