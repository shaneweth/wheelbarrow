DROP DATABASE IF EXISTS  wheelbarrow_db;

CREATE DATABASE wheelbarrow_db;

USE wheelbarrow_db;

DROP TABLE IF EXISTS rocks;

CREATE TABLE rocks (
    id INT NOT NULL AUTO_INCREMENT,
    rock_name VARCHAR(255) NULL,
    in_bucket BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

