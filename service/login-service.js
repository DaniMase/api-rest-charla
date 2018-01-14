const _ = require('lodash');

const {User} = require('../db/user_db_connect');

let login = (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send();
        });
    }).catch((e) => {
        res.status(400).send(e);
    });
};

let logout = (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }).catch((e) => {
        res.status(400).send(e);
    });
};

module.exports = {
    login,
    logout
};