DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  thumbnail_photo VARCHAR(255) NOT NULL,
  description TEXT,
  opening_hours VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  address TEXT
);
