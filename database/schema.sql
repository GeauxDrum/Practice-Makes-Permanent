DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE musicians (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE practice_sessions (
  id int NOT NULL AUTO_INCREMENT,
  musician_id int NOT NULL,
  score int NOT NULL,
  PRIMARY KEY (id)
);

INSERT into musicians (name) VALUES ("Mike");
INSERT into musicians (name) VALUES ("Chris");

INSERT into practice_sessions (musician_id, score) VALUES (1, 100);
INSERT into practice_sessions (musician_id, score) VALUES (1, 120);
INSERT into practice_sessions (musician_id, score) VALUES (1, 140);
INSERT into practice_sessions (musician_id, score) VALUES (2, 170);
INSERT into practice_sessions (musician_id, score) VALUES (2, 110);
INSERT into practice_sessions (musician_id, score) VALUES (2, 1280);