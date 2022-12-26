CREATE TABLE IF NOT EXISTS mentee
(
    id          SERIAL PRIMARY KEY,
    name        varchar(255) NOT NULL,
    email       varchar(255) NOT NULL,
    CONSTRAINT unique_mentee_email UNIQUE (email)
);