let Shipping = require("./Shipping");

class BranchWithdrawal extends Shipping{
    constructor(saleDate) {
        super();
        this.cost = 0;
        this.deliveryDate = null;
    }
    getShippingCost() {
        return this.cost;
    }
    getDeliveryDate() {
        return this.deliveryDate;
    }
}

module.exports = BranchWithdrawal;