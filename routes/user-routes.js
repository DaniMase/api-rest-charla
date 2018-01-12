const express = require('express');
const user_service = require('../service/user-service');
const {authenticate_mdw} = require('../middleware/authenticate');

const base_path = '/users';

let user_routes = express.Router();

user_routes.post(base_path, (req, res) => {
    user_service.insertUser(req, res);
});

user_routes.get(`${base_path}/me`, authenticate_mdw, (req, res) => {
    res.send(req.user);
});

module.exports = {user_routes};