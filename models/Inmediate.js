let Shipping = require("../models/Shipping");

class Inmediate extends Shipping{
    constructor(deliveryDate) {
        super();
        this.cost = 700;
        this.deliveryDate = deliveryDate.setDate(1);
    }
    getShippingCost() {
        return this.cost;
    }
    getDeliveryDate() {
        return this.deliveryDate;
    }
}

module.exports = Inmediate;