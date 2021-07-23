let Shipping = require("./Shipping");

class Traditional extends Shipping{
    constructor(saleDate) {
        super();
        this.cost = 450;
        this.deliveryDate = saleDate.setDate(4);
    }
    getShippingCost() {
        return this.cost;
    }
    getDeliveryDate() {
        return this.deliveryDate;
    }
}

module.exports = Traditional;