ReceivedStatus = require("./ReceivedStatus");

class Sale {
    constructor(client, date, items, shipping){
        this.client = client;
        this.date = date;
        this.items = items;
        this.shipping = shipping;
        this.status = new ReceivedStatus(this);
        this.paymentDate = null;
    }
    getClient(){
        return this.client;
    }
    getDate(){
        return this.date;
    }
    getItems(){
        return this.items;
    }
    getShippingCost(){
        return this.shipping.getShippingCost();
    }
    getDeliveryDate(){
        return this.shipping.getDeliveryDate();
    }
    getStatus(){
        return this.status.getName();
    }
    getPaymentDate(){
        return this.paymentDate;
    }
    getTotalItems(){
        return this.items.reduce((acc, item) => acc + item.getTotal(), 0);
    }
    getTotal(){
        return this.getTotalItems() + this.getShippingCost();
    }
    decreaseStock(){
        this.items.forEach(item => item.decreaseStock());
    }
    increaseStock(){
        this.items.forEach(item => item.increaseStock());
    }
    setPaymentDate(paymentDate){
        this.paymentDate = paymentDate;
    }
    setDeliveryDate(deliveryDate){
        this.shipping.setDeliveryDate(deliveryDate)
    }
    changeStatus(status){
        this.status = status;
    }
    accept(){
        this.status.accept();
    }
    cancel(){
        this.status.cancel();
    }
    deliver(){
        this.status.deliver();
    }
    receive(){
        this.status.receive();
    }
}

module.exports = Sale;