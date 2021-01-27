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
