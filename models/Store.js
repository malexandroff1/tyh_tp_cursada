class Store{
    constructor(name, subscription, products=null, sales=null){
        this.name = name;
        this.subscription = subscription;
        this.products = products || [];
        this.sales = sales || [];
    }
    getProducts(){
        return this.products;
    }
    addProduct(product){
        this.products.push(product);
    }
    removeProduct(product){
        this.products = this.products.filter(currentProduct => currentProduct != product);
    }
    getSales(){
        return this.sales;
    }
    addSale(sale){
        this.sales.push(sale);
    }
    removeSale(sale){
        this.sales = this.sales.filter(currentSale => currentSale != sale);
    }
    subscriptionAmount(){
        return this.subscription.getAmount(this.sales);
    }
}

module.exports = Store;