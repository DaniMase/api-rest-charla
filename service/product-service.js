const _ = require('lodash');

// const {Product} = require('../models/products');
const {Product} = require('../db/products_db_connect');
const {Warehouse} = require('../db/warehouse_db_connect');

const {ObjectID} = require('mongodb');

/**
 * Find all products
 * @param req
 * @param res
 */
let findAllProducts = (req, res) => {
    Product.find().then((products) => {
        Warehouse.populate(products, {path: 'warehouse'}).then((products) => {
            res.send({products});
        }).catch((err) => {
            res.status(400).send();
        });
    }).catch((err) => {
        res.status(400).send();
    });
};

/**
 * Find product by id
 * @param req
 * @param res
 * @returns {*|Response|void|boolean}
 */
let findProductById = (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Product.findById(id).then((product) => {
        if (!product) {
            return res.status(404).send();
        }
        Warehouse.populate(product, {path: 'warehouse'}).then((product) => {
            res.send({product});
        }).catch((err) => {
            res.status(400).send();
        });
    }).catch((err) => {
        res.status(400).send(err);
    });
};

/**
 * Insert product
 * @param req
 * @param res
 */
let insertProduct = (req, res) => {
    let product = new Product({
        name: req.body.name,
        stock: req.body.stock,
        warehouse: req.body.warehouse,
        provider: req.body.provider
    });

    let id = req.body.warehouse;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    product.save().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    });

};

/**
 * Delete product
 * @param req
 * @param res
 * @returns {*|Response|void|boolean}
 */
let deleteProduct = (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Product.findByIdAndRemove(id).then((prod) => {
        if (!prod) {
            return res.status(404).send();
        }

        res.send(prod);
    }).catch((e) => {
        res.status(400).send(e);
    })
};

/**
 * Update product
 * @param req
 * @param res
 * @returns {*|Response|void|boolean}
 */
let updateProduct = (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'stock', 'warehouse', 'provider', 'lastUpdate']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    body.lastUpdate = new Date().getTime();

    Product.findByIdAndUpdate(id, {$set: body}, {new: true}).then((prod) => {
        if (!prod) {
            return res.status(404).send();
        }

        res.send({prod});
    }).catch((e) => {
        res.status(400).send(e);
    });

};

module.exports = {
    insertProduct,
    findAllProducts,
    findProductById,
    deleteProduct,
    updateProduct
};