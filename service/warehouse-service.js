const _ = require('lodash');

const {Warehouse} = require('../db/warehouse_db_connect');
const {ObjectID} = require('mongodb');


/**
 * Find all warehouses
 * @param req
 * @param res
 */
let findAllWarehouses = (req, res) => {
    Warehouse.find().then((warehouse) => {
        res.send(warehouse);
    }).catch((err) => {
        res.status(400).send(err);
    });
};

/**
 * Find warehouse by id
 * @param req
 * @param res
 * @returns {*|Response|void|boolean}
 */
let findWarehouseById = (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Warehouse.findById(id).then((warehouse) => {
        if (!warehouse) {
            return res.status(404).send();
        }
        res.send(warehouse);
    }).catch((err) => {
        res.status(400).send(err);
    });
};

/**
 * Insert warehouse
 * @param req
 * @param res
 */
let insertWarehouse = (req, res) => {
    let warehouse = new Warehouse({
        name: req.body.name,
        capacity: req.body.capacity,
        country: req.body.country
    });

    warehouse.save().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    });
};

/**
 * Delete warehouse
 * @param req
 * @param res
 * @returns {*|Response|void|boolean}
 */
let deleteWarehouse = (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Warehouse.findByIdAndRemove(id).then((warehouse) => {
        if(!warehouse){
            return res.status(404).send();
        }

        res.send(warehouse);
    }).catch((e) => {
        res.status(400).send(e);
    })
};

/**
 * Update warehouse
 * @param req
 * @param res
 * @returns {*|Response|void|boolean}
 */
let updateWarehouse = (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['capacity', 'country']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    body.lastUpdate = new Date().getTime();

    Warehouse.findByIdAndUpdate(id, {$set: body}, {new: true}).then((warehouse) => {
        if(!warehouse) {
            return res.status(404).send();
        }

        res.send({warehouse});
    }).catch((e) => {
        res.status(400).send(e);
    });

};

module.exports = {
    insertWarehouse,
    findAllWarehouses,
    findWarehouseById,
    deleteWarehouse,
    updateWarehouse
};