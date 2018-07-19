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

INSERT INTO projects (date_created) VALUES ("15-02-02");
INSERT INTO projects (date_created) VALUES ("13-12-31");
INSERT INTO projects (date_created) VALUES ("13-09-23");
INSERT INTO projects (date_created) VALUES ("14-07-16");
INSERT INTO projects (date_created) VALUES ("14-08-03");
INSERT INTO projects (date_created) VALUES ("13-11-05");
INSERT INTO projects (date_created) VALUES ("14-01-23");
INSERT INTO projects (date_created) VALUES ("15-05-10");
INSERT INTO projects (date_created) VALUES ("13-10-09");
INSERT INTO projects (date_created) VALUES ("15-03-03");
INSERT INTO projects (date_created) VALUES ("15-04-12");
INSERT INTO projects (date_created) VALUES ("14-02-17");
INSERT INTO projects (date_created) VALUES ("14-05-22");
INSERT INTO projects (date_created) VALUES ("15-01-19");
INSERT INTO projects (date_created) VALUES ("15-02-11");
INSERT INTO projects (date_created) VALUES ("14-04-27");
INSERT INTO projects (date_created) VALUES ("14-07-11");
INSERT INTO projects (date_created) VALUES ("14-09-23");
INSERT INTO projects (date_created) VALUES ("14-11-14");
INSERT INTO projects (date_created) VALUES ("15-05-16");
INSERT INTO projects (date_created) VALUES ("15-05-22");
INSERT INTO projects (date_created) VALUES ("15-05-21");
INSERT INTO projects (date_created) VALUES ("14-10-28");
INSERT INTO projects (date_created) VALUES ("14-11-22");
INSERT INTO projects (date_created) VALUES ("14-09-29");
INSERT INTO projects (date_created) VALUES ("15-01-28");
INSERT INTO projects (date_created) VALUES ("14-10-17");
INSERT INTO projects (date_created) VALUES ("14-07-30");
INSERT INTO projects (date_created) VALUES ("14-04-26");
INSERT INTO projects (date_created) VALUES ("13-09-02");
INSERT INTO projects (date_created) VALUES ("14-11-24");
INSERT INTO projects (date_created) VALUES ("14-11-25");
INSERT INTO projects (date_created) VALUES ("14-02-01");
INSERT INTO projects (date_created) VALUES ("14-12-29");
INSERT INTO projects (date_created) VALUES ("13-09-10");
INSERT INTO projects (date_created) VALUES ("14-12-07");
INSERT INTO projects (date_created) VALUES ("13-07-13");
INSERT INTO projects (date_created) VALUES ("15-01-01");
INSERT INTO projects (date_created) VALUES ("15-02-25");
INSERT INTO projects (date_created) VALUES ("14-04-16");
INSERT INTO projects (date_created) VALUES ("14-09-10");
INSERT INTO projects (date_created) VALUES ("13-11-06");
INSERT INTO projects (date_created) VALUES ("15-05-13");
INSERT INTO projects (date_created) VALUES ("15-04-04");
INSERT INTO projects (date_created) VALUES ("15-01-21");
INSERT INTO projects (date_created) VALUES ("15-07-03");
INSERT INTO projects (date_created) VALUES ("13-10-29");
INSERT INTO projects (date_created) VALUES ("13-09-09");
INSERT INTO projects (date_created) VALUES ("14-05-29");
INSERT INTO projects (date_created) VALUES ("15-04-25");
INSERT INTO projects (date_created) VALUES ("15-03-01");
INSERT INTO projects (date_created) VALUES ("13-11-08");
INSERT INTO projects (date_created) VALUES ("14-07-03");
INSERT INTO projects (date_created) VALUES ("14-10-01");
INSERT INTO projects (date_created) VALUES ("14-12-18");
INSERT INTO projects (date_created) VALUES ("15-04-25");
INSERT INTO projects (date_created) VALUES ("13-09-22");
INSERT INTO projects (date_created) VALUES ("15-06-18");
INSERT INTO projects (date_created) VALUES ("13-10-08");
INSERT INTO projects (date_created) VALUES ("14-11-03");
INSERT INTO projects (date_created) VALUES ("15-02-22");
INSERT INTO projects (date_created) VALUES ("13-10-11");
INSERT INTO projects (date_created) VALUES ("13-11-01");
INSERT INTO projects (date_created) VALUES ("15-05-23");
INSERT INTO projects (date_created) VALUES ("15-02-06");
INSERT INTO projects (date_created) VALUES ("15-04-09");
INSERT INTO projects (date_created) VALUES ("13-10-22");
INSERT INTO projects (date_created) VALUES ("15-05-27");
INSERT INTO projects (date_created) VALUES ("13-09-22");
INSERT INTO projects (date_created) VALUES ("15-06-02");
INSERT INTO projects (date_created) VALUES ("14-02-20");
INSERT INTO projects (date_created) VALUES ("14-04-16");
INSERT INTO projects (date_created) VALUES ("13-08-10");
INSERT INTO projects (date_created) VALUES ("14-09-08");
INSERT INTO projects (date_created) VALUES ("14-08-03");
INSERT INTO projects (date_created) VALUES ("14-06-22");
INSERT INTO projects (date_created) VALUES ("14-05-21");
INSERT INTO projects (date_created) VALUES ("14-05-12");
INSERT INTO projects (date_created) VALUES ("15-04-20");
INSERT INTO projects (date_created) VALUES ("14-02-12");
INSERT INTO projects (date_created) VALUES ("14-07-28");
INSERT INTO projects (date_created) VALUES ("14-07-16");
INSERT INTO projects (date_created) VALUES ("14-02-10");
INSERT INTO projects (date_created) VALUES ("15-06-01");
INSERT INTO projects (date_created) VALUES ("13-11-18");
INSERT INTO projects (date_created) VALUES ("15-05-18");
INSERT INTO projects (date_created) VALUES ("14-08-19");
INSERT INTO projects (date_created) VALUES ("14-08-21");
INSERT INTO projects (date_created) VALUES ("15-01-25");
INSERT INTO projects (date_created) VALUES ("15-01-08");
INSERT INTO projects (date_created) VALUES ("14-06-27");
INSERT INTO projects (date_created) VALUES ("15-05-19");
INSERT INTO projects (date_created) VALUES ("13-09-26");
INSERT INTO projects (date_created) VALUES ("14-04-04");
INSERT INTO projects (date_created) VALUES ("14-10-20");
INSERT INTO projects (date_created) VALUES ("14-01-13");
INSERT INTO projects (date_created) VALUES ("13-12-28");
INSERT INTO projects (date_created) VALUES ("14-06-16");
INSERT INTO projects (date_created) VALUES ("15-03-21");
INSERT INTO projects (date_created) VALUES ("15-06-23");
