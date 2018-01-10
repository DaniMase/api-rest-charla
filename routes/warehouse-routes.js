const express = require('express');
const product_service = require('../service/warehouse-service');

const base_path = '/warehouse';

let warehouse_router = express.Router();

//Routes defined to product api

warehouse_router.get(base_path, (req, res) => {
    product_service.findAllWarehouses(req, res);
});

warehouse_router.get(`${base_path}/:id`, (req, res) => {
    product_service.findWarehouseById(req, res);
});

warehouse_router.post(base_path, (req, res) => {
    product_service.insertWarehouse(req, res);
});

warehouse_router.delete(`${base_path}/:id`, (req, res) => {
    product_service.deleteWarehouse(req, res);
});

warehouse_router.patch(`${base_path}/:id`, (req, res) => {
    product_service.updateWarehouse(req, res);
});

module.exports = {warehouse_router};
