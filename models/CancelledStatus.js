SaleStatus = require("./SaleStatus");

class CancelledStatus extends SaleStatus{
    constructor(sale){
        super(sale);
        this.name = "Cancelled";
    }
    receive() {}
    accept() {}
    deliver() {}
    cancel() {}
}

module.exports = CancelledStatus;