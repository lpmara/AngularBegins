
class Customers {
    constructor() {
        this.needParameterText = "Need Parameter";
        
        // this.customerMockup = {};

    }
    getAllCustomer() {
        return new Promise((resolve)=>{ resolve(true)});
    }
    addCustomer(data) {
        return new Promise((resolve)=>{ resolve(true)});
    }
    getCustomerById(id) {
        return new Promise((resolve)=>{ resolve(true)});
    }
    setCustomerById(data, id) {
        return new Promise((resolve)=>{ resolve(true)});
    }
    removeCustomerById(id) {
        return new Promise((resolve)=>{ resolve(true)});
    }

    
}

module.exports = new Customers();