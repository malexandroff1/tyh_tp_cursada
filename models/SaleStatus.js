class SaleStatus{
    constructor(sale){
        this.sale = sale;
        this.name = null;
    }
    getName() {
        return this.name;
    }
    receive() {
        throw("It must be implemented.");
    }
    accept() {
        throw("It must be implemented.");
    }
    deliver() {
        throw("It must be implemented.");
    }
    cancel() {
        throw("It must be implemented.");
    }
}

module.exports = SaleStatus;