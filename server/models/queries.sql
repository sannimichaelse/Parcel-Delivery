
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

-- CREATE PARCEL TABLE

CREATE TABLE parcels
(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR (50) NOT NULL,
    parcel VARCHAR (50) NOT NULL,
    weight VARCHAR (50) NOT NULL,
    weightMetric VARCHAR (50) UNIQUE NOT NULL,
    sent_on VARCHAR (50) NOT NULL,
    delivered_on VARCHAR (50) NOT NULL,
    status VARCHAR (55) NOT NULL,
    location VARCHAR (50) NOT NULL,
    destination VARCHAR (55) NOT NULL
);
