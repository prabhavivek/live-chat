DROP TABLE IF EXISTS  messages;
DROP TABLE IF EXISTS group_details;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id  SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR (20) NOT  NULL ,
    email_id VARCHAR (20) NOT NULL,
    password VARCHAR (20) NOT NULL
);
CREATE  TABLE  group_details(
    group_id  SERIAL PRIMARY KEY NOT NULL,
    group_name VARCHAR(20) NOT NULL ,
    user_id INTEGER[]  NULL
);
CREATE  TABLE  messages(
    message_id  SERIAL PRIMARY KEY NOT NULL ,
    message VARCHAR NOT NULL,
    user_id INT NOT NULL,
    par_user_id INT NULL
    group_id INT  NULL,
    CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(user_id),
    CONSTRAINT fk_users FOREIGN KEY(par_user_id) REFERENCES users(user_id),
    CONSTRAINT fk_group_details FOREIGN KEY(group_id) REFERENCES group_details(group_id)
);

