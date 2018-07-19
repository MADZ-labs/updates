DROP DATABASE IF EXISTS update_feature;

CREATE DATABASE update_feature;

USE update_feature;

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  date_created DATE,
  PRIMARY KEY (id)
);

CREATE TABLE updates (
  id INT NOT NULL auto_increment,
  title VARCHAR(50),
  description VARCHAR(250),
  update_date DATE,
  comments INT,
  likes INT,
  project_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);
