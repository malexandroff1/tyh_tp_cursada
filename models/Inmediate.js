let Shipping = require("./Shipping");

class Inmediate extends Shipping{
    constructor(saleDate) {
        super();
        this.cost = 700;
        this.deliveryDate = saleDate.setDate(1);
    }
    getShippingCost() {
        return this.cost;
    }
    getDeliveryDate() {
        return this.deliveryDate;
    }
}

module.exports = Inmediate;