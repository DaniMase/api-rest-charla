const express = require('express');
const product_service = require('../service/product-service');

const base_path = '/products';

let products_router = express.Router();

//Routes defined to product api

products_router.get(base_path, (req, res) => {
    product_service.findAllProducts(req, res);
});

products_router.get(`${base_path}/:id`, (req, res) => {
    product_service.findProductById(req, res);
});

products_router.post(base_path, (req, res) => {
    product_service.insertProduct(req, res);
});

products_router.delete(`${base_path}/:id`, (req, res) => {
    product_service.deleteProduct(req, res);
});

products_router.patch(`${base_path}/:id`, (req, res) => {
   product_service.updateProduct(req, res);
});

module.exports = {products_router};
