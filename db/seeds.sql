DROP TABLE IF EXISTS rocks;

CREATE TABLE rocks (
    id INT NOT NULL AUTO_INCREMENT,
    rock_name VARCHAR(255) NULL,
    in_bucket BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO rocks (rock_name) VALUES ("granite");
INSERT INTO rocks (rock_name) VALUES ("quartz");
INSERT INTO rocks (rock_name) VALUES ("opal");
INSERT INTO rocks (rock_name) VALUES ("garnet");
INSERT INTO rocks (rock_name) VALUES ("soapstone");