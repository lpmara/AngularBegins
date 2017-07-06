var express = require('express');
var router = express.Router();
let customers = require('../models/customers.model.js');





router.get('/', (req, res) => {
 
    customers.getAllCustomer().then((rows) => {
        res.send(rows); 
    });
});

router.post('/saveadd', (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        name: input.name,
        address: input.address,
        email: input.email,
        phone: input.phone
    }
    customers.addCustomer(data).then(() => {
        res.redirect('/customers');
    });
});

router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    customers.getCustomerById(id).then((rows) => {
        res.render('edit_customer', {
            layout: 'partial/shared',
            data: rows
        });
    });
});
router.post('/save_edit/:id', (req, res) => {
    let input = JSON.parse(JSON.stringify(req.body));
    let id = req.params.id;
    let data = {
        name: input.name,
        address: input.address,
        email: input.email,
        phone: input.phone
    }
    customers.setCustomerById(data, id).then(() => {
        res.redirect('/customers');
    });
});
router.get('/delete_customer/:id', (req, res) => {
    let id = req.params.id;  
    customers.removeCustomerById(id).then(() => {
        res.redirect('/customers');
    });
});

module.exports = router;



