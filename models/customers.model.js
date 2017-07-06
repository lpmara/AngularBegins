var database = require('../CG.js');

class Customers {
    constructor() {
        this.needParameterText = "Need Parameter";
    }
    getAllCustomer() {
        return database.execQuery('SELECT * FROM customer', []);
    }
    addCustomer(data) {
        if (data) {
            return database.execQuery('INSERT INTO customer SET ?', data);
        } else {
            return new Promise((resolve, reject) => { reject({ message: this.needParameterText, result: false }) });
        }
    }
    getCustomerById(id) {
        if (id) {
            return database.execQuery('SELECT * FROM customer WHERE id = ?', id);
        } else {
            return new Promise((resolve, reject) => { reject({ message: this.needParameterText, result: false }) });
        }
    }
    setCustomerById(data, id) {
        if (data && id) {
            return database.execQuery('UPDATE customer set ? WHERE id = ? ', [data, id]);
        } else {
            return new Promise((resolve, reject) => { reject({ message: this.needParameterText, result: false }) });
        }
    }
    removeCustomerById(id) {
        if (id) {
            return database.execQuery('DELETE FROM customer WHERE id = ? ', id);
        } else {
            return new Promise((resolve, reject) => { reject({ message: this.needParameterText, result: false }) });
        }
    }

}

module.exports = new Customers();

