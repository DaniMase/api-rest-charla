const _ = require('lodash');

const {User} = require('../db/user_db_connect');

let insertUser = (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    let user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
};

module.exports = {
    insertUser
}