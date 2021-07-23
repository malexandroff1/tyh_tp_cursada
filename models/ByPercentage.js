let Subscription = require("./Subscription");

class ByPercentage extends Subscription{
    constructor(percentage) {
        super();
        this.percentage = percentage;
    }
    getAmount(sales){
        return sales.reduce((acc, sale) => acc+sale.getTotal(), 0)*this.percentage/100;
    }
}

module.exports = ByPercentage;