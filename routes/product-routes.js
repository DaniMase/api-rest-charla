const express = require('express');
const product_service = require('../service/product-service');

const base_path = '/products';

let router = express.Router();

//Routes defined to product api

router.get(base_path, (req, res) => {
    product_service.findAllProducts(req, res);
});

router.get(`${base_path}/:id`, (req, res) => {
    product_service.findProductById(req, res);
});

router.post(base_path, (req, res) => {
    product_service.insertProduct(req, res);
});

router.delete(`${base_path}/:id`, (req, res) => {
    product_service.deleteProduct(req, res);
});

router.patch(`${base_path}/:id`, (req, res) => {
   product_service.updateProduct(req, res);
});

module.exports = {router};
