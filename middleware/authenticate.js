const {User} = require('../db/user_db_connect');

let authenticate_mdw = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if(!user){
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((err) => {
        res.status(401).send(err);
    })
};

module.exports = {authenticate_mdw};