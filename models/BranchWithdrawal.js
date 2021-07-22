let Shipping = require("../models/Shipping");

class BranchWithdrawal extends Shipping{
    constructor(deliveryDate) {
        super();
        this.cost = 0;
        this.deliveryDate = deliveryDate;
    }
    getShippingCost() {
        return this.cost;
    }
    getDeliveryDate() {
        return this.deliveryDate;
    }
}

module.exports = BranchWithdrawal;