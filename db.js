const spicedPg = require('spiced-pg');
var db = spicedPg(
    process.env.DATABASE_URL ||
        'postgres:postgres:postgres@localhost:5432/timetrackerapp'
);

module.exports.registerUser = (firstname, lastname, email, password) => {
    return db.query(
        `INSERT INTO users (firstname, lastname, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id`,
        [firstname, lastname, email, password]
    );
};

module.exports.getPasswordByEmail = (email) => {
    return db.query(
        `SELECT password, id FROM users 
    WHERE email = $1
    `,
        [email]
    );
};

module.exports.createTimersTable = (userid) => {
    return db.query(`CREATE TABLE user${userid}Timers(
        id SERIAL PRIMARY KEY,
        description TEXT,
        start_at TIMESTAMP NOT NULL,
        end_at TIMESTAMP NOT NULL,
        how_long TIME NOT NULL
    )`);
};

module.exports.updateTimersTable = (
    title,
    time,
    started_at,
    finished_at,
    userid
) => {
    return db.query(
        `INSERT INTO user${userid}Timers (description, how_long, start_at, end_at)
        VALUES ($1, $2, $3, $4)`,
        [title, time, started_at, finished_at]
    );
};

module.exports.getTimersTable = (userid) => {
    return db.query(`SELECT * FROM user${userid}Timers`);
};
