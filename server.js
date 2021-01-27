const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const cookieSession = require('cookie-session');
const { compare, hash } = require('./bc');
const db = require('./db.js');

// const db = require('./db.js');

const app = express();

app.use(express.json());

app.use(
    cookieSession({
        secret: 'I want to get this job very much',
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(express.static(path.join(__dirname, 'build')));

app.post('/register', (req, res) => {
    console.log('req.body: ', req.body);
    if (
        !req.body.firstname ||
        !req.body.lastname ||
        !req.body.email ||
        !req.body.password
    ) {
        res.json({ success: false });
    } else {
        hash(req.body.password).then((hashed) => {
            db.registerUser(
                req.body.firstname,
                req.body.lastname,
                req.body.email,
                hashed
            )
                .then((result) => {
                    req.session.userId = result.rows[0].id;
                    db.createTimersTable(req.session.userId)
                        .then(() => {
                            res.json({ success: true });
                        })
                        .catch((error) => {
                            console.log('error in createTimersTable', err);
                        });
                })
                .catch((err) => {
                    console.log('error in register', err);
                    res.json({ success: false });
                });
        });
    }
});

app.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({ success: false });
    } else {
        db.getPasswordByEmail(req.body.email)
            .then((result) => {
                compare(req.body.password, result.rows[0].password)
                    .then((outcome) => {
                        if (outcome) {
                            req.session.userId = result.rows[0].id;
                            res.json({ success: true });
                        } else {
                            res.json({ success: false });
                        }
                    })
                    .catch((err) => {
                        console.log('error in comparing password', err);
                    });
            })
            .catch((err) => {
                console.log('error in getpasswordbyemail', err);
                res.json({ success: false });
            });
    }
});

app.post('/customBooking', (req, res) => {
    if (
        !req.body.title ||
        !req.body.time ||
        !req.body.started_at ||
        !req.body.finished_at
    ) {
        res.json({ success: false });
    } else {
        console.log(
            req.body.title,
            req.body.time,
            req.body.started_at,
            req.body.finished_at,
            req.session.userId
        );
        db.updateTimersTable(
            req.body.title,
            req.body.time,
            req.body.started_at,
            req.body.finished_at,
            req.session.userId
        )
            .then(() => {
                res.json({ success: true });
            })
            .catch((error) => {
                console.log('error in updateTimersTable', error);
            });
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/stopwatch/calendar', function (req, res) {
    console.log('successful stopwatch/calendar request');
    res.status(200);
    res.end();
});

app.get('/logout', (req, res) => {
    console.log('logout has been called');
    req.session = null;
    res.redirect('/');
});

app.get('*', function (req, res) {
    if (
        !req.session.userId &&
        req.url !== '/register' &&
        req.url !== '/login'
    ) {
        console.log('no session cookie present!');
        res.redirect('/');
    } else {
        console.log('session cookie present!');
    }
});

//Ports will later be handled through dotenv
app.listen(8080, function () {
    console.log('Server is listening');
});
