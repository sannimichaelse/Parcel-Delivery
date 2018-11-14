
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


-- INSERT INTO TABLE

INSERT INTO 
       users
    (firstname, lastname, othername, email,  , phone_number, image_url,password,salt, oauth_type,oauth_id,address,state_code,city_code,country_code,updated_at,added_at,active,suspended_at)
VALUES
    ('Michael', 'Sanni', 'male', '1996/7/5', 'sannimichaelse@gmail.com', '09090908094', 'jfjtfdd', 'kd4dk3dk', 'dg4dddf', 'signup', '1232', '13,hughes Avenue Sabo', '12ase', 'jdj33', 'j4jdd', '454e34', '34dr34', 'true', 'jjd34');


-- {
--   "firstname":"Sanni",
--   "lastname":"Michael",
--   "gender":"male",
--   "date_of_birth":"07/05/1996",
--   "phone_number":"09090908094",
--   "image_url":"https://web.whatsapp.com/",
--   "password":"tomiwa5259",
--   "oauth_type":"signup",
--   "oauth_id":"223",
--   "state_code":"3333",
--   "city_code":"idfg453",
--   "country_code":"kdk4",
--   "address":"13 Hughes Avenue Sabo Yaba",
--   "email":"sannimichaeltomi@gmail.com",
--   "fullname":"Sanni Michael Tomiwa"
-- }