let Shipping = require("../models/Shipping");

class Traditional extends Shipping{
    constructor(deliveryDate) {
        super();
        this.cost = 450;
        this.deliveryDate = deliveryDate.setDate(4);
    }
    getShippingCost() {
        return this.cost;
    }
    getDeliveryDate() {
        return this.deliveryDate;
    }
}

module.exports = Traditional;