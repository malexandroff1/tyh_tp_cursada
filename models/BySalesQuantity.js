let Subscription = require("./Subscription");

class BySalesQuantity extends Subscription{
    constructor(baseAmount, salesLimit, additionalAmount) {
        super();
        this.baseAmount = baseAmount;
        this.salesLimit = salesLimit;
        this.additionalAmount = additionalAmount;
    }
    getAdditionalSalesQuantity(sales){
        return Math.max(sales.length - this.salesLimit, 0);
    }
    getAmount(sales){
        let additionalSales = this.getAdditionalSalesQuantity(sales);
        return this.baseAmount + additionalSales*this.additionalAmount
    }
}

module.exports = BySalesQuantity;