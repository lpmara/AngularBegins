var express = require('express');
var router = express.Router();
let customers = require('../models/customers.model.js');
let customersStub = require('../test/models/customersStub.model.js');


router.get('/', (req, res) => {
    if (req.headers["test"] == "true") {
        customers = customersStub;
    }
    customers.getAllCustomer().then((rows) => {
        res.send(rows);
    }).catch(() => {
        res.send('Error!');
    });
});

router.post('/saveadd', (req, res) => {
    if (req.headers["test"] == "true") {
        customers = customersStub;
    }
    var input = JSON.parse(JSON.stringify(req.body));
    customers.addCustomer(input).then((rows) => {
        res.send(rows);
    }).catch(() => {
        res.send('Error!');
    });
});

router.get('/edit/:id', (req, res) => {
    if (req.headers["test"] == "true") {
        customers = customersStub;
    }
    let id = req.params.id;
    customers.getCustomerById(id)
        .then((rows) => {
            res.send(rows);
        }).catch(() => {
            res.send('Error!');
        });
});

router.post('/save_edit/:id', (req, res) => {
    if (req.headers["test"] == "true") {
        customers = customersStub;
    }
    let id = req.params.id;
    var input = JSON.parse(JSON.stringify(req.body));
    customers.setCustomerById(input, id)
        .then((result) => {
            res.send(result);
        }).catch(() => {
            res.send('Error!');
        });
});

router.get('/delete_customer/:id', (req, res) => {
    if (req.headers["test"] == "true") {
        customers = customersStub;
    }
    let id = req.params.id;
    customers.removeCustomerById(id).then((result) => {
        res.send(result);
    }).catch(() => {
        res.send('Error!');
    });
});

module.exports = router;



