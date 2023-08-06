DROP DATABASE IF EXISTS mylist_db;
CREATE DATABASE mylist_db;

USE mylist_db;

CREATE TABLE enemie (
    enemie_id INT NOT NULL AUTO_INCREMENT,
    enemie_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    grade VARCHAR(255) NOT NULL,
    rank VARCHAR(255) NOT NULL,
    PRIMARY KEY (enemie_id)
);

CREATE TABLE mylist (
    mylist_id INT NOT NULL AUTO_INCREMENT,
    mylist_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (mylist_id)
);

Show tables;
SELECT "enemie" AS 'table', COUNT(*) AS 'rows' FROM 'enemie'
SELECT "mylist" AS 'table', COUNT(*) AS 'rows' FROM 'mylist'
SELECT "enemie_mylist" AS 'table', COUNT(*) AS 'rows' FROM 'enemie_mylist'