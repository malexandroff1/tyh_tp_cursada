SaleStatus = require("./SaleStatus");
ReceivedStatus = require("./ReceivedStatus");
DeliveredStatus = require("./DeliveredStatus");

class AcceptedStatus extends SaleStatus{
    constructor(sale){
        super(sale);
        this.name = "Accepted";
    }
    receive() {
        this.sale.increaseStock();
        this.sale.changeStatus(new ReceivedStatus(this.sale));
    }
    accept() {}
    deliver() {
        this.sale.setDeliveryDate(Date.now());
        this.sale.changeStatus(new DeliveredStatus(this.sale));
    }
    cancel() {}
}

module.exports = AcceptedStatus;