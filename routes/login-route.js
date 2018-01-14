const express = require('express');
const login_service = require('../service/login-service');
const {authenticate_mdw} = require('../middleware/authenticate');

const login_path = '/login';
const logout_path = '/logout';

let login_routes = express.Router();

login_routes.post(login_path, (req, res) => {
    login_service.login(req, res);
});

login_routes.delete(logout_path, authenticate_mdw, (req, res) => {
   login_service.logout(req, res);
});

module.exports = {login_routes};