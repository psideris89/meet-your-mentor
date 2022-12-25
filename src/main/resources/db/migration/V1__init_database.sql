CREATE TABLE IF NOT EXISTS course
(
    id            SERIAL PRIMARY KEY,
    title         varchar(255) NOT NULL,
    display_title varchar(255) NOT NULL,
    type          varchar(255),
    description   text,
    CONSTRAINT unique_course_title UNIQUE (title)
);

CREATE TABLE IF NOT EXISTS mentor
(
    id          SERIAL PRIMARY KEY,
    name        varchar(255) NOT NULL,
    email       varchar(255) NOT NULL,
    description text,
    specialty   text,
    CONSTRAINT unique_mentor_email UNIQUE (email)
);