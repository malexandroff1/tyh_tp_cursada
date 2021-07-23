SaleStatus = require("./SaleStatus");

class DeliveredStatus extends SaleStatus{
    constructor(sale){
        super(sale);
        this.name = "Delivered";
    }
    receive() {}
    accept() {}
    deliver() {}
    cancel() {}
}

module.exports = DeliveredStatus;