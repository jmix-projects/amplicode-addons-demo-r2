create table users
(
    username varchar(50) not null primary key,
    password varchar(500) not null,
    enabled  boolean not null
);
create table authorities
(
    username  varchar(50) not null,
    authority varchar(50) not null,
    constraint fk_authorities_users foreign key (username) references users (username)
);
create unique index ix_auth_username on authorities (username, authority);

INSERT INTO users (username, password, enabled)
VALUES ('admin', '{noop}admin', true);
INSERT INTO authorities (username, authority)
VALUES ('admin', 'ROLE_ADMIN');

INSERT INTO users (username, password, enabled)
VALUES ('user', '{noop}user', true);
INSERT INTO authorities (username, authority)
VALUES ('user', 'ROLE_USER');
