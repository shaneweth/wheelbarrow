DROP DATABASE IF EXISTS  wheelbarrow_db;

CREATE DATABASE wheelbarrow_db;

USE wheelbarrow_db;

CREATE TABLE rocks (
    id INT NOT NULL AUTO_INCREMENT,
    rock_name VARCHAR(10) NULL,
    in_bucket BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

