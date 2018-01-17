const _ = require('lodash');
const {Product} = require('../db/products_db_connect');

let contain_warehouse = (req, res, next) => {
    let body = _.pick(req.body, ['warehouse']);

    if(body.warehouse === '' || body.warehouse === undefined){
       return res.status(400).send({
           errorMessage: 'Warehouse id can not be empty'
       });
    }

    next();
};

module.exports = {contain_warehouse};
