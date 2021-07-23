SaleStatus = require("./SaleStatus");
AcceptedStatus = require("./AcceptedStatus");
CancelledStatus = require("./CancelledStatus");

class ReceivedStatus extends SaleStatus{
    constructor(sale){
        super(sale);
        this.name = "Received";
    }
    receive() {}
    accept() {
        this.sale.decreaseStock();
        this.sale.setPaymentDate(Date.now());
        this.sale.changeStatus(new AcceptedStatus(this.sale));
    }
    deliver() {}
    cancel() {
        this.sale.changeStatus(new CancelledStatus(this.sale));
    }
}

module.exports = ReceivedStatus;