class Shipping{
    getShippingCost() {
        throw("It must be implemented.");
    }
    getDeliveryDate() {
        throw("It must be implemented.");
    }
    setDeliveryDate(deliveryDate) {
        this.deliveryDate = deliveryDate;
    }
}

module.exports = Shipping;