DROP DATABASE IF EXISTS update_feature;

CREATE DATABASE update_feature;

USE update_feature;

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  date_created DATE,
  ending_date DATE,
  backers INT,
  money_raised NUMERIC,
  goal NUMERIC,
  PRIMARY KEY (id)
);

CREATE TABLE updates (
  id INT NOT NULL auto_increment,
  title VARCHAR(100),
  description VARCHAR(1000),
  update_date DATE,
  comments INT,
  likes INT,
  project_id INT,
  backers_only BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);
